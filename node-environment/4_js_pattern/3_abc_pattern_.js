import { prompt } from "./1_node_prompt_sync_.js";

let num = Number(prompt("Enter a number! "));

for (let i = 1; i <= num; i++) {
  let ascii = 65;
  for (let j = 1; j <= i; j++) {
    process.stdout.write(`${"A"} `);
    ascii++;
  }
  console.log();
  //! A
  //! A A
  //! A A A
  //! A A A A
  //! A A A A A
}
console.log();

for (let i = 1; i <= num; i++) {
  let ascii = 65;
  for (let j = 1; j <= i; j++) {
    process.stdout.write(`${String.fromCharCode(ascii)} `);
    ascii++;
  }
  console.log();
  //! A
  //! A B
  //! A B C
  //! A B C D
  //! A B C D E
}
console.log();

let ascii = 65;
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(`${String.fromCharCode(ascii)} `);
    ascii++;
  }
  console.log();

  //! A
  //! B C
  //! D E F
  //! G H I J
  //! K L M N O
}
