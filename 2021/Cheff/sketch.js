let img;
let s;
var x = 0;
var y = 0;

function preload(){
  img = loadImage('./cheff.png');
  
}

function setup() {
  createCanvas(400, 400);
  s = loadSound('./spaghet.mp3');
  //loadImage('./cheff.png');
}


function draw() {

  if (mouseIsPressed) {
    background(255,0,0);
    image(img,x,y);
    //s.play();
    x = x - 5;
   
  } else {
    background(220);
    x = 0;
  }

  // if (x < -400) {
  //   x = 0;
  // }
  }






function mousePressed() {
  
  if (s.isPlaying()) {
    s.stop();
    background(255,0,0);
  } else {
    s.play();

  }

}

