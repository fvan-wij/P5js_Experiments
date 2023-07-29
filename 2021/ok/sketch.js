let tileArray = [];
var blendArray = ['ADD', 'DARKEST', 'LIGHTEST', 'DIFFERENCE', 'EXCLUSION', 'MULTIPLY','SCREEN','REPLACE','REMOVE','OVERLAY','HARD_LIGHT','SOFT_LIGHT', 'DODGE','BURN','SUBTRACT'];
var b = 'ADD';

function setup() {
  
  createCanvas(900, 900);
 
    // this.x = width/2;
    // this.x2 = (width/2) /2;
    // this.y = height/2;
    // this.diameter = 400;
    // this.decider = 0;
frameRate(10);
}

function draw() {
  // if (frameCount === 1) {
  //   capturer.start()
  // }
  background(20,55,160);
  //noFill();
  //noStroke();
  
   // blendMode(EXCLUSION);
   noFill();
  
  
translate(0,-20);
  tiles = 15;
  var tileSize = width / tiles;
  for (let i = 0; i < tiles; i++) {
    for (let j = 0; j < tiles; j++) {
    
      // tileArray[i] = new Tile(width/tiles*i+tileSize/2,height/tiles,tileSize,random(1), i);
tileArray.push(new Tile(width/tiles*i+tileSize/2,height/tiles*j+tileSize,random(tileSize),random(1)));      
    
    }
  }

  var r = random(1);

  for (let i = 0; i < tileArray.length; i++) {
    if (r >= 0.1) {
      
      tileArray[i].displayLayer();
      tileArray[i].displayLayer1();
      tileArray[i].displayLayer2();
    }

    
  }
  

noLoop();
  
// if (frameCount < 10) {
//   capturer.capture(canvas);
// } else if (frameCount === 10) {
//   capturer.save();
//   capturer.stop();
// }

  
}

class Tile{
  constructor(x,y,diameter,decider){
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.decider = decider;
   // this.rotation = rotation;

    // this.x = width/2;
    // this.x2 = (width/2) /2;
    // this.y = height/2;
    // this.diameter = 400;
    // this.decider = 0;
  }

  displayLayer() {
    stroke(255,0,0);
    ellipse(this.x,this.y,this.diameter,this.diameter);
  }

  displayLayer1() {
    
    stroke(0,255,0);
    if (this.decider > 0.75 && this.decider < 1) {
      
      rect(this.x-this.x/2, this.y, this.diameter / 2, this.diameter / 2);
    } else if (this.decider > 0.5 && this.decider < 0.75) {
      rect(this.x, this.y/2, this.diameter / 2, this.diameter / 2);
    } else if (this.decider > 0.25 && this.decider < 0.5) {
      rect(this.x+this.x/2, this.y, this.diameter / 2, this.diameter / 2);
    } else if (this.decider < 0.25) {
      rect(this.x, this.y+this.y/2, this.diameter / 2, this.diameter / 2);
    }
  }

  displayLayer2() {
    stroke(0,0,255);
    if (this.decider >= 0.75) {
      ellipse(this.x-this.x+(this.x/4), this.y, this.diameter / 4, this.diameter / 4);
    } else if (this.decider >= 0.5 && this.decider <= 0.75) {
      ellipse(this.x, this.y/2-(this.y/2)/2, this.diameter / 4, this.diameter / 4);
    } else if (this.decider >=0.25 && this.decider <= 0.5) {
      ellipse(this.x+this.x/2+(this.x/2)/2, this.y, this.diameter / 4, this.diameter / 4);
    } else if (this.decider <= 0.25) {
      ellipse(this.x, this.y+this.y/2+(this.y/2)/2, this.diameter / 4, this.diameter / 4);
    }
  }
  
  
}


