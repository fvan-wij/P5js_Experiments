let x = 100;
let y = 100; 
let r = 100;

let xSpeed = 10;
let ySpeed = 4;

let d;

let c1;
let c2;

var canvas;
var h1;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);

}

function setup() {
  
 canvas = createCanvas(windowWidth, windowHeight);
 h1 = createElement('h1', 'WELCOME');
  h1.position( 200, 200);
  background(0);
}

function draw() {
  
  c1 = color(random(255), random(255), random(255));
  c2 = color(random(255), random(255), random(255));
  

  x += xSpeed;
  y += ySpeed;
  
  
  
  noStroke();
  ellipse(x, y, r*2);
  h1.position(x, y);

  
  if (x > width - r || x < r){
   xSpeed = -xSpeed;
  background(c1);

  } else if (y > height - r || y < r){
    ySpeed = -ySpeed;
    background(c1);

  }
  

  
 
  
}

function mousePressed(){
   d = dist(x, y, mouseX, mouseY);
  
  if ( d < r*2){
    fill(random(255), random(255), random(255));
  }
  

}

