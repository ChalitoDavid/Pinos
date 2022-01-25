const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2,stand3;
var ball;
var slingShot;
var polygon_img;
var chain


function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();

 
//pinos y stand  de enmedio 
block1 = new Block(405,275,40,80);
block2 = new Block(455,275,40,80);
block3 = new Block(505,275,40,80);
block4 = new Block(555,275,40,80);
block5 = new Block(605,275,40,80);
block6 = new Block(655,275,40,80);

stand2= new Stand(520,300,350,10);
 
//pinos y stand de arriba
block7 = new Block(800,125,40,80);
block8 = new Block(820,125,40,80);
block9 = new Block(840,125,40,80);
block10 = new Block(860,125,40,80);
block11 = new Block(880,125,40,80);
block12 = new Block(900,125,40,80);
block13 = new Block(920,125,40,80);


stand1= new Stand(900,150,350,10);


  // pinos y stand de abajo
 
  block14 = new Block(150,275,40,80);
  block15 = new Block(200,275,40,80);
  block16 = new Block(250,275,40,80);
  block17 = new Block(300,275,40,80);
  block18 = new Block(350,275,40,80);
  block19 = new Block(450,485,40,80);
 
  stand3 = new Stand(300,500,350,10);
  
  //bola
  
  block20 = new Polygon(100,100,45,45);
  block21 = new Polygon(100,110,35,35);
  
  //Resortera
  chain = new Chain(block20,{x:150,y:100});

  

}
function draw() {
  background(240,230,202); 
 
  //funciones del texto 
  textSize(20);
  text("Presiona espacio para regresar la bola",30,580)
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  stand3.display();

  strokeWeight(2);
  stroke(15);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();


 chain.display();
}

//funciones para la resortera
function mouseDragged(){
  Matter.Body.setPosition(block20.body,{x:mouseX, y:mouseY});
  }
  
  function mouseReleased(){
  chain.fly();
  }
  
  //función para que la bolita regrese a la resortera 
  function keyPressed(){
    if(keyCode === 32){
      chain = new Chain(block20,{x:150,y:100});
    }
  }