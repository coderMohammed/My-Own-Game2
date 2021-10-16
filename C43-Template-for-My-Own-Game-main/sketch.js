var boyImage,boy;
var treasure,treasureImage;
var bullet,bulletImage;
var bg,bgImg;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8;

function preload(){
  boyImage = loadImage("Running.gif");
  treasureImage = loadImage("unnamed (1).png");
  bulletImage = loadImage("bullet.png");
  bgImg = loadImage("L1.gif");
}

function setup() {
  createCanvas(600,600);
  boy = createSprite(80,550);
  boy.addImage("run",boyImage);
  boy.scale = 0.3;

  treasure = createSprite(550,445);
  treasure.addImage("levelComplete",treasureImage);
  treasure.scale = 0.2;

  bullet = createSprite(boy.x,boy.y );
  bullet.addImage("shoot",bulletImage);
  bullet.scale = 0.1;
  bullet.visible = false;

  wall1 = createSprite(20,20,20,1160);

  wall2 = createSprite(280,10,20,500);
  wall2.rotation = 90;

  wall3 = createSprite(130,400,20,460);

  wall4 = createSprite(245,160,20,250);
  wall4.rotation = 90;

  wall5 = createSprite(380,325,20,350);

  wall6 = createSprite(525,490,20,305);
  wall6.rotation = 90;

  wall7 = createSprite(540,176,20,350);

  wall8 = createSprite(590,341,20,80);
  wall8.rotation = 90;
}

function draw() 
{ 
background("green");

boy.velocityX = 0;
boy.velocityY = 0;

if(keyDown(UP_ARROW)){
  boy.velocityY = -15;
}

if(keyDown(DOWN_ARROW)){
  boy.velocityY = 15;
}

if(keyDown(LEFT_ARROW)){
  boy.velocityX = -15;
}

if(keyDown(RIGHT_ARROW)){
  boy.velocityX = 15;
}

if(keyDown("space")){
  bullet.velocityX = 4;
  bullet.visible = true;
}

if(boy.collide(treasure)){
  boy.velocityX = 0;
  boy.velocityY = 0;
  treasure.destroy();
  boy.destroy();
  bg = createSprite(310,250);
  bg.addImage("newLevel",bgImg);
  bg.scale = 0.78;  
}

drawSprites();

}

