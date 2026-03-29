import { prompt } from "../4_js_pattern/1_node_prompt_sync_.js";

let arr = [1, 2, 3, 4, 5];
let rotateCount = Number(prompt("Enter a number! "));
let tempArr = new Array(arr.length);

for(let i = arr.length-1 ; i>=0; i--){
    tempArr[(i+rotateCount) % arr.length] = arr[i]
}
console.log(tempArr)// if 2 then -> //! [ 4, 5, 1, 2, 3 ]