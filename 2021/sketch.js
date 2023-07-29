
var xspeed = 16;
var yspeed = 8;
var ballx = 500;
var bally = 500;
var gravity = 1.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
 
}

function draw() {
   smooth();
  background(50);
  fill(255);
  var count = 0;
  var wave = sin(radians(frameCount));
  var mappedWavex = map(wave,-1,1,0,0.5);
  var mappedWave1 = map(wave,-1,1,0,width);

  for (var x = 0; x < width; x+=25) {
    for (var y = 0; y < height; y+=25) {
      //stroke(count,count*2,count*0.5);
      strokeWeight(0.01);
      line(x, 0, ballx, bally);
      line(x,height,ballx,bally);
      
     
      
      strokeWeight(1);
      //point(x,y);
      
      //point(x,ballx);
      //point(height,bally);
      
      

    }
  }
  strokeWeight(1);
  
  ellipse(ballx,bally, 90,90);
  ballx+=xspeed;
  bally+=yspeed;

  if (bally > height) {
    yspeed = -yspeed;
    stroke(random(255),random(255),random(255));
  } 
  if (bally < 0) {
    yspeed = -yspeed;
    stroke(random(255),random(255),random(255));
  }
  if (ballx > width) {
    xspeed = -xspeed;
    stroke(random(255),random(255),random(255));
  }
  if (ballx < 0) {
    xspeed = -xspeed;
    stroke(random(255),random(255),random(255));
  }
 
  
}
