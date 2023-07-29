let myFont;
let pg;
let mV = 0;
let mH = 0;

let inc = 1;
let x = 0;
let y = 0;
let xspeed = 3;
let yspeed = 6;

let movers = [];
let img;

let timer = 3;

let c1 = '#53a4f5';
let c2 = '#faa7e5';

function preload(){
  myFont = loadFont('font/Jumper.ttf');

  img = loadImage('img/skylinepink.png');

}

function setup() {
  createCanvas(900, 900);
  pg = createGraphics(215, 100);
  //pg.background(250, 167, 229);
  background('#ffe8f5');

  for(let i = 0; i < 10; i++){
    movers.push(new Mover(100* i));
  }

  img.resize(width, height);
  image(img,0,0);
  
}

function draw() {
  
  //background(0);

  pg.fill(0);
  
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }

  

  pg.textFont(myFont);
  pg.textSize(50);
  pg.text('FLAT', 0, 75);
  pg.textSize(45);
  pg.fill(255);
  pg.text('FLAT', 0, 75);

 
  //image(pg, 0, 0);

 

  

  let sx = 0;
  let sy = 0;
  let sw = 480;
  let sh = 100;

  let dx = x;
  let dy = y;
  let dw = sw;
  let dh = sh;

  tint(255, 5);
  //copy(pg, sx, sy, sw, sh, dx, dy, dw, dh)
  
  x = x + xspeed;
  y = y + yspeed;
  
  if (x > 900 - 200 || x < 0){
    xspeed = -xspeed;
  }

  if (y > 900 - 60 || y < 0){
    yspeed = -yspeed;
  }

  for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].bounce();
    movers[i].display();
    

    // if (timer == 0) {
    
    //   movers.splice(0, 1);
    //   pg.fill(255, 0);
      
    // }

  //   let d = dist(movers[0].loc.x, movers[0].loc.y, movers[1].loc.x, movers[1].loc.y);
    
  // if (d < 50){
    
  //   movers[i].velocity.y = movers[i].velocity.y * -1;


  // }

  
  

  }

  

  

//blendMode(DIFFERENCE);

}


class Mover{
  constructor(x){
  this.x = x;  
  this.loc = new p5.Vector(x, random(height));
  this.velocity = new p5.Vector(0, 0);
  this.topspeed = 20;
  this.wind = new p5.Vector(random(-0.5, 0.5), 0);
  this.mouse;
  this.dir;
  this.windDir;
  this.acceleration;
  
 
  }

  update(){
    
    this.dir = new p5.Vector(0, 0.1);

    this.acceleration = this.dir;

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.loc.add(this.velocity);
    

    this.mouse = new p5.Vector(mouseX, mouseY);
    this.windDir = p5.Vector.sub(this.mouse, this.loc);

    if (mouseIsPressed){
      this.windDir.mult(0.002);
      this.velocity.add(this.windDir);
      


    }


  }

  display(){
    stroke(0);
    fill(175);
    //ellipse(this.loc.x, this.loc.y, 20);
    copy(pg, 0, 0, 480, 100, this.loc.x, this.loc.y, 480, 100)

  }

  bounce(){

    if (this.loc.y > 900 - 60){
      this.velocity.y = this.velocity.y * -1;
    }

    if (this.loc.x > 900 - 100 || this.loc.x < 0){
      this.velocity.x = this.velocity.x * -1;
    }

 
  }



  }
  
