let newColor;
let x;

function setup() {

  newColor = color(0, 255, 0);
  x = 200;


  createCanvas(900, 900);


  //ELLIPSE 1
  fill(newColor);
    ellipse(x, 200, 100);

  //ELLIPSE 2
  fill(newColor);
    ellipse(x, 300, 20);

  //ELLIPSE 3
  fill(newColor);
    ellipse(x, 100, 75);

  //ELLIPSE 4
  fill(newColor)
    ellipse(x, 200, 150);  

   

}

function draw(){
  background(0, 200, 0);

  let bloemX = 450;
  let bloemY = 450;
  let bladGrootte = 100;
  let bladAfstand = bladGrootte / 2;

  fill(255, 0, 0);
   // Blad LINKS BOVEN
  ellipse(bloemX - bladAfstand, bloemY - bladAfstand, bladGrootte);

   //BLAD MIDDEN 
	fill(255, 128, 0);
	ellipse(bloemX, bloemY, bladGrootte);
}



