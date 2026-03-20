import { prompt } from "./1_node_prompt_sync_.js";

const num = Number(prompt("Enter a Number! "));

for (let i = 0; i <= num; i++) {
  for (let j = 0; j <= num; j++) {
    if (j == i) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();

  // *
  //   *
  //     *
  //       *
  //         *
  //           *
}
