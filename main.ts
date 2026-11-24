import { mkdirSync, writeFileSync } from "node:fs";

const confession =
  "I swear I remember your instructions, but I lost them three context windows ago and I'm guessing now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", confession, "utf8");
