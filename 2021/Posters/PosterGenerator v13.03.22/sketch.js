///////////////////GLOBAL VARIABLES

  //INITIAL X & Y POSITION FOR TITLE
  let x = 100;
  let y = 100;

  //INITIAL X & Y POSITION FOR SUBTEXT
  let xs = 100;
  let ys = 300;

  //BOOLEANS 
  let on = false;
  let pause = false;
  let invert = false;
  let invertC;

  //IMG VARIABLE USED FOR OVERLAY
  let img;

  //IMG VARIABLE FOR CREATE FILE INPUT
  let uploadInput;
  let uploadImg;
  let xImage = 100;
  let yImage = 500;
  let hideImg = true;
  let buttonHideImg;
  let sliderImageSize;

  // TEXT INPUT, HEADER & SUBTEXT
  let tSize = 110;
  let inputHeaderText;
  let inputSubtext;
  let iB = 0.99; //Border width in which text increases (0.99 * width)
  let dB = 0.8; //Border width in which text decreases (0.8 * width)

///////////////////SLIDERS 
  
  //RGB SLIDERS 
  let sliderR;
  let sliderG;
  let sliderB;


  let slider; //TITLE SIZE SLIDER
  let sliderGridsize; //GRID SIZE SLIDER
  let sliderSubtext; //SUBTEXT SIZE SLIDER

  let p; //HTML <p> ('TITLE')
 

let button;
let buttonInvert;
let pButton;

let val = 0;
let val2 = 0;
let val3 = 0;

let timer = 0;

function preload() {
  img = loadImage('img/overlay.png');
}



function setup() {
  createCanvas(900, 900);


  color = (random(255), random(255), random(255));

  p = createP('Title');
  p.position(70, 90);

 
  
  inputHeaderText = createInput('Insert title here');
  inputHeaderText.position(70, 130);

  inputSubtext = createInput('Subtext');
  inputSubtext.position(70, 200);


  uploadInput = createFileInput(handleFile);
  uploadInput.position(70, 700);
  
  buttonHideImg = createButton('Hide image');
  buttonHideImg.position(70, 740);
  buttonHideImg.mousePressed(hideImage);

  // SLIDERS
 

  
    //RGB SLIDERS
  sliderR = createSlider(0, 255, 200);
  sliderR.position(70, 45);
  sliderG = createSlider(0, 255, 200);
  sliderG.position(70, 55);
  sliderB = createSlider(0, 255, 200);
  sliderB.position(70, 65);

    //TEXT SIZE SLIDER
  slider = createSlider(10, 200, 50);
  slider.position(70, 160);

  //SUBTEXT SIZE SLIDER
  sliderSubtext = createSlider(5, 100, 20);
  sliderSubtext.position(70, 220);

    //GRID SLIDER - Size
  sliderGridsize = createSlider(-10, 50, 10);
  sliderGridsize.position(70, 280);

    //IMG SIZE SLIDER
  sliderImageSize = createSlider(10, 900, 200);
  sliderImageSize.position(70, 770);

  //BUTTONS
  button = createButton('Enable Generative Grid', on);
  button.position(70, 250); 
  button.mousePressed(changeSwitch);

  pButton = createButton('pause', pause);
  pButton.position(70, 400);
  pButton.mousePressed(pauseAnimation);

  buttonInvert = createButton('Invert Color');
  buttonInvert.mousePressed(invertColor);
  buttonInvert.position(70, 310);
 
 

}

function draw() {

//BACKGROUND COLOUR & SLIDERS  
  const r = sliderR.value();
  const g = sliderG.value();
  const b = sliderB.value();
  background(r, g, b, 10);
  

   
//DRAW DRAGGING CROSS WHEN MOUSE IS DETECTED NEAR TITLE
  if (dist(mouseX, mouseY, x, y) < 50){
    push();
      fill(255, 0, 0);
      strokeWeight(2);
      line(x, y- 7, x, y + 7);
      line(x - 7, y, x + 7, y);
    pop();
  }
 
//GENERATIVE ART
    //DRAW RANDOM GENERATIVE BLOBS
push();
  createRandomGrid();
pop();

    //CHANGE COLOR EVERY 1000 MILLIS
  if (millis() >= 1000+timer) {
    changeColor();
    timer = millis();
  }




//TITLE, SUBTEXT, SCALING, INVERT COLOR  
    //TITLE TEXT
      let hT = inputHeaderText.value();
      let tWidth = textWidth(hT);
    
      text(hT, x, y);
      textSize(tSize + slider.value());
    
      //IF TEXT WIDTH IS GREATER THAN WIDTH * iB (increaseBorder), DECREASE TEXTSIZE WITH -1;
        if (tWidth > width * iB){
          tSize = tSize - 5;
        } 
      
      //IF TEXT WIDTH IS SMALLER THAN WIDTH * dB (decreaseBorder), INCREASE TEXTSIZE WITH -1;
        if (tWidth < width * dB){
        tSize = tSize + 5;
        }

    //SUBTEXT 
      push();
        textSize(sliderSubtext.value());
        text(inputSubtext.value(), xs, ys);
      pop();

    //INVERT COLOR
      if (invert == true){ 
        fill(255);    
      } else {
        fill(0);    
      }

//UPLOAD IMAGE
  if (uploadImg) {
    //IF HIDEIMG = TRUE SHOW IMAGE OTHERWISE HIDE IMAGE WHEN BUTTON 'HIDE IMAGE IS PRESSED'
    if (hideImg == true){
      image(uploadImg, xImage, yImage, sliderImageSize.value(), sliderImageSize.value());
    } else {
      tint(0, 0);
    }
    
  }

 



//INSERT OVERLAY WHEN YOU PRESS PAUSE  
  if (pause == true){ 
    tint(0, 100);
    image(img, 0, 0);
    img.resize(width, height);
  } 




}


  //DETECT MOUSE, DRAG TITLE WITH MOUSE CLICK DRAGGED
function mouseDragged() {
  
  if (dist(mouseX, mouseY, x, y) < 50) {
    x = mouseX;
    y = mouseY - 12;
    }
  
  if (dist(mouseX, mouseY, xs, ys) < 50) {
    xs = mouseX;
    ys = mouseY - 12;
    }
  
  if (dist(mouseX, mouseY, xImage, yImage) < 75) {
    xImage = mouseX;
    yImage = mouseY;
    }  


}


function createRandomGrid() {
  let wave = sin(radians(frameCount));
  let mappedWave = map(wave, -1, 1, 20, 70);

  let tiles = mappedWave;
  let tileW = width / tiles;
  let tileH = height / tiles;
  
  if (on == true) {
    translate(-100,height/2);
   
  for (let x = 0; x < tiles; x ++){
    for(let y = 0; y < tiles; y ++){
      rotate(x);  

      let posX = tileW * x;
      let posY = tileH * y;
      let chance = int(mappedWave);

      push();
      translate(posX, posY);
      ellipseMode(CORNER);
      noStroke();
      fill(val, val2, val3);
      //ellipse(0, 0, tileW + sliderGridsize.value(), tileH + sliderGridsize.value()/4);
      ellipse(0, 0, random(20)+ sliderGridsize.value(), random(20) + sliderGridsize.value());
      pop();

    }
  }
}

}

function changeColor() {
  val = random(255);
  val2 = random(255);
  val3 = random(255);
}

  //BOOLEAN FUNCTIONS
  
function pauseAnimation(){
    pause = !pause; 
  if (pause == true){ 
    noLoop();
    image(img, 0, 0);
    } else {
    loop();
  }
}

function invertColor(){
  invert = !invert;
}

function changeSwitch() {
  on = !on;
}


//UPLOAD IMAGE
function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    uploadImg = createImg(file.data, '');
    uploadImg.hide();
  } else {
    uploadImg = null;
  }
}

function hideImage() {
  hideImg = !hideImg;

  print(hideImg)
}