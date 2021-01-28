//declaring all constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

 //declaring all variables
 var engine,world;
 var particle;
var particles = [];
var plinkos = [];
var divisions = [];
var ground;
var divisionHeight=300;
var score =0;
var count = 0;
var gameState = "play";
function setup() {
  //creating canvas
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

//creating ground
  ground = new Ground(width/2,height,width,20);

//creating division
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

//creating plinkos
    for (var j = 75; j <=width; j = j + 50){ 
    
       plinkos.push(new Plinko(j,75));
    }


    for (var j = 50; j <=width-10; j=j+50) {
    
       plinkos.push(new Plinko(j,175));
    }


     for (var j = 75; j <=width; j=j+50){
    
       plinkos.push(new Plinko(j,275));
    }


     for (var j = 50; j <=width-10; j=j+50){
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  //adding background colour
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
 //updating engine
  Engine.update(engine);
   
  //displaying plinkos
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   //creating particles
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }
 
   //displaying particles
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

   //displaying divisions
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   //displaying ground
   ground.display();
  }
