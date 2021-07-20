const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=Engine.world;

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  
  for (var k = 0; k <=innerWidth; k = + 80) {
    divisions.push(new divisions(k, height-divisionHeight/2, 10, divisionHeght));
  }

  drawSprites();
}