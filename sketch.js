
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, stone;
var world,boy, chian;

function preload(){
	boy = loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100,100,30);
	mango2 = new mango(1150, 150, 25);
	mango3 = new mango(980, 60, 20);
	mango4 = new mango(900, 200, 35);
	mango5 = new mango(1200, 230, 20);
	mango6 = new mango(1070, 170, 40);
	mango7 = new mango(1000, 180, 30);
	mango8 = new mango(1150, 200, 25);
	mango9 = new mango(950, 250, 35);
	mango10 = new mango(1100, 30, 30);
	mango11 = new mango(1000, 100, 25);
	mango12 = new mango(1230, 180, 25);
	stone = new Stone(240, 420, 20);
	chain = new Chain(stone.body, {x: 240, y:420});

	treeObj = new tree(1050,580);
	groundObject = new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stone.display();
  //chain.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);
  detectCollision(stone, mango11);
  detectCollision(stone, mango12);

  if(keyDown("space")){
	  Matter.Body.setPosition(stone.body, {x: 250, y: 420});
	  chain.attach(stone.body);
  }

  groundObject.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	chain.fly();
}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance <= lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}
}
