 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var paper;
var ground;
var img,dustbin;
var dustbin1,dustbin2,dustbin;
 
function preload (){
img = loadImage ("dustbin.png")
}
 
function setup() {
  createCanvas(1200, 400);
 
 
  engine = Engine.create();
  world = engine.world;
 
  dustbin = createSprite(1000,300,200,10)
  dustbin.addImage (img)
  dustbin.scale = 0.5;

  dustbin1 = new Dustbin(1000,390,130,10)
  dustbin2 = new Dustbin(930,310,10,170)
  dustbin3 = new Dustbin(1070,310,10,170)
 
  paper = new Paper(100,320,70)
 
  ground = new Ground(600,370,1200,10)
 
Engine.run(engine);
  
}
 
 
function draw() {
  rectMode(CENTER);
  background("white");
 
//  Engine.run(engine);
 
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
  drawSprites();
 
  stroke("black");
  strokeWeight(2);
  fill("violet")
  textSize(25);
  textFont("Comic Sans MS");
  text("Press", 350, 50);
  stroke("white");
  strokeWeight(2);
  fill("indigo")
  text(" 'up' ", 413,50)
  stroke("black");
  strokeWeight(2);
  fill("blue")
  text("to ", 473,50)
  fill("green")
  text("throw ", 509,50)
  fill("yellow")
  text("the ", 589,50)
  fill("orange")
  text("paper ", 640,50)
  fill("red")
  text("in ", 713,50)
  fill("violet")
  text("the ", 743,50)
  stroke("white");
  strokeWeight(2);
  fill("indigo")
  text("dustbin ", 795,50)
 
}
 
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body , paper.body.position , {x:15670,y:-17785})
  }
  }
  
