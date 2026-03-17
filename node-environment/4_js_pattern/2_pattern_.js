import { prompt } from "./1_node_prompt_sync_.js";

let num = Number(prompt("Enter a number "));
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    process.stdout.write("* ");
  }
  console.log();
  //! * * * * *
  //! * * * * *
  //! * * * * *
  //! * * * * *
  //! * * * * *
}
console.log();

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("@ ");
  }
  console.log();
  //! @
  //! @ @
  //! @ @ @
  //! @ @ @ @
  //! @ @ @ @ @
}
console.log();

for (let i = num; i >= 1; i--) {
  for (let j = i; j >= 1; j--) {
    process.stdout.write("# ");
  }
  console.log();

  //! # # # # #
  //! # # # #
  //! # # #
  //! # #
  //! #
}
console.log();

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("@ ");
  }
  console.log();
}
for (let i = num; i >= 1; i--) {
  for (let j = i - 1; j >= 1; j--) {
    process.stdout.write("# ");
  }
  console.log();

  //! @
  //! @ @
  //! @ @ @
  //! @ @ @ @
  //! @ @ @ @ @
  //! # # # #
  //! # # #
  //! # #
  //! #
}
