let bg = '#7734eb'
let fg = '#09001a'

function setup() {
  createCanvas(580, 860);
}

function draw() {
  background(bg);
  let triangles = 20;
  let tSize = height / triangles;
  let wave = sin(radians(frameCount) * 0.5);
  let mW = map(wave, -1, 1, -0.1, 1);
  
  noFill();
  noStroke();
  fill(255);
  ellipse(width/2, height/2, 300);

  fill(fg);
  ellipse(width/2, height/2, 150);

  push();
  for (let y = 0; y < triangles * mW; y++){
    noStroke();
    fill(fg);
    
    if (dist(0, y, width/2, height/2) < 100) {

      fill(0, 255, 0);

    }

    triangle(0 ,tSize + y * tSize - tSize / 2, width, y * tSize - tSize, 0, y * tSize);
  }
  pop();

  fill(255);
  text('POSTER', 80, 100);
  textSize(100);
}
