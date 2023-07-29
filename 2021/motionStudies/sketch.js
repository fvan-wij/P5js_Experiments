
let x = 0;
let y = 0;

function setup() {
  createCanvas(900, 900);
  background(100, 100, 255);
}

function draw() {  
  stroke(255);

  //let chance = int(map(mouseX, 0, 900, 0, 4));
  translate(width/2, 0);
  //rotate(radians(10));
  let chance = int(random(0, 3));
  noFill();
  switch (chance) {
    case 0:
        noFill();
        //line(x, y, x + 50, y+ 50);
        rect(x, y-25, 25)
        rect(x, y, 25);
        break;
    case 1:
      fill(255);
        //line(x + 50, y, x, y + 50);
        rect(x, y + 25, 25);
        break;
    case 2:
        rect(x, y + 25, 25);
        rect(x+25, y + 25, 25);
        break;

    
    
}

 
  
  x+=50;

  if (x > width){
    x = 0;
    y+=50;
  }
}
