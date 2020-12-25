





var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	





	engine = Engine.create();
	world = engine.world;

	




	box1 = new Box(305,600,20,100);
	box2 = new Box(600,600,20,100);
	box3 = new Box(455,640,300,20);
	ball = new paper(50,550,10)
	ground = new Box(550,670,3000,30)
	
  
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  box1.display();
  box1.color = "red"
  box2.display();
  box2.color = "red"
  box3.display()
  box3.color = "red"
  ball.display()
  ground.display()
ball.body.isStatic = false
ground.body.isStatic = true
//   Matter.Body.setStatic(box1.body,true);
//   Matter.Body.setStatic(box1.body,true);
//   Matter.Body.setStatic(box1.body,true);

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:-10});
  
	}
	if (keyCode === LEFT_ARROW) {

		Matter.Body.applyForce(ball.body,ball.body.position,{x:-10,y:0});
	
	  }
	  if (keyCode === RIGHT_ARROW) {

		Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:0});
	
	  }
	  
}


  













