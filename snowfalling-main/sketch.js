const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var maxDrops = 100;
var drops = [];
var engine;
var world;


function preload(){
  bg = loadImage("snow3.jpg");
  snow1 = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);
  snow1=createSprite(250,450,150,150);
  snow1.addAnimation("snow4.webp");
  snow1.scale=0.5;
  for(i = 0; i < maxDrops; i++){
    drops.push(new Snow(random(0, 1000), random(0, 1000)));
  }
}

function draw() {
  background(bg);
  Engine.update(engine);
  createDrops();

  drawSprites();
}
function createDrops(){
  for(i = 0; i < maxDrops; i++){
    drops[i].display();
    drops[i].update();
  }
}