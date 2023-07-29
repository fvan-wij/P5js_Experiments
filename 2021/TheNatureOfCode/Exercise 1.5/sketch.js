let w;


function setup() {
  createCanvas(400, 400);
  w = new Walker();
  background(220);
}

function draw() {
 

  w.display();
//  w.walk();

}

class Walker{
  constructor(){
    this.x = width/2;
    this.y = height/2;
   
  }

  display(){
    stroke(0);
    strokeWeight(10);
    let stepX = randomGaussian(0, 5);
    let stepY = randomGaussian(0, 5);
    point(this.x + stepX, this.y + stepY);
  }



  

}
