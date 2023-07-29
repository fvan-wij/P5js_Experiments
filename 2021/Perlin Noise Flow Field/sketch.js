var inc = 0.1;
var scl = 5;
var cols, rows;
var zoff = 1000;
var fr;

var particles = [];

var flowfield;

function setup() {
  createCanvas(1280, 720);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 5000; i++) {
    particles[i] = new Particle();
  }
  background(186, 11, 46);
}

function draw() {
  
  
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      
      var angle = noise(xoff, yoff, zoff) * TWO_PI *4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
     
xoff += inc;
stroke(0,50);
// push();
// translate(x * scl, y *scl);
// rotate(v.heading());
// line(0, 0, scl, 0);
// pop();


    }

yoff += inc;

zoff += 0.0004;
  }

  for(var i = 0; i < particles.length; i++) {

    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
    
    

  }



  fr.html(floor(frameRate()));

  

}

function mousePressed() {

  
    save('smoke.jpg');
  
}