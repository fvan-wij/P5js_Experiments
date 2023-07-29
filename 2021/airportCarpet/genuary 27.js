let colors = ['#2E294E', '#541388', '#F1E9DA', '#FFD400', '#D90368']
let font;
let theShader;
let shaderTexture;
let angle = 0;
let x;
let y;
let outsideRadius = 200;
let insideRadius = 100;
function preload() {
  theShader = loadShader('shader.vert', 'shader.frag');

}


function setup() {
  createCanvas(900, 900, WEBGL);
  pixelDensity(1);

  
  
  shaderTexture = createGraphics (900, 900, WEBGL);
  shaderTexture.noStroke();

}

function draw() {
  theShader.setUniform("iResolution", [width, height]);
  theShader.setUniform("iFrame", frameCount);
  theShader.setUniform("iMouse", [mouseX, map(mouseY, 0, height, height, 0)]);
  theShader.setUniform("iTime", millis() / 1000.0);

  shaderTexture.shader(theShader);

    //START RECORDING

// if (frameCount === 1) {
//   capturer.start();
// }
background(colors[1]);



fill(255);
shaderTexture.box(0,0,width,height);



  //background(colors[2]);
  noStroke();
  rectMode(CENTER);
  

    

    texture(shaderTexture);
   
   
    rotateZ(angle * mouseX * 0.0001);
    rotateX(angle * mouseX * 0.0001);
    rotateY(angle * mouseX * 0.0001);  
    angle += 0.05;
    box(200);
   




    //STOP RECORDING AND SAVE

// if (frameCount < 180) {
//   capturer.capture(canvas)
// } else if (frameCount === 180) {
//   capturer.save();
//   capturer.stop();
// }

}

