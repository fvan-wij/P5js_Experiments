
let altitude = [];


function setup() {
  createCanvas(900, 900);
  frameRate(60);
  smooth();
  for (let i = 0; i < 900; i++) {
    altitude[i] = random(900);

  }
  
}

function draw() {

 
  background(250);

                                //ANALOG FILTER
  var x = random(900);
  var y = random(900);
  //noLoop();

  noFill();
  stroke(0);
  strokeWeight(random(.5,1));
  ellipse(x,y,random(5),random(10))
  line(x,y,x+random(10),y+random(10));


  

                                //HORIZONTAL RECTANGLES
                                var wave = sin(radians(frameCount)) 
  var tiles =  constrain(mouseX,0,900);
  var tilesW = width / tiles;      
  
  //for (i = 0; i < tiles;i++){
    fill(0);
   // rect(tilesW+i*90,height/2,20,5);
  //}

  text("X = " + mouseX, 50, 50);
  text("Y = " + mouseY, 50, 75);
  

                               //LINES 
 
  

  var gY = height/2;
  var gYd = constrain(mouseY,800,900);
  var d = width / tiles;
  var h = d/2;
   //x130, height/2      

   translate(-d,0);

  for (i = 0; i < tiles;i++){
    
    line(tilesW+i*d,gY, tilesW+h+i*d, gYd-altitude[i]);
    line(tilesW+h+i*d,gYd-altitude[i], tilesW+d+i*d, gY);
    noFill();
    
    //ellipse(tilesW+i*d,gY, 10,10);



  //  //1
  //  line(133,gY, 165, gYd-A);
  //  line(165, gYd-A, 202, gY);
  //  //2
  //  line(223,gY, 255, gYd-B);
  //  line(255, gYd-B, 292, gY);
  //  //3 
  //  line(313, gY, 347, gYd-C);
  //  line(347, gYd-C, 383, gY);
  //  //4 402, 471
  //  line(402, gY, 437, gYd-D);
  //  line(437, gYd-D, 473, gY);
  //  //5 
  //  line(492, gY, 492+d, gYd-E);
  //  line(492+d, gYd-E, 562, gY);
  //  //6
  //  line(583, gY, 583+d, gYd-F);
  //  line(583+d, gYd-F, 652, gY);
  //  //7
  //  line(672, gY, 672+d, gYd-G);
  //  line(672+d, gYd-G, 742, gY);

  }
}



