let d;
let d2;

let X;
let speed;

function setup() {
  createCanvas(900, 900);
  d = new Doos(400, 400, 400 + 150);
  d2 = new Doos(300, 300, 300 + 150);
  X = 0;
}

function draw() {
  background(220);
speed = 1;
X = X + speed;

translate(400,200);
rotate(radians(frameCount * 0.4));
Doos(X, 0, 100, 100, 200);
  


}


function Doos(x, y , w, h, c){
    

      

    fill(c,40,70);
    quad(x+w/2,y,x+w,y+h/4,x+w/2,y+h/2,x,y+h/4);
    fill(c,40,50);
    quad(x,y+h/4,x+w/2,y+h/2,x+w/2,y+h,x,y+h*3/4);
    fill(c,40,40);
    quad(x+w,y+h/4,x+w/2,y+h/2,x+w/2,y+h,x+w,y+h*3/4);
  

}