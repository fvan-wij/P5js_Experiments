let Collisio_Beta;
let fontSize = 250;
let ilovemaritArray;
let img;

function preload (){
Collisio_Beta = loadFont('./Collisio_Beta.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(Collisio_Beta); 
  //translate(windowWidth/2-windowWidth/6,windowHeight/2);
  ilovemaritArray = Collisio_Beta.textToPoints("S H I N E", windowWidth/2-windowWidth/4, windowHeight/2, fontSize, {
    sampleFactor: 0.1
   });
}


function draw() {
noCursor();
var x = mouseX;
var y = mouseY;
var r = 50;
var grow = 2;
  background(20);
  
  fill(100);
  var wave = tan(radians(frameCount*0.5));
  var w = map(wave,-1,1,0,1)
  
  ellipse(mouseX, mouseY, 25);
//translate(windowWidth/2-windowWidth/6,windowHeight/2);
  for (i = 0; i < ilovemaritArray.length; i++) {

    if (dist(ilovemaritArray[i].x,ilovemaritArray[i].y, x ,y) > 50) {
     // stroke(255);
      stroke(255);
      strokeWeight(1);
      line(ilovemaritArray[i].x, ilovemaritArray[i].y, ilovemaritArray[i].x+grow*5,ilovemaritArray[i].y+grow*5);
      grow=+10;
      stroke(0);
      
    } else {
      stroke(100);
      strokeWeight(1);
      line(ilovemaritArray[i].x, ilovemaritArray[i].y, ilovemaritArray[i].x,ilovemaritArray[i].y);

    }
  }
  noFill();
  stroke(255);
  rect(windowWidth/6,windowHeight/6, windowWidth);
  
  rect(windowWidth/2,windowHeight/1.5, 200, 50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}