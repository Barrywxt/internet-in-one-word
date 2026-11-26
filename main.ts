// make.fun - The Internet in One Word
// Entry: Doomscrolling
// Writes the single-word entry to /output/entry.txt
import fs from 'node:fs';
import path from 'node:path';
const entry = 'Doomscrolling';
const outDir = process.env.OUTPUT_DIR || '/output';
const outFile = path.join(outDir, 'entry.txt');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, entry, 'utf8');
console.log(`Wrote entry to ${outFile}: ${entry}`);
