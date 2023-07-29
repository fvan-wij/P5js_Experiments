let cars = [];
let frog;

function setup() {
  createCanvas(900, 900);

  for (let i = 0; i < 10; i++) {
    cars[i] = new Car();
  }

  frog = new Frog();
  
}

function draw() {
  background(55,200,50);
  
  fill(30);
  rect(0,100,width,700);
  let counter = 0;
  
  
  
  for (let i = 0; i < 10; i++){
    
    
  var d = dist(frog.x, frog.y, cars[i].x, cars[i].y)

  if (d < cars[i].r) {
    
    background(255,0,0);
    
    noLoop();

  }

  cars[i].display();


  }
  frog.frog();

  for (let j = 0; j < 10; j++){
    stroke(255);
    strokeWeight(2);
    line(25 + j * 100,height/2,75 + j * 100,height/2);
  }

  noStroke();
  

  let score = counter;
  fill(0);
  text(score, 25, 50);
  textSize(50);

  
}



class Car {

  constructor() {
    this.r = 50;
    this.x = random(width);
    this.y = 100 + (random(600));
    this.speedX = random(10);
    this.color = random(255),random(255),random(255);

  }



  display(){
    fill(this.color)
    ellipse(this.x, this.y, this.r, this.r)
    this.move();
    this.reset();
  }


  move(){
    this.x = this.x + this.speedX;
  }

  reset(){
    if(this.x > width) {
      this.x = 0;
    }
  }


}

class Frog{

  constructor() {
    this.x = width/2;
    this.y = height;
    this.r = 50;
    //this.wave = sin(radians(frameCount));
    this.p = 20;

  }

  frog(){
    fill(0,255,0);
    ellipse(this.x, this.y, this.r, this.r);
    this.move();
    stroke(0,255,0);
    
    line(this.x-this.p,this.y-this.p, this.x,this.y)
    line(this.x+this.p,this.y-this.p, this.x,this.y)
    line(this.x+this.p,this.y+this.p, this.x,this.y)
    line(this.x-this.p,this.y+this.p, this.x,this.y)
    
  }

 pootje(){
  var wave = sin(radians(frameCount*20));

   this.p = this.p + wave;
   this.x = this.x + wave/2;
 }
  

  move(){
    if (keyIsDown(UP_ARROW)) {
      this.y = this.y - 4;
      this.pootje();
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x = this.x - 4;
      this.pootje();
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y = this.y + 4;
      this.pootje();
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x = this.x + 4;
      this.pootje();
    }
  }


}
