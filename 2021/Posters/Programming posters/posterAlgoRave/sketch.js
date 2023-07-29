let tiles = [];
let roboto;



function setup() {
  createCanvas(900, 900, WEBGL);
  

  roboto = loadFont('../RobotoMono-Regular.ttf');

}

function draw() {
  background(0);

  for (let i = 0; i < 2; i++) {

    tiles[i] = new Tile(20,20,20,20);

  }
translate(-450,-400);

  for (let i = 0; tiles.length; i++) {
fill(0);
    tiles[i].displayTile();
    

    noStroke();
    fill(0);
    rect(450, 0, 900, 450);
   fill(255);
  text('ALGO RAVE', 50, 160);
  textFont(roboto);
  textSize(150);
  let wave = sin(radians)
  
    
  }


  rotateX (frameCount);




  
  
  
}


class Tile {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.amount = 8;

  }

  displayTile() {
    rectMode(CENTER);
    //noFill();
    strokeWeight(1);
    stroke(255);
    for (let i = 0; i < this.amount; i++) {
      for (let j = 0; j < this.amount; j++) {

        //stroke(j * 30)
        rect(25 + random(50, 100) + i * 100, random(50, 100) + j * 100, 50, 50);
      }


    }
  }

}