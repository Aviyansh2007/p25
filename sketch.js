
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var ground;
var dustbinObject;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,650,width,20);
	paperObject = new Paper(200,450,20);
	dustbinObject = new Dustbin(1000,640);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paperObject.display();
  dustbinObject.display();
 
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Body.applyForce(paperObject.body,paperObject.body.position,{x:80,y:-80})
	}
}

