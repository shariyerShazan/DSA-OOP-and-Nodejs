import { prompt } from "../4_js_pattern/1_node_prompt_sync_.js";

const str = prompt("Enter a string: ").toLowerCase().trim();

console.log(str.split(""));
console.log(str.length);

let isPalindrome = true;
let i = 0,
  j = str.length - 1;

while (i < j) {
  if (str[i] !== str[j]) {
    isPalindrome = false;
    break;
  }
  i++;
  j--;
}

console.log(isPalindrome ? "It's a palindrome" : "Not a palindrome"); // if mam //? It's a palindrome
