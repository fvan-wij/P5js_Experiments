// let imgSwitchOn;
// let imgSwitchOff;

//function preload() {
  // imgSwitchOn = loadImage('assets/laDefense.jpg');
  // imgSwitchOff = loadImage('assets/laDefense.jpg');
//}
let dec = 10;
let on = false;

let growUp = 150;
let growDown = -150;

function setup() {
  createCanvas(900, 900);

  //imgSwitchOn = new imgSwitchOff

}


function draw() {

  background(0);
  fill(0);
  stroke(255);
  strokeWeight(3);
  
 
 
  let d = dist(width/2, height/2, mouseX, mouseY);
  let x = width/2;
  let y = height/2;
  let x1 = width/2;
  let y2 = height/2;
  
  if (on == true)
  {
      push();
      strokeWeight(growUp*2);
      line(x, y - growUp, x1 , y2 - growDown);
      growUp = growUp + 5;
      growDown = growDown - 5;
      pop();
      push();
      noStroke();
      fill(255,0,0);
      ellipse(mouseX, mouseY, 20);
      pop();
      
  } 
  else if (on == false )
  {
    
    ellipse(width/2, height/2, 150, 150);
    fill(0);
    growUp = 0;
    growDown = 0;

    push();
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 20);
  noCursor();
  pop();
    
  }

  if (d < 75 && mouseIsPressed)
  {
    changeSwitch();
  }



  if (growUp > 900 || growDown < -900) 
  {
    growUp = 900;
    growDown = -900;
   
  }

  
  print(growDown);

}


function changeSwitch() {

  on = !on;

}