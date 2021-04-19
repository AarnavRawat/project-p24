const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var paper;
var trash1, trash2, trash3;

function preload() {

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 665, 800, 10);
	paper = new Paper(100,625,5);
	trash1 = new Trash(650,655,100,10);
	trash2 = new Trash(600,605,10,100);
	trash3 = new Trash(700,605,10,100);
	

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
    
	paper.display();
	ground.display();
	trash1.display();
	trash2.display();
	trash3.display();

	keyPressed();

	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	    matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})

	}
}

