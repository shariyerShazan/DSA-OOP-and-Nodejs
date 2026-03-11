//? conditions takes true / false # noting else



const canVote = (age)=> {
  if (typeof age === "number") {
    if (age < 0) {
      console.log("Invalid age!");
    } else if (age < 18) {
      console.log("You can't vote");
    } else {
      console.log("You can vote");
    }
  } else {
    console.log("Invalid input!");
  }
}
canVote("shazan") //! Invalid input!
canVote(-12) // Invalid age!
canVote(17) // You can't vote
canVote(21) //? You can vote
console.log(isNaN("shazan")) // true
console.log(isNaN(12)) // false