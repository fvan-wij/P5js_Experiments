let P;

function preload(){
  img = loadImage('/2.jpg');
  //img2 = loadImage('/good2.png');
  

}


function setup() {
  
  createCanvas(900, 900);
  img.resize(900, 900);
  background(25);
  P = random(900);
}

function draw() {
  
 // noStroke();
  
 
 let wave = sin(radians(frameCount));

  let tiles = 80;
  let tileSize = width/tiles;
  translate(0, 0);
  for (let x = 0; x < tiles; x++){
   for (let y = 0; y < tiles; y++){
      let X = random(900);
      let Y = random(900);
      

      let c = img.get(X, Y);
      let b = map(brightness(c), 0, 255, 0, 3);
      fill(c);
      strokeWeight(random(2));
      stroke(c);
      
      push();
      scale(1);
      //translate(x * tileSize, y * tileSize);
      //rect(X, Y, tileSize* b, tileSize*b);
      // img2.resize(10, 10);
      // image(img2, x * tileSize, y * tileSize);

      //img.resize(10, 10);
      line(X * c, Y * c, X * b, Y * b);
      pop();
   }
 }

}
