let mover;

function setup() {
  createCanvas(900, 900);
  background(0);
  mover = new Mover()
  
  
}

function draw() {
  
background(0, 0.1);

  mover.update();
  mover.display();
  mover.checkEdges();


}

class Mover{
  constructor(){
    this.loc = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
    
    
    this.xoff = 0.0;
    
    
    //this.vel.mult(random(3));
    
  }

  update(){
    this.xoff = this.xoff + 0.01;
    this.n = noise(this.xoff)
    this.acc = p5.Vector.random2D(this.n);
    this.acc.mult(3);
    
    
      
      this.loc.add(this.acc);

      //this.vel.limit(10);
    

  
    
    
  }

  display(){
    stroke(0);
    fill(175);
    ellipse(this.loc.x, this.loc.y, 20);
  }


  

  checkEdges(){
    if(this.loc.x > width)
    {
      this.loc.x = 0;
    } else if (this.loc.x < 0)
    {
      this.loc.x = width;
    }

    if(this.loc.y > height)
    {
      this.loc.y = 0;
    } else if (this.loc.y < 0)
    {
      this.loc.y = height;
    }

  }
  
  

}
