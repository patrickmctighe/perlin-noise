
// var xoffA = 0;
// var xoffB = 1000;

let inc= 0.01;
let start = 0; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  stroke(255)
  noFill()
  beginShape()
  let xoff = start;
  for (var x = 0 ; x < width; x++){
    stroke(255)
    var y = random(height)
    var y = noise(xoff) * height
vertex(x,y)

xoff += 0.01;

 }
 
  endShape()

  start += inc;

// noLoop()


//   let x = map(noise(xoffA), 0, 1, 0, width);
//   let y = map(noise(xoffB), 0, 1, 0, width);

// xoffA += 0.01;

// xoffB += 0.01;

//   ellipse(x,y,24,24)
}
