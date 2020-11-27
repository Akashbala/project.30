const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var backgroundImg,platform;
var ball
var ballbody

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ball=createSprite(50,200,20);

  ground1 = new Ground(600,380,250,10)
  ground2 = new Ground(1000,240,200,10)

  ball= Bodies.circle(50,200,200,{restitution:0.6, isStatic:false})
  World.add(world,ball)

  box1 = new Box(510,355,30,40)
  box2 = new Box(540,355,30,40)
  box3 = new Box(570,355,30,40)
  box4 = new Box(600,355,30,40)
  box5 = new Box(630,355,30,40)
  box6 = new Box(660,355,30,40)
  box7 = new Box(690,355,30,40)

  box8 = new Box(540,315,30,40)
  box9 = new Box(570,315,30,40)
  box10 = new Box(600,315,30,40)
  box11 = new Box(630,315,30,40)
  box12 = new Box(660,315,30,40)

  box13 = new Box(570,275,30,40)
  box14 = new Box(600,275,30,40)
  box15 = new Box(630,275,30,40)

  box16 = new Box(600,235,30,40)

  box17 = new Box(940,215,30,40)
  box18 = new Box(970,215,30,40)
  box19 = new Box(1000,215,30,40)
  box20 = new Box(1030,215,30,40)
  box21 = new Box(1060,215,30,40)

  box22 = new Box(970,175,30,40)
  box23 = new Box(1000,175,30,40)
  box24 = new Box(1030,175,30,40)

  box25 = new Box(1000,135,30,40)

  ball1 = new Ball(50,200)
  slingShote = new Slingshot(ball1.body,{x:100,y:200})

}
function draw(){
  background(255);
  Engine.update(engine)


  fill("lightblue")
  box1.desplay()
  box2.desplay()
  box3.desplay()
  box4.desplay()
  box5.desplay()
  box6.desplay()
  box7.desplay()

  fill("pink")
  box8.desplay()
  box9.desplay()
  box10.desplay()
  box11.desplay()
  box12.desplay()

  fill("blue")
  box13.desplay()
  box14.desplay()
  box15.desplay()

  fill("black")
  box16.desplay()

  fill("lightblue")
  box17.desplay()
  box18.desplay()
  box19.desplay()
  box20.desplay()
  box21.desplay()

  fill("pink")
  box22.desplay()
  box23.desplay()
  box24.desplay()

  fill("blue")
  box25.desplay()

  ground1.desplay()
  ground2.desplay()

  slingShote.desplay()

  ball1.display()
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}


function mouseReleased(){
  slingShote.fly()
}
