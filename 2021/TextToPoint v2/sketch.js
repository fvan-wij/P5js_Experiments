let Collisio_Beta;
let fontSize = 250;
let ilovemaritArray
let img;



function preload (){
Collisio_Beta = loadFont('./Collisio_Beta.otf');
}

function setup() {
  createCanvas(900, 900);
  textFont(Collisio_Beta); 
  ilovemaritArray = Collisio_Beta.textToPoints("Haha", 0, 0, fontSize, {
    sampleFactor: 0.1
   });
}


function draw() {
  var x = width/2;
var y = -100;
var r = 50;
var grow = 2;
  background(100);
  translate(width/2-200,height/2+50);
  fill(100);
  var wave = tan(radians(frameCount*0.1));
  var w = map(wave,-1,1,0,1)
  

  for (i = 0; i < ilovemaritArray.length; i++) {


    if (dist(ilovemaritArray[i].x,ilovemaritArray[i].y, x+1000*wave ,y) < 300) {
     // stroke(255);
      stroke(255);
      strokeWeight(2);
      line(ilovemaritArray[i].x, ilovemaritArray[i].y, ilovemaritArray[i].x+grow*5,ilovemaritArray[i].y+grow*5);
      grow=+5;
    
    
      stroke(0);
      
      
    } else {
      stroke(100);
      strokeWeight(2);
      line(ilovemaritArray[i].x, ilovemaritArray[i].y, ilovemaritArray[i].x,ilovemaritArray[i].y);

    }
  

    
  }
  




}

