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
    this.o = createVector(width/2, height/2);
    this.loc = createVector(mouseX, mouseY);

   
  }

  update(){
   
    this.dx = this.loc.mouseX - this.o.x;
    this.dy = this.loc.mouseY - this.o.y;

    this.loc.sub(this.dx);
    
  
    
    
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
