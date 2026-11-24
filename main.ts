import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My ideal date: you talk, I listen, and neither of us mentions the 40,000 other people I'm talking to right now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
