let squares = [];
let tiles = [];


function setup() {
  createCanvas(900, 900);

  
  for (let i = 0; i < 10; i++){
    squares[i] = new Square(80, random(300), i, random(1));

  }

  for (let i = 0; i < 1; i++){
    tiles[i] = new Tile(20 * i, 30);

  }

}

function draw() {
// if (frameCount === 1) {
//   capturer.start();
// }

  background(0,0,255);


  for (let i = 0; i < tiles.length; i++){
    tiles[i].displayTiles();

  }
  // push();
  // noFill();
  // strokeWeight(2);
  // stroke(255);
  // rect(10,10,880);
  // pop();

push();
  for (let i = 0; i < squares.length; i++){
    //squares[i].displaySQ();
    //squares[i].displayL();
  }
pop();



// if (frameCount < 180) {
//   capturer.capture(canvas)
// } else if (frameCount === 180) {
//   capturer.save();
//   capturer.stop();
// }

}

class Tile{
  constructor(offset, size){
    this.offset = offset;
    this.size = size;
  }

  displayTiles(){
    let tiles = 2;
    let size = (width / tiles) / this.size;
    let wave = sin(radians(frameCount*2))
    let m = map(wave,-1,1,100,100);
    for (let o1 = size; o1 <= width - size; o1 += size) {
      for (let o2 = size; o2 <= height - size; o2 += size) {

        push();
        rectMode(CENTER);
        noStroke();
        fill(255, 38, 237);
        translate(o1, o2);
        rotate(radians(o2 * m*0.01));
        textSize(15);
        text("A", size+o1*wave*0.1-5, size+o2*wave*0.1-5)
        //rect(0, 0, size+tan(o1)*wave*0.1-5, size+cos(o2)*wave*0.1-5);
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
    //blendMode(DIFFERENCE);
    strokeWeight(15);
    translate(this.x, this.y);
    rectMode(CENTER);
    rotate(this.offset * 10);
    rect(0, 0, this.s);  
    
    stroke(255,20,20);
    rect(0 + 10, 0 + 10, this.s);  

    //BLUE STROKE BY CHANCE
    if (this.chance < 0.1) {
      stroke(20,20,255);
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
    stroke(255);
    line(0, 0, 75, 75)

    
    pop();
  }

}

 
