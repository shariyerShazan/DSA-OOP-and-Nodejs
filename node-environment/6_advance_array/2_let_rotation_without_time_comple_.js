import { prompt } from "../4_js_pattern/1_node_prompt_sync_.js";

let arr = [1, 2, 3, 4, 5];
let rotateCount = Number(prompt("Enter a number! "));
let tempArr = [];
for (let i = 0; i < arr.length; i++) {
  tempArr[i] = arr[(i + rotateCount) % arr.length];
}
console.log(tempArr)[(3, 4, 5, 1, 2)]; // if 2 //! output ->Enter a number! 2
