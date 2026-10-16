// Precompute semantic-search embeddings for the conversations in data.js.
// One vector per message (all-MiniLM-L6-v2, q8, mean-pooled, normalized), int8-quantized (x127),
// in the same order the page walks them: conversations sorted by prompt_id, messages in order.
// usage: node build_embeddings.mjs <models dir containing Xenova/all-MiniLM-L6-v2> <oss_eval.jsonl> embeddings.bin
import { pipeline, env } from '@huggingface/transformers';
import fs from 'fs';

const [modelsDir, jsonl, outPath] = process.argv.slice(2);
env.allowRemoteModels = false;
env.localModelPath = modelsDir;

const rows = fs.readFileSync(jsonl, 'utf8').split('\n').filter(Boolean).map(JSON.parse)
  .filter(r => r.prompt.length >= 7)
  .sort((a, b) => (a.prompt_id < b.prompt_id ? -1 : 1));
const chunks = rows.flatMap(r => r.prompt.map(m => m.content.slice(0, 1500)));

const ext = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', { dtype: 'q8' });
const out = new Int8Array(chunks.length * 384);
for (let i = 0; i < chunks.length; i += 32) {
  const t = await ext(chunks.slice(i, i + 32), { pooling: 'mean', normalize: true });
  for (let k = 0; k < t.data.length; k++) out[i * 384 + k] = Math.max(-127, Math.min(127, Math.round(t.data[k] * 127)));
}
fs.writeFileSync(outPath, Buffer.from(out.buffer));
console.log(rows.length, 'conversations,', chunks.length, 'messages');
