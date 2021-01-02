//Physics engine (matter.js)

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

//Engine //drives the world
//World //consists of objects which follow the law of nature and led by engine
//Bodies
var box;
var ball, ground;

function setup() {
  createCanvas(800,400);
 
engine=Engine.create(); //your own engine
world=engine.world; //your own world

var box_prop={

isStatic:true

}

var groundProp={

  isStatic:true

}

var ballProp={

restitution:true

}

box=Bodies.rectangle(200,100,50,50,box_prop);
World.add(world,box);


ball=Bodies.circle(350,50,50,ballProp);
World.add(world,ball);
console.log(ball);

ground=Bodies.rectangle(400,390,800,10,groundProp);
World.add(world,ground);

//console.log("Position:",box.position);
//console.log("Box X:",box.position.x)

}

function draw() {
  background("cyan");
  
  Engine.update(engine);


  line(400,0,400,400);
  line(0,200,800,200);

  rectMode(CENTER);
  rect(box.position.x,box.position.y,50,50);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50);

  rect(ground.position.x,ground.position.y,800,10);



  drawSprites();
}