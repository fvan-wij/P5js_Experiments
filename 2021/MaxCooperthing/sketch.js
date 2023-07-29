let xspeed = 1;
let numOfFigures = 30;
let figures = [];
let size = 30;



function setup() {
  createCanvas(900, 900);
  
for (let j = 0; j < numOfFigures; j++){
  for (let i = 0; i < numOfFigures; i++){
    figures.push(new Figure(i * size, j * size));
    
    
    }
  }


  
  
}

function draw() {
  background(250);

    for (let j = 0; j < figures.length; j++){
      
    figures[j].display();
    figures[j].update();
      

    }
  
  
  
  
 
  

 
  

}

class Figure{
  
  constructor(x, y){
    this.chance = random(1);
    this.x = x;
    this.y = y;
    this.xspeed = 3;
    
    this.c1 = color(255, 204, 0);
    this.c2 = color(65);
    this.colors = [this.c1, this.c2];
    this.switch = 0;

    this.size = size + random(-5, 5);

    this.offset = random(-100, 100);
  }

  


  update(){
    this.x += this.xspeed;

    if (this.x > width){
      this.x = 0;
      this.chance = random(1);
      this.switch++;
      
      this.colorize();
      
    }
  }

  colorize(){

      if (this.switch > 1){
      this.switch = 0;
    }

  }

  display(){

    ellipseMode(CORNER);
    strokeWeight(random(2));
    fill(this.colors[this.switch]);



    if (this.chance < 0.5){
      ellipse(this.x, this.y, this.size);
    }
    if (this.chance < 0.75){
      arc(this.x, this.y, this.size, this.size, radians(-90), radians(90));
    }
    if (this.chance > 0.75){
      arc(this.x, this.y, this.size, this.size, radians(-90), radians(0));
      arc(this.x, this.y + this.size/2, this.size, this.size, radians(-90), radians(0));
    }

    
    
    
    
  }

  

  

}