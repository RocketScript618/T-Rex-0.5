
var trex ,trex_running;
var ground;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  ground_moves = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
  trex = createSprite(50,160,25,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;

  ground = createSprite(200,175,600,10);
  ground.addImage("grounds",ground_moves);
}

function draw(){
  background("white")
  
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  if(ground.x<0){
    console.log("Working");
    ground.x=ground.width/2;
  }
  trex.velocityY = trex.velocityY+1;
  ground.velocityX = -10;
  trex.collide(ground);
  drawSprites();
}
