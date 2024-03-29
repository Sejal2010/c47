var rocketImg,rockImg,spaceImg;
var rocket,rock,space;
var sticks1,sticks2;

function preload(){
rocketImg=loadImage("./images coding/rocket.png");
rockImg=loadImage("./images coding/rock.png");
spaceImg=loadImage("./images coding/space.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  space=createSprite(windowWidth-700, windowHeight, windowWidth*2, 100000);
  space.addImage(spaceImg);
  
  rocket=createSprite(windowWidth/2, windowHeight/2, 50, 50);
  rocket.addImage(rocketImg);
  rocket.scale=0.5;

  sticks1=createSprite(50,100,10,900);
  sticks1.visible=false;
  sticks2=createSprite(1285,100,10,900);
  sticks2.visible=false;
}

function draw() {
  background("black");  
  
  asteroids();
  if(space.y>1000){
    space.y=0
  }

 if(rocket.collide(sticks1)){
rocket.x=rocket.x+0
  }
  if(rocket.collide(sticks2)){
    rocket.x=rocket.x+0
      }
      drawSprites();
}
function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    rocket.x=rocket.x+10
  }
  if(keyCode === LEFT_ARROW){
    rocket.x=rocket.x-10
  }
  
}
function mouseClicked(){
    space.velocityY=2;
}

function asteroids(){
if(frameCount%100===0){
  rock = createSprite(Math.round(random(50,1270)),0);
  rock.addImage(rockImg);
}
}