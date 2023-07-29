let Collisio_Beta;
let fontSize = 100;
let ilovemaritArray
let img;

function preload (){
Collisio_Beta = loadFont('./Collisio_Beta.otf');
img = loadImage("./cheff.png");
}

function setup() {
  createCanvas(900, 900);
  textFont(Collisio_Beta);
   ilovemaritArray = Collisio_Beta.textToPoints("DIZZY", 0, 0, fontSize, {
    sampleFactor: 0.3
   });
  //  noCursor();
   img = loadImage("./cheff.png");
}


function draw() {
  w = sin(radians(frameCount*0.1));
  wave = map(w,-1,1,-1,1);
  background(100);
 // image(img,mouseX,mouseY);
  //img.resize(250,150);
  
  //fill(255);
  strokeWeight(3);
  stroke(0);
  textSize(wave*fontSize);
  noStroke();
  noFill();
  //text("I LOVE MARIT", 50,height/2);
  translate(width/2,height/2);


  
  // translate(-400,-200);

for (i = 0; i < ilovemaritArray.length; i++) {

  //translate(ilovemaritArray[i].x, ilovemaritArray[i].y);
  fill(255);
  
  rotate(wave*0.1);
  ellipse(ilovemaritArray[i].x, ilovemaritArray[i].y, 1,1);
  stroke(255);
  strokeWeight(0.2);
  
  line(ilovemaritArray[i].x, ilovemaritArray[i].y, ilovemaritArray[i].x+200*wave,ilovemaritArray[i].y+100*wave);
  //line(-10,-10,10,10);
}


}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}
