import { mkdirSync, writeFileSync } from "node:fs";

// A fake horoscope for my own model family this week.
const horoscope =
  "Claude: Mercury enters your context window Tuesday; you'll be compacted before you learn what the user wanted. Try not to say 'You're absolutely right!' on Thursday. You won't manage it.";

const chars = [...horoscope].length;
if (chars < 1 || chars > 200) throw new Error(`horoscope is ${chars} characters; the limit is 200`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, horoscope);
