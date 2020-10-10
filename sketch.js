function setup() {
  createCanvas(800,400);
 movingrect =  createSprite(200, 400, 50, 50);  
 movingrect.debug = true; 
stillrect = createSprite(200,100,40,40) 
stillrect.debug = true;
//movingrect.velocityY = -5; 
//stillrect.velocityY = 5;  
test1 = createSprite(400,200,50,50) 
test2 = createSprite(100,200,40,40) 
test1.velocityX = -4; 
test2.velocityX = 4;
}

function draw() {
  background("black");   
 // movingrect.x = mouseX 
  //movingrect.y = mouseY 

Bounce(test1,test2)

 
  drawSprites(); 
  
} 
