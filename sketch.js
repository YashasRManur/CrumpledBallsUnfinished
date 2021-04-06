var Ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1700, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Ball = new Balls(700, 100, 30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ball.display();
  drawSprites();
 
}



