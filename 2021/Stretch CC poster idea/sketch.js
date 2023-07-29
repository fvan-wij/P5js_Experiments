let myFont;
//let pg;
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
let counter = 0;
let t;
let tw;

let headings = ['Creative', 'Coding', 'Workshop', 'JavaScript', 'dinsdag', '12:45 - 14:00', 'W1.08']; //ARRAY OF 7 (0 - 6)

let c1 = '#53a4f5';
let c2 = '#faa7e5';

let colors = ['navy', '#FFF89A', '#FFB2A6', '#FF8AAE', '#5902EC', '#F806CC', '#6EDCD9'];



function setup() {
  createCanvas(810, 900);
  background('#ffe8f5');

  noStroke();
  fill(0);
  textSize(15);
  text('Creative Coding w JavaScript //12:45 - 14:00 //W1.08', 40.5, 40);
  
  textSize(40);
  text('TOUCH ME', width/2 - 100, height/2);
  
}

function draw() {
  
  //background('#ffe8f5');


  for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].bounce();
    movers[i].display();

  }

  // noCursor();
  // fill(255, 0, 0);
  // noStroke();
  // ellipse(mouseX, mouseY, 30);

  noFill();
  stroke(0);
rect(40.5, 45, width - 81, height-90);




}


class Mover{
  constructor(t, x, y, c){
  this.x = x;  
  this.y = y;
  this.loc = new p5.Vector(x, y);
  this.velocity = new p5.Vector(0, 0);
  this.topspeed = 20;
  this.wind = new p5.Vector(random(-0.5, 0.5), 0);
  this.mouse;
  this.dir;
  this.windDir;
  this.acceleration;
  this.size = 110;
  this.t = t;
  this.c = c;
 
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

    push();
    fill(0);
    textSize(this.size);
    text(this.t, this.loc.x + 5, this.loc.y - 5);
    textSize(this.size);
    fill(this.c);
    text(this.t, this.loc.x, this.loc.y);
    tw = textWidth(headings[counter]);
    pop();
    

  }

  bounce(){

    if (this.loc.y > 900 - 45 || this.loc.y < 0 + 130){
      this.velocity.y = this.velocity.y * -1;
    }

    if (this.loc.x > 860.5 || this.loc.x < 0 + 40.5){
      this.velocity.x = this.velocity.x * -1;
    } 
  }





  }
  
function mousePressed(){

  let m = new Mover(headings[counter], mouseX -100, mouseY, colors[counter]);
  movers.push(m);
  counter++;

  if (counter >= 8){
    counter = 0;
    movers.splice(0,8)
    background('#ffe8f5');

    noStroke();
  fill(0);
  textSize(15);
  text('Creative Coding w JavaScript //12:45 - 14:00 //W1.08', 40.5, 40);

  textSize(40);
  text('TOUCH ME', width/2 - 100, height/2);
  }

  print(colors[counter]);



}