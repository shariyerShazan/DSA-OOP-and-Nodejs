import { prompt } from "../4_js_pattern/1_node_prompt_sync_.js";

let str = prompt("Enter a string: ").trim()
let freq = {};

for (let ch of str) {
  if (freq[ch]) {
    freq[ch]++;
  } else {
    freq[ch] = 1;
  }
}

console.log(freq);
