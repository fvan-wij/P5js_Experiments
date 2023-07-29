let squares = [];
let tiles = [];


function setup() {
  createCanvas(900, 900);

  
  for (let i = 0; i < 12; i++){
    squares[i] = new Square(random(80), random(300), i, random(1));

  }

  for (let i = 0; i < 1; i++){
    tiles[i] = new Tile(20 * i, 10);

  }

}

function draw() {
  background(255);


  for (let i = 0; i < tiles.length; i++){
    tiles[i].displayTiles();

  }
  push();
  noFill();
  strokeWeight(2);
  stroke(0);
  rect(10,10,880);
  pop();

// push();
//   for (let i = 0; i < squares.length; i++){
//     squares[i].displaySQ();
//     squares[i].displayL();
//   }
// pop();





}

class Tile{
  constructor(offset, size){
    this.offset = offset;
    this.size = size;
  }

  displayTiles(){
    let tiles = 9;
    let size = (width / tiles) / this.size;
    let wave = sin(radians(frameCount))
    for (let o1 = size; o1 <= width - size; o1 += size) {
      for (let o2 = size; o2 <= height - size; o2 += size) {

        push();
        rectMode(CENTER);
        noStroke();
        fill(0);
        translate(o1, o2);
        rotate(radians(o1 * o2 * wave*0.01));
        rect(0, 0, size, size);
        pop();
      }
    }
                }

}



class Square{
  constructor(s,angle, offset, chance){
    this.x = random(900);
    this.y = random(900);
    this.s = s;
    this.angle = angle;
    this.offset = offset;
    this.chance = chance;
    this.xl = random(900);
    this.yl = random(900);
  }

  displaySQ(){
    push();
    noFill();
    stroke(0);
    blendMode(DIFFERENCE);
    strokeWeight(15);
    translate(this.x, this.y);
    rectMode(CENTER);
    rotate(this.offset * 10);
    rect(0, 0, this.s);  
    
    stroke(255, 230, 0);
    rect(0 + 10, 0 + 10, this.s);  

    //BLUE STROKE BY CHANCE
    if (this.chance < 0.1) {
      stroke(0, 217, 255);
    rect(0 + 10, 0 + 10, this.s);  
    }

   

    pop();
  }

  displayL(){
    push();
    strokeWeight(15);
    translate(this.xl, this.yl);
    rotate(this.offset * 10);
    stroke(0);
    line(0, 0+10, 75, 75+10)
    stroke(255, 0, 140);
    line(0, 0, 75, 75)

    
    pop();
  }

}

 
