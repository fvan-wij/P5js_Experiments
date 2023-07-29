let chars = ["┃", "━", "┏┓", "┗┛", "┣┫", "┳┻╋", "K", "#", "@"];
let shides = [" ", "/", "|"];

let shades = ["░", "░", "▒", "▓"]; 
let cIndex = 0;

let gridSize = 80;
let tileSize = 900/gridSize;

let img;

let c;
let b;


function preload(){
  
  img = loadImage("img/2.jpg");


}

function setup() {
  createCanvas(900, 900);
  //frameRate(10);


}

function draw() {
  
  img.resize(width,height);
  //image(img, 0, 0);
  background(255);

  let wave = sin(radians(frameCount));

  for (let x = 0; x < gridSize; x++){
    for (let y = 0; y < gridSize; y++){

      c = img.get(x * tileSize, y * tileSize);
      b = brightness(c);
      

    
      cIndex = cIndex + 1;

      if (b < 50 * wave){
        fill(0, 0, 255);
        textSize(tileSize * b * 0.1);
      text(shades[cIndex], x * tileSize, y * tileSize);
      }

      // if (b < 50){
      //   fill(0);
      //   textSize(tileSize);
      // text(chars[cIndex], x * tileSize, y * tileSize);
      // }

      if (b > 50){
        fill(0);
        textSize(tileSize);
      text(shides[cIndex], x * tileSize, y * tileSize);
      }

      

      if (cIndex > 5){
        cIndex = 0;
      } 

     
    }
  }

  //blendMode(SUBTRACT);
}
