const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;
      startBobpositionx=width/2;
      startBobpositiony=height/4+500;
      bobdiameter=40;
    //base = createSprite(150, 305, 300, 170);

    bob1 = new Bob(startBobpositionx- bobdiameter*2,startBobpositiony,bobdiameter);
    bob2 = new Bob(startBobpositionx- bobdiameter,startBobpositiony,bobdiameter);
    bob3 = new Bob(startBobpositionx, startBobpositiony, bobdiameter);
    bob4 = new Bob(startBobpositionx+bobdiameter, startBobpositiony, bobdiameter);
    bob5 = new Bob(startBobpositionx+bobdiameter*2, startBobpositiony, bobdiameter);
    
    rope1 = new Rope(bob1.body,roof.body,-bobdiameter*2,0);
    rope2 = new Rope(bob2.body,roof.body,-bobdiameter*1,0);
    rope3 = new Rope(bob3.body,roof.body,0,0);
    rope4 = new Rope(bob4.body,roof.body,bobdiameter*1,0);
    rope5 = new Rope(bob5.body,roof.body,bobdiameter*2,0);
    Engine.run(engine);
}
function draw(){
    background("yellow");
    
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display(); 
    rope5.display();
   
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
}





