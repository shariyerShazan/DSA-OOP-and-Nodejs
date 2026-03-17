import { prompt } from "./1_node_prompt_sync_.js";
let num = Number(prompt("Enter a Number! "));

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num - i; j++) {
    process.stdout.write("- ");
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    process.stdout.write("* ");
  }

  console.log();
}
for (let i = num - 1; i >= 1; i--) {
  for (let j = 1; j <= num - i; j++) {
    process.stdout.write("- ");
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    process.stdout.write("* ");
  }
  console.log();

  //! - - - - - *
  //! - - - - * * *
  //! - - - * * * * *
  //! - - * * * * * * *
  //! - * * * * * * * * *
  //! * * * * * * * * * * *
  //! - * * * * * * * * *
  //! - - * * * * * * *
  //! - - - * * * * *
  //! - - - - * * *
  //! - - - - - *
}
