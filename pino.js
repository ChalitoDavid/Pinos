class Block{
    constructor(x, y, width, height) {
      this.disminuidor=255    
      var options = {
               
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Pino.png")
        World.add(world, this.body);
      }
      display(){
      if(this.body.speed <10){
  var angle = this.body.angle;
  var pos= this.body.position;
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.image, 0, 0, this.width, this.height);
  pop();
  }
  else{
  World.remove(world, this.body)
  push();
  tint(255, this.disminuidor=this.disminuidor-50);
  imageMode(CENTER);
  image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
  pop();
  }
}
}

