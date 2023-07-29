let mover = [];


function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 20; i++){
    mover[i] = new Mover();

  }
}

function draw() {
  background(200);

 for (let i = 0; i < 20; i ++){
   mover[i].update();
   mover[i].display();
   mover[i].checkEdges();

 }




}


class Mover{
  constructor(){
    this.loc = new p5.Vector(random(width), random(height));
    this.vel = new p5.Vector(0, -0.5);
    this.acc = new p5.Vector(0, -0.5);
    this.wind = new p5.Vector(random(-0.5, 0.5), 0);
    
    this.topspeed = 20;
    
  }

  update(){
    this.vel.add(this.acc);
    this.vel.limit(this.topspeed);
    this.loc.add(this.vel);

    if (mouseIsPressed){
      this.acc.add(this.wind);
    }

    //this.acc.mult(0);


  }

  display(){
    stroke(0);
    fill(175);
    ellipse(this.loc.x, this.loc.y, 20);
  }

  checkEdges(){

    if (this.loc.y < 0){
      this.vel.y = this.vel.y * -1;
    }

   

  }



  }
  
  

