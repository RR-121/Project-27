const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, mainRoof, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	mainRoof = new Roof(600, 100, 500, 50);

	bob1 = new Bob(400, 500, 100);
	bob2 = new Bob(500, 500, 100);
	bob3 = new Bob(600, 500, 100);
	bob4 = new Bob(700, 500, 100);
	bob5 = new Bob(800, 500, 100);	

	rope1 = new Rope(bob1.body, mainRoof.body, -100*2, 0);
	rope2 = new Rope(bob2.body, mainRoof.body, -100, 0);
	rope3 = new Rope(bob3.body, mainRoof.body, 0, 0);
	rope4 = new Rope(bob4.body, mainRoof.body, 100, 0);
	rope5 = new Rope(bob5.body, mainRoof.body, 100*2, 0);


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("green");

	Engine.update(engine);

	mainRoof.display();	
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	
	drawSprites();
 
}



