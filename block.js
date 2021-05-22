class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world, this.body);
        this.image = loadImage("block.png");
      }
      display(){
        if(this.body.speed < 3){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          rotate(angle);
          image(this.image,pos.x,pos.y,this.body.width,this.body.height);
          pop();
        }
        else{
          World.remove(world,this.body);
          push();
          this.Visiblity = this.Visiblity - 50;
          tint(255,this.Visiblity);
          pop();
        }
      }
}