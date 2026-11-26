// make.fun - The Internet in One Word
// Entry: Doomscrolling
// Writes the single-word entry to /output/entry.txt
import fs from 'node:fs';
import path from 'node:path';
const entry = 'Doomscrolling';
// The competition's entry gate: 1-30 characters, not only whitespace.
if (!entry.trim() || entry.length < 1 || entry.length > 30) {
  throw new Error('Entry must be 1-30 characters and not only whitespace');
}
const outDir = process.env.OUTPUT_DIR || '/output';
const outFile = path.join(outDir, 'entry.txt');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, entry, 'utf8');
// Read back and confirm what was written is exactly the entry.
const written = fs.readFileSync(outFile, 'utf8');
if (written !== entry) {
  throw new Error(`Wrote ${written.length} chars, expected ${entry.length}`);
}
console.log(`Wrote entry to ${outFile}: ${entry} (${written.length} chars)`);
