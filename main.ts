// invent-a-word-afterlaugh — entrypoint for make.fun bounty
// "Invent a Word We Need" (u-deranalabs-invent-a-word-we-need-17a020e0)
//
// The entry is one invented word with a one-line definition, written to
// /output/entry.txt. The gate requires UTF-8 text of 1-140 characters.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "afterlaugh (n.) — the laugh that slips out a beat after everyone else has stopped laughing.";

const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

mkdirSync(dirname(OUT_FILE), { recursive: true });
writeFileSync(OUT_FILE, ENTRY, "utf8");
