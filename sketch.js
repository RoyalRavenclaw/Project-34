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
var button, button_r, brI, bg;

function preload(){
  brI = loadImage("assets/restart.png");
  bg = loadImage("assets/background.png");
}

function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);
  button = createImg('click.png');
  button_r = createImg('./assets/restart.png');
button.position(100,100);
button.size(50,50);
button_r.position(400,70);
button_r.size(100,100);


// buttonmouseClicked(blow);

 button.mouseClicked(blow);

// button.Clicked(blow);

// button.mouse(blow);

button_r.mouseClicked(replace);

}

function draw() {
  background(bg);
  Engine.update(engine);

  blower.show();
  ball.show();
  blowerMouth.show();
}

function blow() {
  
   Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: 0, y: -0.05 });
  
  // Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: 0.05, y: 0.05 });
  
  //Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: 0, y: 0.05 });
  
  // Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: -0.05, y: 0.05 });

}

function replace() {
  Body.setPosition(ball.body, { x: width/2 + 80, y: height/2 - 80});
}
