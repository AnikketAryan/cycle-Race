var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var pinkcyImg;
var pinkcyImg2;
var yellowImg;
var yellowImg2;
var redImg;
var redImg2;
var bell;

var yellowcyclist;
var pinkcyclist;
var redcyclist;
var pinkgrp,yellowgrp,redgrp;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");

pinkcyImg=loadAnimation("images/opponent1.png","images/opponent2.png");
pinkcyImg2=loadAnimation("images/opponent3.png")
  
  yellowImg=loadAnimation("images/opponent4.png","images/opponent5.png");
yellowImg2=loadAnimation("images/opponent6.png")
  
  redImg=loadAnimation("images/opponent7.png","images/opponent8.png");
redImg2=loadAnimation("images/opponent9.png")
  
  bell=loadSound("sound/bell.mp3")
  
}
function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
  pinkgrp=new Group();
  yellowgrp=new Group();
  redgrp=new Group();
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
    distance=distance+Math.round(getFrameRate()/50);
    
    if(keyDown("space")){
      bell.play();
    }
    
   mainCyclist.y = World.mouseY;
    pinkCyclist();
   redCyclist();
    yellowCyclist();
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/1;
  }
    if(mainCyclist.isTouching(pinkgrp)){
      path.velocityX=0;
      mainCyclist.velocityY=0;
  
 mainCyclist.addAnimation("SahilRunning",mainRacerImg2);
pinkcyclist.addAnimation("opp1",pinkcyImg2);
      gameState=END;
  }
    
    if(mainCyclist.isTouching(yellowgrp)){
      path.velocityX=0;
      mainCyclist.velocityY=0;
  
 mainCyclist.addAnimation("SahilRunning",mainRacerImg2);
yellowcyclist.addAnimation("opp6",yellowImg2);
      gameState=END;
  }
    
    if(mainCyclist.isTouching(redgrp)){
      path.velocityX=0;
      mainCyclist.velocityY=0;
      
  
 mainCyclist.addAnimation("SahilRunning",mainRacerImg2);
      redcyclist.addAnimation("opp4",redImg2);
gameState=END;
  }
  } 
  if (gameState===END){
    pinkgrp.setVelocityXEach(0);
    pinkgrp.setLifetimeEach(-1);
    redgrp.setVelocityXEach(0);
    redgrp.setLifetimeEach(-1);
    yellowgrp.setVelocityXEach(0);
    yellowgrp.setLifetimeEach(-1);
    fill("yellow");
  textSize(30);
  text("GAMEOVER",220,150)
  
  }
 
}

function pinkCyclist(){
  if(frameCount%100===0){
    
  
  pinkcyclist=createSprite(450,100,50,50);
  pinkcyclist.y=Math.round(random(80,250));
  pinkcyclist.addAnimation("opp1",pinkcyImg);
  pinkcyclist.velocityX=-5;
    pinkcyclist.scale=0.07;
    pinkcyclist.lifetime=100;
  pinkgrp.add(pinkcyclist); 
  }
}

function redCyclist(){
  if(frameCount%200===0){
    
  
  redcyclist=createSprite(450,100,50,50);
  redcyclist.y=Math.round(random(100,250));
  redcyclist.addAnimation("opp4",redImg);
 redcyclist.velocityX=-5;
    redcyclist.scale=0.07;
    redcyclist.lifetime=100;
    redgrp.add(redcyclist);
    
  }
}

function yellowCyclist(){
  if(frameCount%300===0){
    
  
  yellowcyclist=createSprite(450,100,50,50);
 yellowcyclist.y=Math.round(random(100,250));
  yellowcyclist.addAnimation("opp6",yellowImg);
 yellowcyclist.velocityX=-5;
    yellowcyclist.scale=0.07;
   yellowcyclist.lifetime=100;
  yellowgrp.add(yellowcyclist);
  }


}

