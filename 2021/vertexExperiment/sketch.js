let worm;
let worms = [];
 
function setup() {
  createCanvas(900, 900);

  for (let i = 0; i < 10; i++) {
    worms[i] = new Worm(random(0, 900),random(900), random(2, 35));
    }
  
}

function draw() {
  background(0);
  noFill();
  stroke(255);

  let wave = sin(radians(frameCount));

  for (let i = 0; i < worms.length; i++) {
    
    worms[i].displayW();
    worms[i].move();
    worms[i].update();
    }
  

  worm = new Worm();
  


}

class Worm {
  constructor(x,y,s){
    this.x = x;
    this.y = y;
    this.s = s;
    this.xspeed = random(0.5,8);
    this.size = random(0.94, 1.02)
    this.v = random(0.2);
    
  }
  move(){
    this.y = this.y + this.xspeed;
  }

  update(){
    if (this.y > 900) {
      this.y = -1200;
    }
  }
 
  
  displayW(){

    fill(0);
    stroke(255);
    // this.y += random(-this.speed, this.speed);
    push();
    translate(this.x,this.y);
    for (let j = 0; j < this.s; j++){
  
      
      beginShape();
      scale(this.size);
      for (let i = 0; i < TWO_PI +QUARTER_PI; i += 0.1){
        
        let offset = map(sin(i+frameCount * 0.08), -1, 1, -25, 25);
        let r = 100 *sin(j*this.v) + offset;
        let y = r * cos(i) + j * 30;
        let x = r * sin(i);
        
        vertex(x, y);

    
      }
    
      endShape();
    }
    pop();
  }
  
  
}