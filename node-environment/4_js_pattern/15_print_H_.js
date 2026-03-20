import { prompt } from "./1_node_prompt_sync_.js";

const num = Number(prompt("Enter a Number! "));
const mid = Math.floor(num / 2) + 1;

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    if (i === mid || j === 1 || j === num) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();

  // *           *
  // *           *
  // *           *
  // * * * * * * *
  // *           *
  // *           *
  // *           *
}
