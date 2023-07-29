let xoff = 0.0;

function setup() {
  createCanvas(400, 400);
  background(50);
}

function draw() {
 


  xoff = xoff + 0.01;
  let n = noise(xoff) * width;

  fill(0);
  stroke(255);

  for (let i = 0; i < 10; i++){
    textSize(i*n/4);
  text('a', i, 300);
    
  }
  textSize(32);
 
 
}
