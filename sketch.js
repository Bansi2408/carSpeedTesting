var thickness,wall;

var speed,width,bullet;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,60,100);
 
  thickness = random(22,83)
  speed = random(223,321)
  widht = random(30,52)

  bullet.velocityX = speed;
}

function draw() {
  background("black");  

  if (hasCollieded(bullet,wall))
  {
   bullet.velocityX=0;
   var damage=0.5 * width * speed * speed/(thickness*thickness*thickness);

   if(damage>10)
   {
     wall.shapeColor="red";
   }

   if(damage<10)
   {
     wall.shapeColor="green";
   }
  }
   
  drawSprites();
}

function hasCollieded(lbullet,lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  
  return false;

}