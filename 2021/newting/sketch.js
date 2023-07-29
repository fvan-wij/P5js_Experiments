let pg;
let newFont;

function preLoad(){
  newFont = loadFont('../RobotoMono-Regular.ttf');

}

function setup() {
  createCanvas(900, 900);
  pg = createGraphics(900,900);
}

function draw() {
  

  push();
  pg.background(0);
  pg.fill(255);
  pg.textSize(400);
  pg.textAlign(CENTER,CENTER);
  pg.text("kaas", height/2, width/2);
  pop();
  
  //image(pg,0,0);
  const s = pg.canvas.width / pg.width;

  let tilesX = 40;
  let tilesY = 40;

  let tileW = int(width/tilesX);
  let tileH = int(width/tilesY);

  



for (let y = 0; y < tilesY; y++){
  for (let x = 0; x < tilesX; x++){

      let wave = sin(radians(frameCount + (x % y))*0.8);

      //Source
      let sx = x * tileW * wave;
      let sy = y * tileH;
      let sw = tileW;
      let sh = tileH;

      //Destination
      let dx = x * tileW;
      let dy = y * tileH;
      let dw = tileW;
      let dh = tileH;

      //copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);

      // drawingContext.shadowOffsetX = 5;
      // drawingContext.shadowOffsetY = -5;
      // drawingContext.shadowBlur = 10;
      // drawingContext.shadowColor = 'black';

      
      drawingContext.drawImage(
        pg.canvas,
        s*sx,
        s*sy,
        s*sw*wave,
        s*sh*wave,
        dx,
        dy,
        dw,
        dh
      );
  }
}



}
