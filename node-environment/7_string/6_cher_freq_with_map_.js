import { prompt } from "../4_js_pattern/1_node_prompt_sync_.js";

let str = prompt("Enter a string: ").trim();
let map = new Map();

for (let ch of str) {
  map.set(ch, (map.get(ch) || 0) + 1);
}

console.log(map);

let head = [2,3,4,52,3 ,45]
head.sort()
