let h;
let bar;
let state = [];
let mp = 0;
let bs;
let bsd;
let tiles;

function setup() {
  createCanvas(900, 900);
  background(50);
  strokeWeight(random(1.5));
  stroke(255);
  h = 90;
  bar = 90;
  bs = random(10);
  //bsd= random(2);
  tiles = 10;

  for (var i = 0; i < 10; i++){
    state[i] = [];
    for (var j = 0; j < 10; j++){
      state[i][j] = 0;
    }
  }

}

function draw() {

  // Background

  background(150,150,255);

  // Tile properties 
  var tilesX = 10;
  var tilesY = tilesX;
  var tileW = width / tilesX;
  var tileH = height / tilesY;
  
   

  // Grid of nested for loops

for (var x = 0; x < bar; x+=bs - bsd) {
  bsd = random(2);
  for (var i = 0; i < tilesX; i++){
    for (var y = 0; y < tilesY; y++){
        
                        // Tiles
                    push();

                    translate(i*h-10,y*h-10); 

                        // Vertical lines
                            if (state[i][y] === 1) {
                    line(tilesX+x,tilesY+0,tilesX+x,tilesY+h);
                          }
                    
                        // Horizontal lines
                        else if (state[i][y] === 2) {
                      line(tilesX,tilesY+x,tilesX+h,tilesY+x);
                          }

                        // Arc 4 linkboven
                        if (state[i][y] === 3) { 
                      line(90+tilesX+-h,tilesY+x,90+tilesX+-x,tilesY+0);
                          }    
                            
                        // Arc 2 Rechtsboven
                        else if (state[i][y] === 4) {
                      line(tilesX+h,tilesY+x,tilesX+x,tilesY);
                          }

                        // Arc 3 rechtsonder
                        else if (state[i][y] === 5) {
                      line(90+tilesX+0,tilesY+x,90+tilesX+-x,tilesY+h);
                          }

                        // Arc 1 Linksonder
                        else if (state[i][y] === 6) {
                      line(tilesX,tilesY+x,tilesX+x,tilesY+h);
                          }
                        
                        // Diagonal linksboven
                        else if (state[i][y] === 7) {  
                      line(tilesX+0,tilesY+x,tilesX+x,tilesY+0);
                          }

                        // Diagonal rechtsboven
                        else if (state[i][y] === 8) {  
                      line(tilesX+x,tilesY+x,tilesX+h,tilesY+x);
                          }

                        // Diagonal rechtssonder
                        else if (state[i][y] === 9) {      
                      line(tilesX+x,tilesY+h,tilesX+h,tilesY+x);
                          }

                        // Diagonal linkssonder
                        else if (state[i][y] === 10) {       
                      line(tilesX+0,tilesY+x,tilesX+x,tilesY+x);
                          }
                    pop();
   }
  }
 }

   // Check where the mouse is

   mx = int(map(mouseX, 0, width, 0, tilesX));
   my = int(map(mouseY, 0, height,0, tilesY));
 
   //console.log(mx,my);

}

function countUp(i, j){

  if(state[i][j] < 10) {
    state[i][j]++;
  } else {
    state[i][j] = 0;
  }

}

function countDown(i, j){
  
    state[i][j]--;
   if (state[i][j] === -1) {
    state[i][j] = 10;
  }

}

function countReset(i,j){
  state[i][j] = 0;
}

function mousePressed(){
  if(mouseButton === LEFT) {
    countUp(mx,my);
  }
  

  if(mouseButton === CENTER) {
    countDown(mx,my);
  }

  
 
}



document.oncontextmenu = function() {
  return false;
}