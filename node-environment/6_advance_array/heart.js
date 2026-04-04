const width = 40;
const height = 40;

for (let y = height; y > -height; y--) {
  let line = "";

  for (let x = -width; x < width; x++) {
    let xx = x / 20;
    let yy = y / 20;

    // heart equation
    let formula = Math.pow(xx * xx + yy * yy - 1, 3) - xx * xx * yy * yy * yy;

    if (formula <= 0) {
      line += "❤️";
    } else {
      line += "  ";
    }
  }

  console.log(line);
}
