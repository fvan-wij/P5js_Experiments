let pColor = '#6225db';
let img;
let pg;


function preload(){
  img = loadImage('../glued paper texture lincungstock 3.png');
}


function setup() {
  createCanvas(480, 590);
  let blocks = random(100);
  let divisions = width / blocks;
   //PG GRAPHICS POSTER
  pg = createGraphics(480, 590);
  pg.background(10);
  
  for(let x = 0; x < blocks; x++) {
    pg.fill(98, 37, 219, 100);
    pg.rect(x * divisions, 0, divisions, height);
    

  }
  //image(pg, 0, 0); 

  //Poster texture overlay

  for(let i = 0; i < 100; i++){
    image(img, 0,0);
    img.resize(width, height);
    tint(0, i/2);
  }

  for(let x = 0; x < 10; x++) {
    
    copy(pg, x * 100, random(200), random(100)* x, 20, x * 100, 0, random(100) * x, random(500));
    
  }

  textSize(50);
  for(let y = 0; y < 15; y++){
    fill(255, y * 10);
    text('Creative Coding', 63, 90 + y * 30);

  }

}

function draw() { 

  let wave = sin(radians(frameCount)) * 100;  
  let wave2 = cos(radians(frameCount)) * 200;

 

   
  
  
     
}
