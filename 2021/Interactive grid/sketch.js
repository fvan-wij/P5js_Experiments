var xoff = 50;

function setup() {
  createCanvas(900, 900);
}

function draw() {
  if (frameCount === 1) {
    capturer.start()
  }
  
  background(30);

  var zave = sin(radians(frameCount));  
let n = noise(xoff) * width;
var rows = 10;
var columns = rows*zave;




  for (x = 0; x < rows; x++){
    for(y = 0; y < columns; y++) {

      var w = sin(radians(frameCount*1.5));
      var wave = map(w,-1,1,0,4);
      

      var j = int(wave) * 1;
      
      fill(255*n);
      //noStroke();
      strokeWeight(1.5);
      
      if (j === 0) {
      //QUARTER CIRCLE 1
      arc(x*90,y*90,20,180,0, HALF_PI*wave);  
      } else if (j === 1 ) {
      //QUARTER CIRCLE 2
      if(random(2) < 0.5)
      
      rect(x*90*wave,y*90,20,20*wave)
      stroke(255*n,n,0);
      arc(x*90+90,y*90,80,180,HALF_PI*wave, PI);
      } else if (j === 2) {
      //QUARTER CIRCLE 3
      stroke(0,255,n);
      arc(x*90+90,y*90+90,180,80,PI, TWO_PI - HALF_PI*-wave);
      } else if (j  === 3) {
        if(random(2) < 0.5)
      
      rect(x*90*-wave,y*90,20,20*wave)
      //QUARTER CIRCLE 4
      stroke(0,n,255);
      arc(x*90,y*90+90,20,180, 0-HALF_PI*-wave, 0);
      }

      fill(30);
      noFill();
      stroke(30);
      strokeWeight(350);
      rect()
      ellipse(width/2,height/2,1200,1200)
      

      
      
      
      


    }
  }
  //ANALOG
  var lx = random(900);
  var ly = random(900);
  strokeWeight(random(1));
  stroke(255);
  line(lx,ly,lx+random(10),ly+random(10));

  if (frameCount < 180) {
    capturer.capture(canvas);
  } else if (frameCount === 180) {
    capturer.save();
    capturer.stop();
  }

}
