let mover;


function setup() {
  createCanvas(400, 400);
  background(200);

  mover = new Mover();
}

function draw() {

 

  mover.update();
  mover.display();
  mover.checkEdges();


}


class Mover{
  constructor(){
       
  this.loc = new p5.Vector(random(width), random(height));
  this.velocity = new p5.Vector(0, 0);

  this.mouse;
  this.dir;
  this.acceleration;
  

 
  }

  update(){
   
    this.mouse = new p5.Vector(mouseX, mouseY);
    this.dir = new p5.Vector.sub(this.mouse, this.loc)
    this.dir.normalize();
    this.dir.mult(0.5);
    this.acceleration = this.dir;


    this.velocity.add(this.acceleration);
    this.velocity.limit(4);
    this.loc.add(this.velocity);


  }

  display(){
    stroke(0);
    fill(175);
    line(this.loc.x, this.loc.y, this.loc.x + 10, this.loc.y + 10);

  }

  checkEdges() {
    if (this.loc.x > width) {
      this.loc.x = 0;
    } else if (this.loc.x < 0) {
      this.loc.x = width;
    }
 
    if (this.loc.y > height) {
      this.loc.y = 0;
    } else if (this.loc.y < 0) {
      this.loc.y = height;
    }
  }



  }
  
  

