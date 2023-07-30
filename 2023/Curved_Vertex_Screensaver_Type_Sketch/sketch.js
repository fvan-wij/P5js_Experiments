let d;
let dir;
let acc;
let angle;

function setup() {
  	createCanvas(800, 800);
	d = 0;
	dir = createVector(0, 0);
	acc = createVector(random(-1, 1), random(-1, 1));
}

function draw() {
  	background(0, 0, 255);
	noFill();
	stroke(255);
	let r = 400;
	d+=0.01;
	let driver = sin(d);
	beginShape();
	translate(width/2, height/2);
	for (let i = 0; i < 50; i++) {
		let x = r * sin(i); 
		let y = r * cos(i + d);
		dir.x = 600 - x;
		dir.y = 600 - y;
		dir.normalize();
		curveVertex(x * dir.x, y * dir.y);	
	}
	endShape();
}

