class Bob{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.3,
            'friction':0,
            'density':1.2,
            isStatic:false
        }
       this.x=x;
       this.y=y;
       this.radius=radius;
       this.body = Bodies.circle(this.x, this.y, (this.radius)/2, options);
       World.add(world, this.body);
      }
      display(){
       push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
       fill("scarlet");
       ellipse(0,0,this.radius,this.radius);
        pop();
      }

}