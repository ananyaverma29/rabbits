var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleimg;
var leafimg, leaves,leaf;
var orangeleaves,orangeleaf;
var select_sprites;
function preload()
{
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png");
  leafimg = loadImage("leaf.png");
  orangeleaves = loadImage("orangeLeaf.png");
}

function setup()
{
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw()
 {
  background(0);
  edges= createEdgeSprites();
  rabbit.x= World.mouseX;

  rabbit.collide(edges);
  select_sprites = Math.round(random(1,2));
  
  if(frameCount%70==0)
  {
    if(select_sprites==1)
    {
      createapples();
    }

  else if( select_sprites == 2)
  {

    createleaves();
  }

  else 
  {
    createorangeleaf();
  }
}

  drawSprites();
}

function createapples()
{
apple = createSprite(random(50,350),40,10,10);
apple.addImage("apples",appleimg);
apple.scale = 0.05;
apple.velocityY = 5;
apple.lifetime = 80;

}
function createleaves()
{
  leaves = createSprite(random(50,350),70,10,10);
  leaves.addImage("Leaf",leafimg);
  leaves.scale = 0.1;
  leaves.velocityY = 5;
leaves.lifetime = 80;

}
function createorangeleaf()
{
orangeleaf = createSprite(random(50,350),70,10,10);
orangeleaf.addImage("Leaf",orangeleaves);
orangeleaf.scale = 0.1;
orangeleaf.velocityY = 5;
orangeleaf.lifetime = 80;
}