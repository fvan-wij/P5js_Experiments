var angle = 0;
let particles = [];
let n = 20;
const ascii = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789~!@#$%^&*()_+{}|:?><,./;[]=-';
let charIndex = 0;

function setup() {
  	createCanvas(800, 800);
	for (let i = 0; i < n; i++) {
		particles.push(new Particle());
	}
  	// background(0, 0, 255);
}

function draw() {
  	background(0, 0, 255);
	angle += 1.5;
	if (angle > 360)
		angle = 0;
	var radius = 5;
	var x = radius * cos(radians(angle));
	var y = radius * sin(radians(angle));
	
	fill(255);
	noStroke();	
	for (let i = 0; i  < particles.length; i++) {
		particles[i].createParticle();
		particles[i].moveParticle();
		particles[i].joinParticle(particles.slice(i));
	}
	textSize(50);
	fill(0, 255, 0);

}

class Particle {
	constructor()
	{
		this.x = random(width);
		this.y = random(height);
		this.size = random(1, 30);
		this.randChar = int(random(0, ascii.length));
		this.xSpeed = random(0, 1);
		this.ySpeed = random(0, 1);
		this.thickness = (random(0, 1));
	}

	createParticle()
	{
		textSize(this.size);
		text(ascii[this.randChar], this.x, this.y, this.size);
	}

	moveParticle()
	{
		let vec = createVector(0, 0);
		vec.add(this.xSpeed, this.ySpeed);
		this.x += vec.x;
		this.y += vec.y;
		if (this.x > width || this.x < 0)
			this.xSpeed *= -1;
		if (this.y > height || this.y < 0)
			this.ySpeed *= -1;
	}

	joinParticle(particles)
	{ 
	for (let i = 0; i < particles.length; i++) {
			let dis = dist(this.x, this.y, particles[i].x, particles[i].y);
			if (dis < 150)
			{
				charIndex = i; 
				stroke(255);
				strokeWeight(this.thickness);
				line(this.x, this.y, particles[i].x, particles[i].y);
				this.size = 50;
				particles[i].size = 50;
				// text(ascii[charIndex], width / 2, height / 2);
			}
			else
			{
				this.size = 10;
				particles[i].size = 10;
			}
	}	
	}
}

