let w;

function setup() {
  createCanvas(400, 400);
  background(220);
  w = new Walker();

}

function draw() {
  

  w.display();
  w.walk();
}


class Walker{
  constructor(){
    this.x = width/2;
    this.y = height/2;
    
  }


  display(){
    stroke(0);
    point(this.x, this.y);
  }

  walk(){
    let choice = int(random(6));
    
    //FRONT
    if (choice == 0) {
      this.y+= -1;
    }
    //RIGHT
     else if (choice == 1 || choice == 4){
      this.x+= 1;
    }
    //DOWN
    else if (choice == 2 || choice == 5) {
      this.y+= 1;
    }
    //LEFT
    else if (choice == 3){
      this.x+= -1;
    }

    


  }


}