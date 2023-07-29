//Turnes myCircles into an empty array
let myCircles = [];
let img;


function setup() {
  createCanvas(900, 900, P2D);
  img = loadImage("/img/pic.jpg");


  //Creates array of 10 myCircles

}



function draw() {
  background(0,0,255);

  let wave = sin(radians(frameCount/4));
  let m = map(wave, -1, 1, 0, 500);


  translate(width/2, height/2);
  for (let i = 0; i < m; i++) {
    
    myCircles[i] = new Circle(0, 0, 450 * sin(i * 0.09));

  }

  for (let i = 0; i < m; i++) {
    
    rotate(radians(i));
    
    myCircles[i].displayC();

  }

}

class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  displayC() {
    background(0, 5);
    //noFill();
    fill(0)
    stroke(255);

    strokeWeight(1);
    rectMode(CENTER);
    rect(this.x,this.y,this.r);
    //ellipse(this.x, this.y, this.r)
    //image(img,this.x, this.y,this.r);


  }


}