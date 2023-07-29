function preload(){
  img = loadImage('/good2.png');
  

}


function setup() {
  
  createCanvas(900, 900);
  img.resize(900, 900);


}

function draw() {
  background(0);
  noStroke();
  fill(255);
  
  let tiles = 50;
  let tileSize = width/tiles;
  
  for (let x = 0; x < tiles; x++){
    for (let y = 0; y < tiles; y++){

      let c = img.get(int(x * tileSize), int(y * tileSize));
      let b = map(brightness(c), 0, 255, 0, 1);
      
      push();
      translate(x * tileSize, y * tileSize);
      rect(0, 0, tileSize* b * 20, tileSize*b);
      pop();
    }
  }

}
