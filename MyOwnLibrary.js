function bounceOff(){

    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  }
  
  function isTouching(obj1,obj2){
    if(obj1.x - obj2.x < obj1.width/2+  obj2.width/2
      && obj2.x - obj1.x < obj1.width/2 + obj2.width/2
       && obj1.y - obj2.y < obj1.height/2 + obj2.height/2
       && obj2.y - obj1.y < obj1.height/2 + obj2.height/2){
    return true;
    }
    else{
      return false;
    }
}