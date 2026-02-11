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

// Extract fields from message body
function extractFields(body) {
    const fields = {};
    const lines = body.split('\n');

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('message ') ||
            trimmed.startsWith('enum ') || trimmed.startsWith('oneof ') ||
            trimmed.startsWith('reserved') || trimmed.startsWith('option')) continue;

        // Match: [repeated] type name = number
        const fieldMatch = trimmed.match(/^(?:repeated\s+)?(?:map<[^>]+>|[\w.]+)\s+(\w+)\s*=\s*(\d+)/);
        if (fieldMatch) {
            fields[fieldMatch[1]] = parseInt(fieldMatch[2]);
        }
    }

    return fields;
}

// Parse Wire ADAPTER smali file - extract fields from encode() method
function parseAdapterSmali(smaliPath) {
    if (!fs.existsSync(smaliPath)) return null;

    const content = fs.readFileSync(smaliPath, 'utf8');
    const fields = {};

    // Find encode method with ProtoWriter (forward encode)
    const encodeMatch = content.match(/\.method public encode\(Lcom\/squareup\/wire\/ProtoWriter;[^)]*\)V[\s\S]*?\.end method/);
    if (!encodeMatch) return null;

    const encodeBody = encodeMatch[0];
    const lines = encodeBody.split('\n');

    // Strategy: find pattern const/4 -> getter -> encodeWithTag
    // Pattern: const/4 vX, TAG ... getFieldName() ... encodeWithTag(ProtoWriter)
    let currentTag = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Look for const with tag number
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

        // Look for getter method just before encodeWithTag
        const getterMatch = line.match(/invoke-virtual\s+\{[^}]+\},\s*[^;]+;->get(\w+)\(\)/);
        if (getterMatch && currentTag) {
            // Check if encodeWithTag(ProtoWriter) follows within 5 lines
            let hasEncodeWithTag = false;
            for (let j = i + 1; j < Math.min(i + 6, lines.length); j++) {
                if (lines[j].includes('encodeWithTag') && lines[j].includes('ProtoWriter')) {
                    hasEncodeWithTag = true;
                    break;
                }
            }
            if (hasEncodeWithTag) {
                let fieldName = getterMatch[1];
                fieldName = fieldName.replace(/([A-Z])/g, '_$1').toLowerCase();
                if (fieldName.startsWith('_')) fieldName = fieldName.substring(1);
                fields[fieldName] = { tag: currentTag };
                currentTag = null; // Reset after use
            }
        }

        // Reset on method end or other methods
        if (line.includes('.end method') || line.includes('.method ')) {
            currentTag = null;
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

// Compare and print results
function compare(protoName, protoFields, smaliFields) {
    const results = { matches: [], mismatches: [], missingInProto: [], missingInSmali: [] };

    if (!smaliFields || Object.keys(smaliFields).length === 0) {
        results.missingInSmali = Object.entries(protoFields).map(([f, t]) => ({ field: f, tag: t }));
        return results;
    }

    const normalize = name => name.toLowerCase().replace(/_/g, '');

    const smaliNorm = {};
    for (const [name, data] of Object.entries(smaliFields)) {
        const tag = typeof data === 'object' ? data.tag : data;
        smaliNorm[normalize(name)] = { name, tag, type: data.type };
    }

    const protoNorm = {};
    for (const [name, tag] of Object.entries(protoFields)) {
        protoNorm[normalize(name)] = { name, tag };
    }

    for (const [norm, proto] of Object.entries(protoNorm)) {
        const smali = smaliNorm[norm];
        if (smali) {
            if (proto.tag === smali.tag) {
                results.matches.push({ field: proto.name, tag: proto.tag });
            } else {
                results.mismatches.push({
                    field: proto.name, protoTag: proto.tag,
                    smaliTag: smali.tag, smaliName: smali.name
                });
            }
            delete smaliNorm[norm];
        } else {
            results.missingInSmali.push({ field: proto.name, tag: proto.tag });
        }
    }

    for (const [norm, smali] of Object.entries(smaliNorm)) {
        results.missingInProto.push({ field: smali.name, tag: smali.tag, type: smali.type });
    }

    return results;
}

function printResults(name, results, verbose) {
    const hasIssues = results.mismatches.length > 0 || results.missingInProto.length > 0;

    if (!hasIssues && !verbose) return false;

    console.log(`\n${'='.repeat(60)}`);
    console.log(`Message: ${name}`);

    if (results.mismatches.length > 0) {
        console.log('\n[MISMATCH] Tag differences:');
        for (const m of results.mismatches) {
            console.log(`  ${m.field}: proto=${m.protoTag}, APK=${m.smaliTag}`);
        }
    }

    if (results.missingInProto.length > 0) {
        console.log('\n[MISSING IN PROTO] Fields in APK:');
        for (const m of results.missingInProto) {
            console.log(`  ${m.field} = ${m.tag}`);
        }
    }

    if (verbose && results.missingInSmali.length > 0) {
        console.log('\n[MISSING IN APK] Fields in proto:');
        for (const m of results.missingInSmali) {
            console.log(`  ${m.field} = ${m.tag}`);
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
