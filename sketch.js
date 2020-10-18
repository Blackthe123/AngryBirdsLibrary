
var movingRect, fixedRect;
var obj1, obj2, obj3, obj4;

function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(600, 400, 50, 80);
 fixedRect.shapeColor ="blue";
 fixedRect.debug=true;
 

 movingRect = createSprite(400,200,80,30);
 movingRect.debug=true;
 movingRect.shapeColor = "blue";

 obj1 = createSprite(100, 100, 50, 50);
 obj1.shapeColor="blue";
 obj2 = createSprite(100, 200, 50, 50);
 obj2.shapeColor="blue";
 obj3 = createSprite(100, 300, 50, 50);
 obj3.shapeColor="blue";
 obj4 = createSprite(100, 400, 50, 50);
 obj4.shapeColor="blue";
 fixedRect.velocityY=+5;
 movingRect.velocityY=-5;
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y= World.mouseY;

 //collision
  if(isTouching(movingRect,obj1)){
    movingRect.shapeColor = "red";
   obj1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "blue";
    obj1.shapeColor = "blue";
  }
  bounceOff(movingRect, fixedRect);
    drawSprites();
}



 
