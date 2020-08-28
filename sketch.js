
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, box1, box2, box3;
var paper; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20)
	paper = new Paper(100,500);

	//box1 = new Box(550,640,20,100);
	box2 = new Box(660,590,200,200);
	//box3 = new Box(750,640,20,100);

	Engine.run(engine);
  
}


function draw() {
 	rectMode(CENTER);
  	background("lightGrey");
  
	ground.display();
	paper.display();
	//box1.display();
	box2.display();
	//box3.display();

 	drawSprites();
 
}

function keyPressed()
{
	if (keyCode === UP_ARROW) 
	{
		Matter.Body.applyForce(paper.body, paper.body.position,{x:22, y:-22});
	}
}


