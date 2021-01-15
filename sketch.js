const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world,particles;

function preload() {
    
}
function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;



    for(var i= 10;i<1150;i=i+100){
ground= new Ground(1100,1200,3000,10)


plin=new Plinoko(i,550,20)
divider=new Divider(i,1020,10,350)
plin2=new Plinoko(i,650,20)
plin3=new Plinoko(i,455,20)
plin4=new Plinoko(i,330,20)



    }


}

function draw(){
    background(500);
    Engine.update(engine);
    if(frameCount%60===0){
        particles=new Particle(random(width/2-10,width/2+10),9,9)
        particles.display()
       }
  
       ground.display()


plin.display()
divider.display()
plin2.display()
plin3.display()
plin4.display()













}