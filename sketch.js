
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box,box2,box3, bird,ground;
function preload()
{
	
}

function setup() {
	createCanvas(1920, 1080);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box = new Box(1190,640,100,10);
	box2 = new Box(1140,600,10,100);
	box3 = new Box(1240,600,10,100);
	ground = new Ground(400,651,2520,20)
	bird = new Bird(100,100)
	Engine.run(engine);
  
}


function draw() {
 	rectMode(CENTER);
 	background(0);
	box.display();
	box2.display();
	box3.display();
	bird.display();
	ground.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(bird.body,bird.body.position,{x: 11,y: -12})
	}
}



