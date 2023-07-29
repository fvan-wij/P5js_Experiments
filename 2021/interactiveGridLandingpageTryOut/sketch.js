
let state = []; 
let bsd = 1; // BAR STROKES DISTANCE (BAR CODE AESTHETIC)
let bl; // AMOUNT OF BAR LINES
let tiless = 10;

function setup() {
  
  // HTML ELEMENTS
createCanvas(windowWidth, windowHeight);

  // CREATING 2D ARRAY 
  
  for (var i = 0; i < tiless; i++){
    state[i] = [];
    for (var j = 0; j < tiless; j++){
      state[i][j] = 0;
    }
  } 

}



function draw() {

  //frameRate(5);

  // Background

  background(0);

  // TILE PROPERTIES
  var wave = sin(radians(frameCount*5));
  var tilesX = 1;
  var tilesY = 1;
  var tileW = width / tilesX;
  var tileH = height / tilesY;
  strokeWeight(4);
  
  stroke(255);

  // NESTED FOR LOOPS FOR DRAWING GRID AND TILES

for (var x = mouseX; x < tileW; x+=30) {
  for (var i = 0; i < tilesX; i++){
    for (var y = 0; y < tilesY; y++){
      
      
      
                        // Tiles
                    push();

                    translate(i*tileW-10,y*tileH-10); 
                   
                        // Vertical lines
                            if (state[i][y] === 1) {
                    line(tilesX+x,tilesY+0,tilesX+x,tilesY+tileH);
                          }
                    
                        // Horizontal lines
                        else if (state[i][y] === 2) {
                      line(tilesX,tilesY+x,tilesX+tileH,tilesY+x);
                          }

                        // Arc linkboven
                        if (state[i][y] === 3) { 
                      line(tileW+tilesX+-tileW,tilesY+x,tileW+tilesX+-x,tilesY);
                          }    
                            
                        // Arc Rechtsboven
                        else if (state[i][y] === 4) {
                      line(tilesX+tileW,tilesY+x,tilesX+x,tilesY);
                          }

                        // Arc rechtsonder
                        else if (state[i][y] === 5) {
                      line(tileW+tilesX+0,tilesY+x,tileW+tilesX+-x,tilesY+tileH);
                          }

                        // Arc Linksonder
                        else if (state[i][y] === 6) {
                      line(tilesX,tilesY+x,tilesX+x,tilesY+tileH);
                          }
                        
                        // Diagonal linksboven
                        else if (state[i][y] === 7) {  
                      line(tilesX,tilesY+x,tilesX+x,tilesY);
                          }

                        // Diagonal rechtsboven
                        else if (state[i][y] === 8) {  
                      line(tilesX+x,tilesY+x,tilesX+tileW,tilesY+x);
                          }

                        // Diagonal rechtssonder
                        else if (state[i][y] === 9) {      
                      line(tilesX+x,tilesY+tileH,tilesX+tileH,tilesY+x);
                          }

                        // Diagonal linkssonder
                        else if (state[i][y] === 10) {       
                      line(tilesX,tilesY+x,tilesX+x,tilesY+x);
                          }
                    pop();
                    
   }
  }
 }

   // CHECK WHICH TILE MOUSE IS

   mx = int(map(mouseX, 0, width, 0, tilesX));
   my = int(map(mouseY, 0, height,0, tilesY));

 for (let i = 0; i < 20; i++){
   
   randomTile(int(random(10)),int(random(10)));
 }

  push();
  fill(0);
  noStroke();
  textSize(500);
  text('welcome', 0, 500);
  
  pop();

}

// FUNCTIONS

function randomTile(i, j){
  state[i][j]++;

  if (state[i][j] > 10){
    state[i][j] = 0;
  }
}

// function countUp(i, j){

//   if(state[i][j] < 10) {
//     state[i][j]++;
//   } else {
//     state[i][j] = 0;
//   }

// }

// function countDown(i, j){
  
//     state[i][j]--;
//    if (state[i][j] === -1) {
//     state[i][j] = 10;
//   }

// }

// function countReset(i,j){
//   state[i][j] = 0;
// }



// TILE CONTROLS 

// function mousePressed(){
//   if(mouseButton === LEFT) {
//     countUp(mx,my);
//   }
  

//   if(mouseButton === RIGHT) {
//     countDown(mx,my);
//   }
  
//    if(mouseButton === CENTER) {
//     countReset(mx,my);
//    }
  
// }



// REMOVE CONTEXT MENU ON RIGHT CLICK

// document.oncontextmenu = function() {
//   return false;
// }

