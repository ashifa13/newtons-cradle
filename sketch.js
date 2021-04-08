
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
 
  roof = new Roof(450,100,300,20);
 bobObject1 = new Bob(350,400,50);
  bobObject2 = new Bob(400,400,50);
  bobObject3 = new Bob(450,400,50);
  bobObject4 = new Bob(500,400,50);
  bobObject5 = new Bob(550,400,50);
  chain = new Chain(bobObject1.body,{x:350,y:100});
  chain2 = new Chain(bobObject2.body,{x:400,y:100});
  chain3 = new Chain(bobObject3.body,{x:450,y:100});
  chain4 = new Chain(bobObject4.body,{x:500,y:100});
  chain5 = new Chain(bobObject5.body,{x:550,y:100});







	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}
function KeyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bobObject1.body,bobObject1.position,{x:-30,y:155});
  }
}


