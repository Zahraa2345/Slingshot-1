class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            setStatic: true,
            //restitution:0.8,
            //friction:1.0,
            //density:1.0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        fill("blue");
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
      }
}