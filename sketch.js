
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;



function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(350, 700, 800, 3)
	leftSide = new Ground(550,690,8,120)
	rightSide = new Ground(650, 690, 8, 120)

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	//Create the Bodies Here.
	ball = Matter.Bodies.circle(150, 100, 15, ball_options)
	World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background(0);
	fill("white")
	ellipse(ball.position.x,ball.position.y,15)
	ground.show();
	leftSide.show()
	rightSide.show()

	drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:25,y:7});
    }
}


