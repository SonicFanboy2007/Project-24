class Bird {
    constructor(x, y) {
      var options = {
          'restitution':1.2,
          'friction':0.8,
          'density':0.8
      }
      this.body = Bodies.rectangle(x, y, 15, 15, options);
      this.width = 18;
      this.height = 18;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(3);
        stroke("blue");
        fill(0,255,255);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  