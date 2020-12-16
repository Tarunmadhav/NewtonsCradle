
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
    bobDiameter=40;
	
rope1=new Rope(bob1.body,box.body,-bobDiameter*2,0)
rope2=new Rope(bob2.body,box.body,-bobDiameter*2,0)
rope3=new Rope(bob3.body,box.body,-bobDiameter*2,0)
rope4=new Rope(bob4.body,box.body,-bobDiameter*2,0)
rope5=new Rope(bob5.body,box.body,-bobDiameter*2,0)


	//Create a Ground
	ground = Bodies.rectangle(300, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	box = new Roof(400,300);
	//box.shapeColor="red";

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
box.display();
  drawSprites();
 
}



