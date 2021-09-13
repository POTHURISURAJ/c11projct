var pathImage,boyImage

function preload(){
  //pre-load images
pathImage=loadImage("path.png")
boyImage=loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,200);
path.addImage(pathImage)
path.velocityY-4;
path.scale=1.2;
boy=createSprite(200,200)
boy.addAnimation("jackrunning",boyImage)
boy.scale=0.1
leftBoundary=createSprite(0,0,100,800);
 leftBoundary.visible = false;
 rightBoundary=createSprite(400,0,100,800);
 rightBoundary.visible = false;
}

function draw() {
  background(0)
  path.velocityY=4
  if(path.y > 400 )
  { path.y = height/2; }
boy.x=World.mouseX
boy.collide(leftBoundary)
boy.collide(rightBoundary)
drawSprites()
}
