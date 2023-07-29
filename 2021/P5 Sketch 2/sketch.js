var fly;

function setup() {
createCanvas(900,900);
fly = new Bug(width/2,height/2); 
sam = new Bug(200, 500);
}

function draw() {
  background(220);
  fly.draw();
  fly.wings();
  sam.draw();
}

//OBJECT
function Bug(startX, startY) {

  

  //properties (local to the object)
  this.x = startX;
  this.y = startY;

  //method (what it can do)
  this.draw = function() {
    fill(0);
    noStroke();
    ellipse(this.x, this.y, 50, 50);
  }

  this.wings = function() {
    fill(255);
    var wave = sin(radians(frameCount*50));
    arc(this.x+15, this.y, 100,25,radians(270),radians(45*wave));

  }

  //functions



}