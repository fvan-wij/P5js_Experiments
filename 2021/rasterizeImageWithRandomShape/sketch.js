let shape;
let img;
let c;
let b;

function preload() {
  img = loadImage('../shit.jpg');
}

function setup() {
  createCanvas(900, 900);

  

}

function draw() {

  background('#948881');

  //ZEBRA IMAGE
  img.resize(width, height);
  //image(img, 0, 0);
  
  let tiles = 100;
  let tileSize = width / tiles;


  //NESTED FOR LOOP GRID 10 X 10
  for(let x = 0; x < tiles; x++) {
    for(let y = 0; y < tiles; y++) {
    

    c = img.get(x * tileSize, y * tileSize);
    b = map(brightness(c), 0, 255, 0, 1);

    if (b < 0.298) {
      fill(c);
      //noStroke();
      strokeWeight(0.05);
      shape = new randomShape(x * tileSize, y * tileSize, tileSize*5);
      shape.displayShape();

    }

    }
  }

  noLoop();

}

//RANDOM SHAPE OBJECT
class randomShape {
  constructor(x, y, size){
    this.x = x;
    this.y = y;
    this.size = size;

  }

  displayShape(){
    let chance = random(1.25);
    if(chance < 0.25){
      rectMode(CENTER);
      rect(this.x, this.y, this.size/1.4);
    } else if (chance < 0.5) {
      //ellipse(this.x, this.y, this.size);
      triangle(this.x, this.y + this.size, this.x + this.size, this.y + this.size, this.x + this.size/2, this.y - this.size*-0.2);
    } else if (chance < 0.75) {
      arc(this.x, this.y, this.size, this.size, 0, HALF_PI);
    } else if (chance < 1) {
      arc(this.x, this.y, this.size, this.size, HALF_PI, PI + HALF_PI);
    } else if (chance < 1.25) {
      arc(this.x, this.y, this.size, this.size, PI+HALF_PI, TWO_PI);
    }

  }


}
