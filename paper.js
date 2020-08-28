class Paper {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, 20, 20, options);
      this.width = 20;
      this.height = 20;
      this.image = loadImage("sprites/paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };