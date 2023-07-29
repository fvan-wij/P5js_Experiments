let distribution = new Array(1000);

function setup() {
  createCanvas(400, 400);
 for (let i = 0; i < distribution.length; i++){
   distribution[i] = randomGaussian(0, 100);
 }
}

function draw() {
  background(255);

  translate(width/2, height/2);

  for (let i = 0; i < distribution.length; i++){

    rotate(TWO_PI/ distribution.length);

    
    strokeWeight(5);
    let dist = abs(distribution[i]);
    stroke(200 + dist, 100 + dist, dist/8);
    point(dist, 0);



  }
 

}
