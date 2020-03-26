const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;


var engine, world;
var rectan;



function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    log = new Log(200,100,20,80);
    rectan=new Box(200,250,20,20);
    chain = new Chain(log.body,rectan.body);

}

function draw(){
    background(200);
    Engine.update(engine);
text("press space to make the ball move with your mouse",20,30);
text("press escape to release the ball and make it oscillate",20,50);
    log.display();
    chain.display();
    rectan.display();
    if(keyCode===32){
   rectan.body.position.x=mouseX;

   }
   else if(keyCode===27){
       rectan.body.position.x!=mouseX;
rectan.body.velocity.x=5;
   }

}
