let mover;


function setup() {
  createCanvas(400, 400);

  mover = new Mover();
}

function draw() {
  background(200);

 

  mover.update();
  mover.display();
  


}


class Mover{
  constructor(){
       
  this.loc = new p5.Vector(random(width), random(height));
  this.velocity = new p5.Vector(0, 0);
  this.topspeed = 4;
  
  this.mouse;
  this.dir;
  this.acceleration;
  
 
  }

  update(){
    this.mouse = new p5.Vector(mouseX, mouseY);
    this.dir = p5.Vector.sub(this.mouse, this.loc);

    this.acceleration = this.dir;

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.loc.add(this.velocity);

  }

  display(){
    stroke(0);
    fill(175);
    ellipse(this.loc.x, this.loc.y, 20);
  }



  }
  
  

