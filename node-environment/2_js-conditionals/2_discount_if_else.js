const discout = (amount) => {
  let payOut;
  let discout;
  if (typeof amount === "number") {
    if (amount < 0) {
      console.log("Invalid amount!");
    } else {
      if (amount < 500) {
        discout = 5;
      } else if (amount < 1000) {
        discout = 10;
      } else if (amount < 5000) {
        discout = 20;
      } else {
        discout = 30;
      }
      payOut = Math.trunc(amount - amount * (discout / 100));
      console.log(
        `Product price is ${amount}. and you get discount ${discout}%. and you need to pay ${payOut}`,
      );
    }
  } else {
    console.log("Invalid input!");
  }
};
discout("shazan"); //! Invalid input!
discout(-500); // Invalid amount!
discout(300)// Product price is 300. and you get discount 5%. and you need to pay 285
discout(500) // Product price is 500. and you get discount 10%. and you need to pay 450
discout(1111) // Product price is 1111. and you get discount 20%. and you need to pay 888
discout(5555); // Product price is 5555. and you get discount 30%. and you need to pay 3888