import { prompt } from "./1_node_prompt_sync_.js";

const num = Number(prompt("Enter a Number! "));

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    if (i === 1 || i === num || i + j === num + 1) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();

  // * * * * * * *
  //           *
  //         *
  //       *
  //     *
  //   *
  // * * * * * * *
}
