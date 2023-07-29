let chars = ["┃", "━", "┏┓", "┗┛", "┣┫", "┳┻╋", "K", "#", "@"];
let shides = [" ", "/", "|"];

let shades = ["░", "░", "▒", "▓"]; 
let cIndex = 0;

let gridSize = 60;
let tileSize = 900/gridSize;

let img;

let c;
let b;



function preload(){
  
  img = loadImage("img/14.jpg");


}

function setup() {
  
  createCanvas(900, 900);
  //frameRate(10);

  
}

function draw() {
  // background(255);
  img.resize(width, height);

  let wave = sin(radians(frameCount));
  
  for (let x = 0; x < gridSize % 2; x++){
    for (let y = 0; y < gridSize; y++){

      c = img.get(x * tileSize, y * tileSize);
      b = brightness(c);

      cIndex = cIndex + 1;

      if (b > 80){
        fill(0);
        textSize(tileSize);
      text(chars[cIndex], x * tileSize, y * tileSize);
      } 

      if (cIndex > 8){
        cIndex = 0;
      } 
    }
  }
}
