import chalk from "chalk";

function heart(x, y) {
  return Math.pow(x * x + y * y - 1, 3) - x * x * y * y * y;
}

const width = 40;
const height = 40;

let points = [];

// pre-calculate points
for (let y = height; y > -height; y--) {
  for (let x = -width; x < width; x++) {
    let xx = x / 20;
    let yy = y / 20;

    if (heart(xx, yy) <= 0) {
      points.push({ x, y });
    }
  }
}

let index = 0;

function draw() {
  console.clear();

  let grid = {};

  for (let i = 0; i < index; i++) {
    let key = `${points[i].x},${points[i].y}`;
    grid[key] = true;
  }

  for (let y = height; y > -height; y--) {
    let line = "";

    for (let x = -width; x < width; x++) {
      let key = `${x},${y}`;

      if (grid[key]) {
        line += chalk.magenta("❤");
      } else {
        line += " ";
      }
    }

    console.log(line);
  }

  if (index < points.length) {
    index += 20;
    setTimeout(draw, 30);
  }
}

draw();
