let cols, rows;
let size = 10;
let randomMod = 31;
let t = 0;
let speed = 0.05;

var mySvg;

function preload() {
  mySvg = loadImage("happyHolidays.svg", "svg");
}

function setup() {
  createCanvas(500, 500);
  cols = width / size;
  rows = height / size;
  randomMod = floor(random(2, randomMod));
}

function draw() {
  background(0);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = size / 2 + i * size;
      let y = size / 2 + j * size;
      let distFormCenter = dist(x, y, width / 2, height / 2);
      let dfcMod = floor(distFormCenter - t) % randomMod;
      if (dfcMod == 0) {
        fill(255);
      } else if (dfcMod == 1) {
        fill(255, 50);
      } else if (dfcMod == 2) {
        fill(255, 0, 0);
      } else if (dfcMod == 3) {
        fill(0, 107, 28);
      } else if (dfcMod == 4) {
        fill(255, 20);
      } else {
        fill(0);
      }
      noStroke();
      let ellipseSize = map(distFormCenter, 0, width / 2, size / 5, size);
      ellipse(x, y, ellipseSize);
    }
  }
  t += speed;
  imageMode(CENTER);

  // Scale the SVG images
  let mySvgWidth = mySvg.width * 1.5; // Adjust the scale factor as needed
  let mySvgHeight = mySvg.height * 1.5;
  image(mySvg, width / 2, height / 2, mySvgWidth, mySvgHeight);
}
