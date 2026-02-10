#!/usr/bin/env node
/**
 * Proto vs APK Smali Field Comparison Script
 * Compares proto field definitions with Mercedes APK smali files
 *
 * Usage: node compare-proto-apk.js [message-name]
 * Example: node compare-proto-apk.js ChargeProgramParameters
 */

const fs = require('fs');
const path = require('path');

const PROTO_DIR = path.join(__dirname, 'protos');
const APK_SMALI_DIR = path.join(__dirname, '..', '.docu', 'mercedesapk.out', 'unknown',
    'com.daimler.ris.mercedesme.ece.android', 'smali_classes16', 'com', 'daimler', 'mbmobilesdk', 'generated');

// Parse proto file and extract message fields
function parseProtoFile(protoPath) {
    const content = fs.readFileSync(protoPath, 'utf8');
    const messages = {};

    // Remove comments
    const noComments = content.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

    // Find all top-level message blocks
    let pos = 0;
    while (pos < noComments.length) {
        // Find next 'message' keyword at start of line or after whitespace
        const msgMatch = noComments.slice(pos).match(/(?:^|\n)\s*message\s+(\w+)\s*\{/);
        if (!msgMatch) break;

        const messageName = msgMatch[1];
        const msgStart = pos + msgMatch.index + msgMatch[0].length;

        // Find matching closing brace
        let braceCount = 1;
        let idx = msgStart;
        while (braceCount > 0 && idx < noComments.length) {
            if (noComments[idx] === '{') braceCount++;
            if (noComments[idx] === '}') braceCount--;
            idx++;
        }

        const messageBody = noComments.substring(msgStart, idx - 1);
        const fields = extractFields(messageBody);

        messages[messageName] = fields;
        pos = idx;
    }

    return messages;
}

// Extract fields from a message body (handles nested blocks properly)
function extractFields(messageBody) {
    const fields = {};
    let i = 0;

    while (i < messageBody.length) {
        // Skip whitespace
        while (i < messageBody.length && /\s/.test(messageBody[i])) i++;
        if (i >= messageBody.length) break;

        // Get the current line/statement
        let lineEnd = messageBody.indexOf('\n', i);
        if (lineEnd === -1) lineEnd = messageBody.length;
        let line = messageBody.substring(i, lineEnd).trim();

        // Skip empty lines
        if (!line) {
            i = lineEnd + 1;
            continue;
        }

        // Check for nested message/enum - skip entire block
        if (/^(message|enum)\s+\w+\s*\{/.test(line)) {
            i = skipBlock(messageBody, i);
            continue;
        }

        // Check for oneof block - parse fields inside it
        if (/^oneof\s+\w+\s*\{/.test(line)) {
            const oneofStart = messageBody.indexOf('{', i) + 1;
            const oneofEnd = findMatchingBrace(messageBody, oneofStart - 1);
            const oneofBody = messageBody.substring(oneofStart, oneofEnd);

            // Parse fields inside oneof
            const oneofFields = parseOneofFields(oneofBody);
            Object.assign(fields, oneofFields);

            i = oneofEnd + 1;
            continue;
        }

        // Check for reserved/option statements
        if (/^(reserved|option)\s/.test(line)) {
            i = lineEnd + 1;
            continue;
        }

        // Try to match a field definition: [repeated] type name = number
        // Also handles map<key, value> fields
        const fieldMatch = line.match(/^(?:repeated\s+)?(?:map<[^>]+>|[\w.]+)\s+(\w+)\s*=\s*(\d+)/);
        if (fieldMatch) {
            fields[fieldMatch[1]] = parseInt(fieldMatch[2]);
        }

        i = lineEnd + 1;
    }

    return fields;
}

// Parse fields inside a oneof block
function parseOneofFields(oneofBody) {
    const fields = {};
    const lines = oneofBody.split('\n');

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed === '}') continue;

        // Match field definition: Type name = number
        const fieldMatch = trimmed.match(/^(?:[\w.]+)\s+(\w+)\s*=\s*(\d+)/);
        if (fieldMatch) {
            fields[fieldMatch[1]] = parseInt(fieldMatch[2]);
        }
    }

    return fields;
}

// Find the position after the closing brace of a block
function skipBlock(content, startPos) {
    const braceStart = content.indexOf('{', startPos);
    if (braceStart === -1) return content.length;
    return findMatchingBrace(content, braceStart) + 1;
}

// Find the position of the matching closing brace
function findMatchingBrace(content, openBracePos) {
    let braceCount = 1;
    let idx = openBracePos + 1;
    while (braceCount > 0 && idx < content.length) {
        if (content[idx] === '{') braceCount++;
        if (content[idx] === '}') braceCount--;
        idx++;
    }
    return idx - 1;
}

// Parse smali file for WireField annotations
function parseSmaliFile(smaliPath) {
    if (!fs.existsSync(smaliPath)) {
        return null;
    }

    const content = fs.readFileSync(smaliPath, 'utf8');
    const fields = {};

    // Find all .field declarations with their annotations using regex
    // Match: .field private/public [final] fieldName:Type ... .end field
    const fieldRegex = /\.field\s+(?:private|public)\s+(?:final\s+)?(\w+):[^\n]+\n([\s\S]*?)\.end field/g;
    let match;

    while ((match = fieldRegex.exec(content)) !== null) {
        const fieldName = match[1];
        const annotation = match[2];

        // Look for WireField annotation with tag
        const tagMatch = annotation.match(/tag\s*=\s*(0x[0-9a-fA-F]+|\d+)/);
        if (tagMatch) {
            let tag = tagMatch[1];
            if (tag.startsWith('0x')) {
                tag = parseInt(tag, 16);
            } else {
                tag = parseInt(tag);
            }
            fields[fieldName] = tag;
        }
    }

    return fields;
}

// Convert names between formats
function normalizeFieldName(name) {
    // snake_case to lowercase without underscores for comparison
    return name.toLowerCase().replace(/_/g, '');
}

// Compare proto message with smali
function compareMessage(messageName, protoFields, smaliFields) {
    const results = {
        matches: [],
        mismatches: [],
        missingInSmali: [],
        missingInProto: []
    };

    if (!smaliFields || Object.keys(smaliFields).length === 0) {
        results.missingInSmali = Object.entries(protoFields).map(([f, t]) => ({ field: f, tag: t }));
        return results;
    }

    // Create normalized lookup
    const smaliNormalized = {};
    for (const [name, tag] of Object.entries(smaliFields)) {
        smaliNormalized[normalizeFieldName(name)] = { originalName: name, tag };
    }

    const protoNormalized = {};
    for (const [name, tag] of Object.entries(protoFields)) {
        protoNormalized[normalizeFieldName(name)] = { originalName: name, tag };
    }

    // Compare
    for (const [normName, proto] of Object.entries(protoNormalized)) {
        const smali = smaliNormalized[normName];
        if (smali) {
            if (proto.tag === smali.tag) {
                results.matches.push({ field: proto.originalName, tag: proto.tag });
            } else {
                results.mismatches.push({
                    field: proto.originalName,
                    protoTag: proto.tag,
                    smaliTag: smali.tag,
                    smaliName: smali.originalName
                });
            }
            delete smaliNormalized[normName];
        } else {
            results.missingInSmali.push({ field: proto.originalName, tag: proto.tag });
        }
    }

    // Remaining in smali
    for (const [normName, smali] of Object.entries(smaliNormalized)) {
        results.missingInProto.push({ field: smali.originalName, tag: smali.tag });
    }

    return results;
}

// Print comparison results
function printResults(messageName, results, verbose) {
    const hasIssues = results.mismatches.length > 0 || results.missingInProto.length > 0;

    if (!hasIssues && !verbose) {
        return false;
    }

    console.log(`\n${'='.repeat(60)}`);
    console.log(`Message: ${messageName}`);
    console.log('='.repeat(60));

    if (results.mismatches.length > 0) {
        console.log('\n[MISMATCH] Field tag differences:');
        for (const m of results.mismatches) {
            console.log(`  ${m.field}: proto=${m.protoTag}, APK=${m.smaliTag} (${m.smaliName})`);
        }
    }

    if (results.missingInProto.length > 0) {
        console.log('\n[MISSING IN PROTO] Fields in APK but not in proto:');
        for (const m of results.missingInProto) {
            console.log(`  ${m.field} = ${m.tag}`);
        }
    }

    if (verbose && results.missingInSmali.length > 0) {
        console.log('\n[MISSING IN APK] Fields in proto but not found in APK:');
        for (const m of results.missingInSmali) {
            console.log(`  ${m.field} = ${m.tag}`);
        }
    }

    console.log(`\n[OK] ${results.matches.length} fields match`);

    return hasIssues;
}

// List available smali files
function listSmaliMessages() {
    if (!fs.existsSync(APK_SMALI_DIR)) return [];

    return fs.readdirSync(APK_SMALI_DIR)
        .filter(f => f.endsWith('.smali') && !f.includes('$'))
        .map(f => f.replace('.smali', ''));
}

// Main
function main() {
    const args = process.argv.slice(2);
    const verbose = args.includes('-v') || args.includes('--verbose');
    const filterMessage = args.find(a => !a.startsWith('-'));

    console.log('Proto vs APK Smali Comparison');
    console.log('Proto dir:', PROTO_DIR);
    console.log('APK smali dir:', APK_SMALI_DIR);

    if (!fs.existsSync(APK_SMALI_DIR)) {
        console.error('ERROR: APK smali directory not found:', APK_SMALI_DIR);
        process.exit(1);
    }

    // Parse proto files
    const protoFiles = ['vehicle-events.proto', 'vehicle-commands.proto'];
    let allMessages = {};

    for (const protoFile of protoFiles) {
        const protoPath = path.join(PROTO_DIR, protoFile);
        if (fs.existsSync(protoPath)) {
            const messages = parseProtoFile(protoPath);
            allMessages = { ...allMessages, ...messages };
            console.log(`Parsed ${protoFile}: ${Object.keys(messages).length} messages`);
        }
    }

    // Get smali messages
    const smaliMessages = listSmaliMessages();
    console.log(`Found ${smaliMessages.length} smali message files`);

    // Filter messages to check
    let messagesToCheck = filterMessage
        ? Object.keys(allMessages).filter(m => m.toLowerCase().includes(filterMessage.toLowerCase()))
        : Object.keys(allMessages);

    // Only check messages that have smali files
    const messagesWithSmali = messagesToCheck.filter(m => smaliMessages.includes(m));
    const messagesWithoutSmali = messagesToCheck.filter(m => !smaliMessages.includes(m));

    let issuesFound = 0;
    let checkedCount = 0;

    for (const messageName of messagesWithSmali) {
        const protoFields = allMessages[messageName];
        const smaliPath = path.join(APK_SMALI_DIR, `${messageName}.smali`);
        const smaliFields = parseSmaliFile(smaliPath);

        if (smaliFields && Object.keys(smaliFields).length > 0) {
            checkedCount++;
            const results = compareMessage(messageName, protoFields, smaliFields);
            if (printResults(messageName, results, verbose || !!filterMessage)) {
                issuesFound++;
            }
        }
    }

    console.log(`\n${'='.repeat(60)}`);
    console.log(`Proto messages: ${Object.keys(allMessages).length}`);
    console.log(`With smali file: ${messagesWithSmali.length}`);
    console.log(`Checked (has fields): ${checkedCount}`);
    console.log(`Issues: ${issuesFound} messages with mismatches`);

    if (messagesWithoutSmali.length > 0 && verbose) {
        console.log(`\nMessages without smali file (${messagesWithoutSmali.length}):`);
        for (const m of messagesWithoutSmali.slice(0, 10)) {
            console.log(`  ${m}`);
        }
        if (messagesWithoutSmali.length > 10) {
            console.log(`  ... and ${messagesWithoutSmali.length - 10} more`);
        }
    }

    if (!filterMessage) {
        console.log('\nUsage:');
        console.log('  node compare-proto-apk.js                    # Check all');
        console.log('  node compare-proto-apk.js ChargeProgramPara  # Filter by name');
        console.log('  node compare-proto-apk.js -v                 # Verbose output');
    }
}

main();
