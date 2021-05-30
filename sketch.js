const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ground;
var slingShot;

function preload(){
  
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(200,200,900,20);
// level1
  block1 = new Block(500,345,50,50);
  block2 = new Block(550,345,50,50);
  block3 = new Block(600,345,50,50);
  block4 = new Block(650,345,50,50);
  //level2
  block5 = new Block(500,295,50,50);
  block6 = new Block(550,295,50,50);
  block7 = new Block(600,295,50,50);
  block8 = new Block(650,295,50,50);
  //level3
  block9 = new Block(500,245,50,50);
  block10 = new Block(550,245,50,50);
  block11 = new Block(600,245,50,50);
  block12 = new Block(650,245,50,50);
  //level4
  block13 = new Block(500,195,50,50);
  block14 = new Block(550,195,50,50);
  block15 = new Block(600,195,50,50);
  block16 = new Block(650,195,50,50);
  //level5
  block17 = new Block(500,145,50,50);
  block18 = new Block(550,145,50,50);
  block19 = new Block(600,145,50,50);
  block20 = new Block(650,145,50,50);

  // making a bob
  bobObj = new Bob(370,200,50,50);

  slingshot = new Slingshot(bobObj.body ,{x: 370 , y : 100});
 
 
 

}
function draw() {
  background("white"); 
  Engine.update(engine);
  ground.display();
  stroke("black");
  strokeWeight(4);
  fill("blue");
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

bobObj.display();
slingshot.display();


 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObj.body,bobObj.body.position,{x:730,y:0});
	}
}

