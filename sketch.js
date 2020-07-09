
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bob1= new Bob(300,500,10)
	bob2= new Bob(300,500,10)
	bob3= new Bob(300,500,10)
	bob4= new Bob(300,500,10)
	bob5= new Bob(300,500,10)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	box = new Roof(400,300);
	//box.shapeColor="red";

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("blue");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
box.display();
  drawSprites();
 
}



