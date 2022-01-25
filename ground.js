class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(650,700,1500,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(128, 0, 0);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,1500,20);
    }
}