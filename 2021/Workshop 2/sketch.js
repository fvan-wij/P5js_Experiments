

function setup() {
  let achtergrond = color(0, 255, 0);
  createCanvas(900, 900);

  background(achtergrond);

}

function draw() {  

    frameRate(2);

    //KLEUR VARIABELEN
  
    let bloemKleur = color(random(255),random(255),random(255));
    let bladKleur = color(255, 150, 0);
  
    //BLOEM VARIABELEN
 
    let bloemX = random(0, width);
    let bloemY = random(0, height);
    let bladGrootte = 100;
    let bladAfstand = bladGrootte /2;
 
    //BLAD LINKSBOVEN
    fill(bladKleur)
    circle(bloemX - bladAfstand, bloemY - bladAfstand, bladGrootte);
 
    //MIDDEN VAN DE BLOEM
    fill(bloemKleur)
    circle(bloemX, bloemY, bladGrootte);






}



