var xoff = 0;

function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(100,20,255);


  var wave = sin(radians(frameCount*0.4));
  var zave = sin(radians(frameCount*1.3));
  var wave2 = map(wave,-1,1,0,20);
  var wave3 = map(zave,-1,1,0,20);
  //AMOUNT OF LINES
  //var lines = map(constrain(mouseX,0,900),0,width,0,50);
  var lines = 20;
  //DISTANCE BETWEEN THE LINES CALCULATED BY DIVIDNIG THE WIDTH OF THE CANVAS
  //BY THE AMOUNT OF LINES
  var linesW = width / lines;
  var linesH = height / lines;

  //linesW divided by 2 = half of linesD
  var d = linesW / 2;

  var n = map(noise(xoff), 0, 1, 0, 50);
  xoff += 0.05;
 


 strokeWeight(2);
 


translate(0,20)
  for (x = 0; x < lines; x++) {
    for (y = 0; y < lines; y++) {
      
      

      if (x % 1 == 0) {
        stroke(200);
        strokeWeight(3);
        
        line(linesW*x+d, linesH*y+-n, linesW*x,linesH*y-d);
    
      } 

      if (x % 1 == 0) {
        strokeWeight(3);
        stroke(0);
        line(linesW*x+d,linesH*y+-n,linesW*x+linesW,linesH*y+d);
      } 

      if (y % 20 == Math.floor(wave2)) {
        stroke(255,0,0);
        line(linesW*x+d,linesH*y+-n,linesW*x+linesW,linesH*y+d);
      } 

      if (x % 20 == Math.floor(wave3)) {
        stroke(255,0,0);
        
        line(linesW*x+d,linesH*y+-n,linesW*x+linesW,linesH*y+d);
      } 

      // stroke(255,0,0);
      // strokeWeight(0.5);
      // line(linesW*x+d+d,linesH*y+n,linesW*x+linesW+d+-n,linesH*y+d);
      

      //   if (x > 2) {
      //   strokeWeight(2);
      //   stroke(255);
      // } 

      rotate(0);
        // LINE SHAPE = / 
  

        //LINE SHAPE = \ 
 

        
    }
  }  
 


  
}
