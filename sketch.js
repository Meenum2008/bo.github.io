
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


 var chain;
 var bobObject1;
 var roof1;
 var bo2;
 var co2;
 var boDiameter;
 var bo3;
  
 var co3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bo2=new Paper(455,600,55)
	roof1=new Roof(width/2,400,400,20);
	bobObject1=new Paper(400,600,55);
	bo3=new Paper(510,600,55);
	
	chain=new Constraints(bobObject1.body,roof1.body);
	co2=new Constraints(roof1.body,bo2.body);
	co3=new Constraints(roof1.body,bo3.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
 
 
  bobObject1.display();
  roof1.display();
  chain.display();
  bo2.display();
  bo3.display();
  co2.display();
  co3.display();
}
function keyPressed()
{
	
	if (keyCode === DOWN_ARROW)
	{
		Matter.Body.applyForce(bo2,{x:bo2.position.x,y:bo2.position.y},{x:-132,y:-132});
	
	}

}






