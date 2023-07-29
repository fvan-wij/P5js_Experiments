let pColor = '#6225db';
let img;
let pg;


function preload(){
  img = loadImage('../glued paper texture lincungstock 3.png');
}


function setup() {

  createCanvas(650, 900);


}

function draw() { 
  background(20);

  for(let x = 0; x < 10; x++){
    fill(pColor);
    rect(pow(x * 1.1, 2), 0, pow(x * 1.1, 1.3), 90);
    rect(pow(x / 1, 2), 90, pow(x * 1.1, 1.3), 90);
    rect(x * 10, 180, x, 90);
    rect(x * 40, 270, 20, 90);
    rect(0, 360 + x * 20, 90, 10);

    
  }

  
  
     
}
