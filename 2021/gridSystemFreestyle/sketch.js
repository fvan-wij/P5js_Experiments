let gridIndex = [];
let tiles = 10;
let tileSize;
let mx;
let my;
let vecsnec;


function setup() {
  createCanvas(900, 900);

  for (let x = 0; x < tiles; x++){
    gridIndex[x] = [];
    for (let y = 0; y < tiles; y++){
      gridIndex[x][y] = 0;
      
    }
  }
  
  
vecsnec = new vecSnecs();  
    

    
  
  
}

function draw() {
  background(240);

//TILE PROPERTIES

tileSize = height / tiles;






for (let x = 0; x < tiles; x++){
  for (let y = 0; y < tiles; y++){
   
    let v0 = createVector(x, y);
    let v1 = p5.Vector.random2D();   
  
    if (x == mx && y == my){
      stroke(255, 0, 0);
    } else {
      stroke(0);
    }
    push();
    translate(x * tileSize, y * tileSize);
    text(gridIndex[x][y], 45, 45);

    
    
      if (gridIndex[x][y] === 1){
        
       
        
        vecsnec.move();
        vecsnec.display();
      }
    pop();
    
    
  }
}

  mx = int(map(mouseX, 0, width, 0, 10));
my = int(map(mouseY, 0, height, 0, 10));


}


function countUp(x, y){

  gridIndex[x][y]++;


}

function mousePressed(){
  if (mouseButton === LEFT){
    countUp(mx, my);
  }
}


class vecSnecs{
  constructor(){
    this.loc;
    this.velocity;

  }

  move(){
    this.loc = createVector(0, 0);
    this.velocity = createVector(2, 4);
    this.loc.add(this.velocity);

  }

  display(){
    

    ellipse(this.loc.x, this.loc.y, 50);

  }

  

  

}