function Particle() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.maxspeed = 2;

    this.cool = 200;
    this.cmix = 1;
    this.wave = sin(radians(frameCount));


    this.prevPos = this.pos.copy();

    this.update = function() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);

    }

    this.follow = function(vectors) {
        var x = floor(this.pos.x / scl);
        var y = floor(this.pos.y / scl);
        this.vel.limit(this.maxspeed);
        var index = x + y * cols;
        var force = vectors[index];
        this.applyForce(force);
    }

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.show = function() {
      this.cool = this.cool + this.cmix;

        stroke(this.cool,this.cool*0.7,this.cool, 2);
        
        if (this.cool > 254) {
            this.cmix = -1;
        } else if (this.cool < 10) {
           this.cmix = 1;
        }

        
        
        strokeWeight(1);
        //point(this.pos.x, this.pos.y); 
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
    }

    this.updatePrev = function() {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;

    }
    this.edges = function() {
        if (this.pos.x > width) {
            this.pos.x = 0;   
            this.updatePrev();      
        }
        if (this.pos.x < 0) {
            this.pos.x = width;
            this.updatePrev();   
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
            this.updatePrev();   
        }
        if (this.pos.y < 0) {
            this.pos.y = height;
            this.updatePrev();   
        }

    }
}