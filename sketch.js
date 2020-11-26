var bullet, speed, weight;
var wall, thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 20);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80, 80, 80);

  thickness = random(22, 83)
  speed = random(223, 321);
  weight = random(30, 52); 
}

function draw() {
  background(200, 200, 200);  

  bullet.velocityX = speed;

if(wall.x - bullet.x < (bullet.width+wall.width)/2)
 {
    bullet.x = 1125;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor = "red";
    }
    if(damage<10)
    {
      wall.shapeColor = "green";
    }
 }

  drawSprites();
}