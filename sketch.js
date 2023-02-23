const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;
var blower1,blower2,blower3,blower4
var buttom3,buttom2

function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  blower1 = new Blower(width /2, height -10, 500, 20);
  blower2 = new Blower(width /2,  10, 500, 20);
  blower3 = new Blower(10, height /2,20 ,500 );
  blower4 = new Blower(width -10, height /2, 20, 500);
  button = createButton("up");
  button2 = createButton("left");
  button3 = createButton("right");
  button.position(width  -300, height - 150);
  button2.position(width  -400, height - 100);
  button3.position(width -200, height - 100);
  button.class("blowButton");
  button2.class("blowButton");
  button3.class("blowButton");

  button.mousePressed(blow);

  button2.mousePressed(blow2);

  button3.mousePressed(blow3);
}

function draw() {
  background(59);
  Engine.update(engine);

  blower1.show();
  blower2.show();
  blower3.show();
  blower4.show();
  ball.show();
  
}

function blow() {

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.05});

}


function blow2() {

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:-0.05, y:0});

}


function blow3() {

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0.05, y:0});

}