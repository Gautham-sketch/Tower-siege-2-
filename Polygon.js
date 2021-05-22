class Polygon{
    constructor(x,y,r) {
        var options = {
          isStatic:false,
          'restititution' : 0.8,
          'friction' : 0.1,
          'density' : 0.1
        }
        this.body = Bodies.circle(50,200,20,options);
        this.r = r;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position
        var angle = this.body.angle;
        fill("Yellow");
        imageMode(CENTER);
        image(polygon_img,this.body.position.x,this.body.position.y,40,40);
      }
}