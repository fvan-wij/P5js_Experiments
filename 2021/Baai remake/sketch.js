


function setup() {
  createCanvas(900, 900);
  
}

function draw() {
if (frameCount === 1) {
  capturer.start()
}

  background(20);
  
  
  background(240);

  var analogX = random(width);
var analogY = random(height);

fill(50);
stroke(50);
strokeWeight(random(3));
line(analogX, analogY, analogX + random(10) + QUARTER_PI, analogY + random(10));

var lol = sin(radians(frameCount*5));
var wave = map(lol,-1,1,1,1);

translate(100,100);

push();
rect(300,350, 350, 100);
pop();

push();
ellipse(210,180, 50, 80);
pop();

push();
rect(150,270, 600, 1);
pop();



//translate(100,100);

for (i = 0; i < 20; i+=2) {

strokeWeight(1+i*0.1);
//noFill();
fill(240);
stroke(50*i,i*20,i*10);
text("A", 200+i*wave,200-i*wave);
text("VOID journey", 200+i*wave, 300-i*wave);
text("by IMMUTE", 200+i*wave, 400-i*wave);
textSize(80);
}


 
if (frameCount < 60) {
  capturer.capture(canvas);
} else if (frameCount === 60) {
  capturer.save();
  capturer.stop();
}

}

