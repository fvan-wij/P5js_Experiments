let collage = [];
let collageNum = 13;

let state = 0;

function preload(){

for (let i = 0; i < collageNum; i++){
  collage[i] = loadImage("img/" + i + ".jpg");
  //collage[i].resize(mouseX, mouseY);
}

}

function setup() {
  createCanvas(900, 900);
  background(220);
  //frameRate(2);

  
  
}

function draw() {
 

  let tiles = 8;
  let tileSize = width/tiles;
  
  for (let x = 0; x < tiles; x++){
    for (let y = 0; y < tiles; y ++){
      state = state + 1;


      imageMode(CENTER);
      collage[state].resize(width, height);

    copy(collage[state], random(width), random(height), 450, 450, tiles * x, tiles * y, tileSize * tiles, tileSize * tiles);

   
    if (state > 11) {
      state = 0;
    }
    
  }
}
  
}

