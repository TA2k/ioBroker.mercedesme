#!/usr/bin/env node
/**
 * Proto vs APK Smali Field Comparison Script
 * Compares proto field definitions with Mercedes APK smali files
 *
 * Mercedes uses Square Wire library - parses ADAPTER smali files
 *
 * Usage: node compare-proto-apk.js [message-name]
 * Example: node compare-proto-apk.js ChargingScheduleActive
 */

const fs = require('fs');
const path = require('path');

const PROTO_DIR = path.join(__dirname, 'protos');
const APK_BASE_DIR = path.join(__dirname, '..', '.docu', 'mercedesapk.out', 'unknown',
    'com.daimler.ris.mercedesme.ece.android');

// Find all smali_classes directories that have generated proto files
function findSmaliDirs() {
    if (!fs.existsSync(APK_BASE_DIR)) return [];
    return fs.readdirSync(APK_BASE_DIR)
        .filter(d => d.startsWith('smali'))
        .map(d => path.join(APK_BASE_DIR, d, 'com', 'daimler', 'mbmobilesdk', 'generated'))
        .filter(d => fs.existsSync(d));
}

// Parse proto file and extract message fields (including nested)
function parseProtoFile(protoPath) {
    const content = fs.readFileSync(protoPath, 'utf8');
    const messages = {};

    function parseMessages(text, prefix = '') {
        const noComments = text.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

        const msgRegex = /message\s+(\w+)\s*\{/g;
        let match;
        let lastEnd = 0;

        while ((match = msgRegex.exec(noComments)) !== null) {
            // Skip if this match starts before where we finished the last message body
            // This prevents re-matching nested messages at the outer level
            if (match.index < lastEnd) continue;

            const msgName = match[1];
            const fullName = prefix ? `${prefix}$${msgName}` : msgName;
            const startIdx = match.index + match[0].length;

            let braceCount = 1;
            let idx = startIdx;
            while (braceCount > 0 && idx < noComments.length) {
                if (noComments[idx] === '{') braceCount++;
                if (noComments[idx] === '}') braceCount--;
                idx++;
            }

            lastEnd = idx; // Track where this message ends
            const body = noComments.substring(startIdx, idx - 1);
            const fields = extractFields(body);

            messages[fullName] = fields;

            // Parse nested messages
            parseMessages(body, fullName);
        }
    }

    parseMessages(content);
    return messages;
}

// Extract fields from message body (with types)
function extractFields(body) {
    const fields = {};
    const lines = body.split('\n');

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('message ') ||
            trimmed.startsWith('enum ') || trimmed.startsWith('oneof ') ||
            trimmed.startsWith('reserved') || trimmed.startsWith('option')) continue;

        // Match: [repeated] type name = number
        const fieldMatch = trimmed.match(/^(?:repeated\s+)?(map<[^>]+>|[\w.]+)\s+(\w+)\s*=\s*(\d+)/);
        if (fieldMatch) {
            fields[fieldMatch[2]] = {
                tag: parseInt(fieldMatch[3]),
                type: fieldMatch[1]
            };
        }
    }

    return fields;
}

// Wire type mappings from ProtoAdapter
const WIRE_TYPE_MAP = {
    'BOOL': 'bool',
    'BOOL_VALUE': 'google.protobuf.BoolValue',
    'INT32': 'int32',
    'INT32_VALUE': 'google.protobuf.Int32Value',
    'INT64': 'int64',
    'INT64_VALUE': 'google.protobuf.Int64Value',
    'UINT32': 'uint32',
    'UINT32_VALUE': 'google.protobuf.UInt32Value',
    'UINT64': 'uint64',
    'UINT64_VALUE': 'google.protobuf.UInt64Value',
    'FLOAT': 'float',
    'FLOAT_VALUE': 'google.protobuf.FloatValue',
    'DOUBLE': 'double',
    'DOUBLE_VALUE': 'google.protobuf.DoubleValue',
    'STRING': 'string',
    'STRING_VALUE': 'google.protobuf.StringValue',
    'BYTES': 'bytes',
    'BYTES_VALUE': 'google.protobuf.BytesValue',
};

// Parse Wire ADAPTER smali file - extract fields from decode() method (more reliable for types)
function parseAdapterSmali(smaliPath) {
    if (!fs.existsSync(smaliPath)) return null;

    const content = fs.readFileSync(smaliPath, 'utf8');
    const fields = {};

    // Parse decode() method - it has clear tag->type mapping
    const decodeMatch = content.match(/\.method public decode\(Lcom\/squareup\/wire\/ProtoReader;\)[^\n]+[\s\S]*?\.end method/);
    if (decodeMatch) {
        const decodeBody = decodeMatch[0];
        const lines = decodeBody.split('\n');

        let currentTag = null;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            // Look for if-eq comparisons with tag constants: if-eq v3, v7 where v7 was set to tag
            // Pattern: const/4 vX, TAG ... if-eq vY, vX
            const constMatch = line.match(/const\/(?:4|16)\s+([vp]\d+),\s*(0x[0-9a-fA-F]+|-?\d+)/);
            if (constMatch) {
                let tagNum = constMatch[2];
                if (tagNum.startsWith('0x')) {
                    tagNum = parseInt(tagNum, 16);
                } else {
                    tagNum = parseInt(tagNum);
                }
                if (tagNum > 0 && tagNum < 100) {
                    currentTag = tagNum;
                }
            }

            // Look for ProtoAdapter type access after if-eq: sget-object ProtoAdapter;->TYPE
            const typeMatch = line.match(/sget-object\s+[^,]+,\s*Lcom\/squareup\/wire\/ProtoAdapter;->(\w+):/);
            if (typeMatch && currentTag) {
                const wireType = typeMatch[1];
                const protoType = WIRE_TYPE_MAP[wireType] || wireType.toLowerCase();

                // Find field name from constructor call or move instruction
                // Look backwards for the label/cond that started this block
                let fieldName = null;
                for (let j = i - 1; j >= Math.max(0, i - 10); j--) {
                    // Look for label like :cond_0
                    if (lines[j].match(/^\s*:cond_\d+/)) {
                        // Now search forward from label to find move-object with field hint
                        for (let k = j; k < i; k++) {
                            const moveMatch = lines[k].match(/move-object\s+([vp]\d+),\s+([vp]\d+)/);
                            if (moveMatch) {
                                // Check if there's a constructor reference nearby
                                break;
                            }
                        }
                        break;
                    }
                }

                // Store with tag (we'll match by tag later)
                if (!fields[`__tag_${currentTag}`]) {
                    fields[`__tag_${currentTag}`] = { tag: currentTag, type: protoType };
                }
                currentTag = null;
            }
        }
    }

    // Parse encode() method to get field names with types
    // Pattern: sget-object ProtoAdapter->TYPE ... const/4 TAG ... getter ... encodeWithTag
    const encodeMatch = content.match(/\.method public encode\(Lcom\/squareup\/wire\/ProtoWriter;[^)]*\)V[\s\S]*?\.end method/);
    if (encodeMatch) {
        const encodeBody = encodeMatch[0];
        const lines = encodeBody.split('\n');

        let currentType = null;
        let currentTag = null;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            // Look for ProtoAdapter type (comes first): sget-object ProtoAdapter;->TYPE
            const typeMatch = line.match(/sget-object\s+[^,]+,\s*Lcom\/squareup\/wire\/ProtoAdapter;->(\w+):/);
            if (typeMatch) {
                const wireType = typeMatch[1];
                currentType = WIRE_TYPE_MAP[wireType] || wireType.toLowerCase();
            }

            // Look for const with tag number (comes after type)
            const constMatch = line.match(/const\/(?:4|16)\s+[vp]\d+,\s*(0x[0-9a-fA-F]+|-?\d+)/);
            if (constMatch) {
                let tagNum = constMatch[1];
                if (tagNum.startsWith('0x')) {
                    tagNum = parseInt(tagNum, 16);
                } else {
                    tagNum = parseInt(tagNum);
                }
                if (tagNum > 0 && tagNum < 100) {
                    currentTag = tagNum;
                }
            }

            // Look for getter method followed by encodeWithTag
            const getterMatch = line.match(/invoke-virtual\s+\{[^}]+\},\s*[^;]+;->get(\w+)\(\)/);
            if (getterMatch) {
                // Check if encodeWithTag follows within 5 lines
                let hasEncodeWithTag = false;
                for (let j = i + 1; j < Math.min(i + 6, lines.length); j++) {
                    if (lines[j].includes('encodeWithTag')) {
                        hasEncodeWithTag = true;
                        break;
                    }
                }
                if (hasEncodeWithTag && currentTag) {
                    let fieldName = getterMatch[1];
                    fieldName = fieldName.replace(/([A-Z])/g, '_$1').toLowerCase();
                    if (fieldName.startsWith('_')) fieldName = fieldName.substring(1);

                    // Store field with tag and type
                    fields[fieldName] = {
                        tag: currentTag,
                        type: currentType
                    };

                    // Reset for next field
                    currentTag = null;
                    currentType = null;
                }
            }

            // Reset on method end
            if (line.includes('.end method')) {
                currentTag = null;
                currentType = null;
            }
        }
    }

    // Remove temporary __tag_ entries
    for (const key of Object.keys(fields)) {
        if (key.startsWith('__tag_')) {
            delete fields[key];
        }
    }

    return Object.keys(fields).length > 0 ? fields : null;
}

// Parse main smali file for field declarations
function parseMainSmali(smaliPath) {
    if (!fs.existsSync(smaliPath)) return null;

    const content = fs.readFileSync(smaliPath, 'utf8');
    const fields = {};

    // Look for .field declarations
    const fieldRegex = /\.field\s+(?:private|public)\s+(?:final\s+)?(\w+):/g;
    let match;
    while ((match = fieldRegex.exec(content)) !== null) {
        const fieldName = match[1];
        if (!fieldName.startsWith('$') && fieldName !== 'ADAPTER' &&
            fieldName !== 'Companion' && fieldName !== 'serialVersionUID' &&
            !fieldName.startsWith('hashCode')) {
            fields[fieldName] = true;
        }
    }

    return fields;
}

// Find smali files for a message
function findSmaliFiles(messageName, smaliDirs) {
    // Handle nested messages: Parent$Child -> file is Parent$Child.smali
    const adapterFileName = `${messageName}$Companion$ADAPTER$1.smali`;
    const mainFileName = `${messageName}.smali`;

    for (const dir of smaliDirs) {
        const adapterPath = path.join(dir, adapterFileName);
        const mainPath = path.join(dir, mainFileName);

        if (fs.existsSync(adapterPath)) {
            return {
                main: mainPath,
                adapter: adapterPath
            };
        }
    }
    return null;
}

// List all available smali message files
function listAllSmaliMessages(smaliDirs) {
    const messages = new Set();

    for (const dir of smaliDirs) {
        if (!fs.existsSync(dir)) continue;
        const files = fs.readdirSync(dir);

        for (const file of files) {
            if (!file.endsWith('.smali')) continue;

            // Skip Companion/ADAPTER helper files
            if (file.includes('$Companion') || file.includes('$ADAPTER')) continue;

            // Get message name (could be Parent$Child)
            const msgName = file.replace('.smali', '');
            if (msgName) {
                messages.add(msgName);
            }
        }
    }

    return Array.from(messages);
}

// Compare and print results (including type comparison)
function compare(protoName, protoFields, smaliFields) {
    const results = { matches: [], mismatches: [], typeMismatches: [], missingInProto: [], missingInSmali: [] };

    if (!smaliFields || Object.keys(smaliFields).length === 0) {
        results.missingInSmali = Object.entries(protoFields).map(([f, data]) => ({
            field: f,
            tag: typeof data === 'object' ? data.tag : data
        }));
        return results;
    }

    const normalize = name => name.toLowerCase().replace(/_/g, '');

    const smaliNorm = {};
    for (const [name, data] of Object.entries(smaliFields)) {
        const tag = typeof data === 'object' ? data.tag : data;
        const type = typeof data === 'object' ? data.type : null;
        smaliNorm[normalize(name)] = { name, tag, type };
    }

    const protoNorm = {};
    for (const [name, data] of Object.entries(protoFields)) {
        const tag = typeof data === 'object' ? data.tag : data;
        const type = typeof data === 'object' ? data.type : null;
        protoNorm[normalize(name)] = { name, tag, type };
    }

    for (const [norm, proto] of Object.entries(protoNorm)) {
        const smali = smaliNorm[norm];
        if (smali) {
            if (proto.tag !== smali.tag) {
                results.mismatches.push({
                    field: proto.name, protoTag: proto.tag,
                    smaliTag: smali.tag, smaliName: smali.name
                });
            } else if (smali.type && proto.type && !typesMatch(proto.type, smali.type)) {
                results.typeMismatches.push({
                    field: proto.name, tag: proto.tag,
                    protoType: proto.type, smaliType: smali.type
                });
            } else {
                results.matches.push({ field: proto.name, tag: proto.tag, type: proto.type });
            }
            delete smaliNorm[norm];
        } else {
            results.missingInSmali.push({ field: proto.name, tag: proto.tag, type: proto.type });
        }
    }

    for (const [norm, smali] of Object.entries(smaliNorm)) {
        results.missingInProto.push({ field: smali.name, tag: smali.tag, type: smali.type });
    }

    return results;
}

// Check if proto type matches smali type
function typesMatch(protoType, smaliType) {
    if (!protoType || !smaliType) return true; // Can't compare if missing

    // Normalize types for comparison
    const normalize = t => t.toLowerCase().replace(/^google\.protobuf\./, '').replace('value', '_value');

    const pNorm = normalize(protoType);
    const sNorm = normalize(smaliType);

    // Direct match
    if (pNorm === sNorm) return true;

    // Wrapper type matching: bool vs bool_value
    if (pNorm + '_value' === sNorm) return false; // Proto has primitive, APK has wrapper
    if (pNorm === sNorm + '_value') return false; // Proto has wrapper, APK has primitive

    // Same base type
    if (pNorm.replace('_value', '') === sNorm.replace('_value', '')) {
        // Both are same base but one is wrapper
        return pNorm.includes('_value') === sNorm.includes('_value');
    }

    return true; // Unknown types, assume match
}

function printResults(name, results, verbose) {
    const hasIssues = results.mismatches.length > 0 ||
                      results.typeMismatches.length > 0 ||
                      results.missingInProto.length > 0;

    if (!hasIssues && !verbose) return false;

    console.log(`\n${'='.repeat(60)}`);
    console.log(`Message: ${name}`);

    if (results.mismatches.length > 0) {
        console.log('\n[MISMATCH] Tag differences:');
        for (const m of results.mismatches) {
            console.log(`  ${m.field}: proto=${m.protoTag}, APK=${m.smaliTag}`);
        }
    }

    if (results.typeMismatches.length > 0) {
        console.log('\n[TYPE MISMATCH] Type differences:');
        for (const m of results.typeMismatches) {
            console.log(`  ${m.field} (tag=${m.tag}): proto=${m.protoType}, APK=${m.smaliType}`);
        }
    }

    if (results.missingInProto.length > 0) {
        console.log('\n[MISSING IN PROTO] Fields in APK:');
        for (const m of results.missingInProto) {
            console.log(`  ${m.field} = ${m.tag}${m.type ? ` (${m.type})` : ''}`);
        }
    }

    if (verbose && results.missingInSmali.length > 0) {
        console.log('\n[MISSING IN APK] Fields in proto:');
        for (const m of results.missingInSmali) {
            console.log(`  ${m.field} = ${m.tag}${m.type ? ` (${m.type})` : ''}`);
        }
    }

    if (results.matches.length > 0) {
        console.log(`\n[OK] ${results.matches.length} fields match`);
    }

    return hasIssues;
}

// Main
function main() {
    const args = process.argv.slice(2);
    const verbose = args.includes('-v') || args.includes('--verbose');
    const showEmpty = args.includes('--empty');
    const filter = args.find(a => !a.startsWith('-'));

    console.log('Proto vs APK Comparison (Wire library)');

    const smaliDirs = findSmaliDirs();
    if (smaliDirs.length === 0) {
        console.error('ERROR: No smali directories found in', APK_BASE_DIR);
        process.exit(1);
    }
    console.log(`Found ${smaliDirs.length} smali directories`);

    // Parse protos
    const protoFiles = ['vehicle-events.proto', 'vehicle-commands.proto', 'client.proto'];
    let allProtos = {};

    for (const pf of protoFiles) {
        const pp = path.join(PROTO_DIR, pf);
        if (fs.existsSync(pp)) {
            const msgs = parseProtoFile(pp);
            allProtos = { ...allProtos, ...msgs };
            console.log(`Parsed ${pf}: ${Object.keys(msgs).length} messages`);
        }
    }

    // Get smali messages
    const smaliMsgs = listAllSmaliMessages(smaliDirs);
    console.log(`Found ${smaliMsgs.length} smali messages`);

    // Filter
    let toCheck = filter
        ? Object.keys(allProtos).filter(m => m.toLowerCase().includes(filter.toLowerCase()))
        : Object.keys(allProtos);

    let issues = 0, checked = 0, empty = 0;

    for (const msgName of toCheck) {
        const protoFields = allProtos[msgName];

        // Check if proto has no fields (placeholder)
        if (Object.keys(protoFields).length === 0) {
            // Find if smali exists with fields
            const smaliFiles = findSmaliFiles(msgName, smaliDirs);
            if (smaliFiles) {
                const mainFields = parseMainSmali(smaliFiles.main);
                if (mainFields && Object.keys(mainFields).length > 0) {
                    if (showEmpty || filter) {
                        console.log(`\n[EMPTY PROTO] ${msgName} - has APK fields: ${Object.keys(mainFields).join(', ')}`);
                    }
                    empty++;
                }
            }
            continue;
        }

        const smaliFiles = findSmaliFiles(msgName, smaliDirs);
        if (!smaliFiles) continue;

        const adapterFields = parseAdapterSmali(smaliFiles.adapter);
        if (!adapterFields) continue;

        checked++;
        const results = compare(msgName, protoFields, adapterFields);
        if (printResults(msgName, results, verbose || !!filter)) {
            issues++;
        }
    }

    console.log(`\n${'='.repeat(60)}`);
    console.log(`Proto messages: ${Object.keys(allProtos).length}`);
    console.log(`Checked: ${checked}`);
    console.log(`Empty protos with APK data: ${empty}`);
    console.log(`Issues: ${issues}`);

    if (!filter) {
        console.log('\nUsage:');
        console.log('  node compare-proto-apk.js                  # Check all');
        console.log('  node compare-proto-apk.js Charging         # Filter by name');
        console.log('  node compare-proto-apk.js -v               # Verbose');
        console.log('  node compare-proto-apk.js --empty          # Show empty protos');
    }
}

main();
