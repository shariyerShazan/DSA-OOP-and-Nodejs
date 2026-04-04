import { prompt } from "../4_js_pattern/1_node_prompt_sync_.js";

let arr = new Array(5);

for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt(" Enter a Number! "));
}
console.log(arr); // [ 5, 10, 15, 20, 25 ]
