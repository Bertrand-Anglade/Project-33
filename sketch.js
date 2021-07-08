const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backGroundImg;
var snow;

function preload(){
  backGroundImg = loadImage("snow3.jpg");
  snow = loadImage("snow4.webp");


}





function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world
  createSprite(400, 200, 50, 50);
  snow1 = new Snow(400,200,25,25)

}

function draw() {
background(backGroundImg);
  Engine.update(engine);
   drawSprites();
  snow1.display();
}

