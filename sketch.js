var wall, thickness;
var bullet,speed,weight;

function preload(){

  bulletImage = loadImage("cartoonBullet.png");

}

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30, 52)

  bullet=createSprite(50, 200, 50, 20);
  //bullet.addImage(bulletImage);
  //bullet.scale = 0.2;
  //bullet.setCollider('rectangle',0,0,50,20);
  bullet.debug=true;

  fill(80,80,80);
  wall=createSprite(1200,200, thickness, height/2);
  wall.setCollider('rectangle',0,0,wall.width,wall.height);
  wall.debug=true;

  bullet.velocityX = speed;

}

function draw() {
  background(255,255,255);  

  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;

  var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);

  if(damage>10) 
  {
    wall.shapeColor = color(255,0,0);
  }
 
  if(damage<10) 
  {
   wall.shapeColor = color(0,255,0);
  }  
}

hasCollided(bullet, wall);
  
bullet.collide(wall);

  drawSprites();
}

function hasCollided(object1, object2)
{
  bulletRightEdge=object1.x +object1.width;
  wallLeftEdge=object2.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}