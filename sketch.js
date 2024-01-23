// var xoffA = 0;
// var xoffB = 1000;

let inc = 0.01;

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
}

function draw() {
  let yoff = 0;

  loadPixels();
  // background(51);
  // stroke(255)
  // noFill()

  for (var x = 0; x < width; x++) {
    let xoff = 0;
    for (var y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      let r = noise(xoff, yoff) * 255;
      pixels[index] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;

      xoff += inc;
    }
    yoff += inc;
  }

  updatePixels();
  noLoop();
}
