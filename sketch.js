var background1,background1Img
var player, player1Img, player2Img
var zombie, zombieImg


function preload() {
  background1Img = loadImage("spooky-07.jpg")
  player1Img = loadImage("Standing.png")
  player2Img = loadImage("Shooting.png")
  zombieImg = loadImage("Zombie.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  background1 = createSprite(displayWidth/2-50,displayHeight/2-50,200,200)
  background1.addImage(background1Img)
  background1.scale = 0.9 

  player = createSprite(displayWidth/3-20,displayHeight/5+400,50,50)
  player.addImage(player1Img)
  player.scale = 0.5

  player.debug = true
  player.setCollider("rectangle" ,0,0,300,300)
  }


function draw() {
  background(0);
  

  if(keyDown(UP_ARROW)||touches.length > 0){
    player.y = player.y - 30
  }

  if(keyDown(DOWN_ARROW)||touches.length > 0){
    player.y = player.y + 30
  }
  
  if(keyWentDown("space")){
    player.addImage(player2Img)
  }
  spawnZombies()
  drawSprites();
}

function spawnZombies(){
  if(frameCount%60 === 0){
    zombie = createSprite(random(500,1100),random(100,500),50,50)
    zombie.addImage(zombieImg)
    zombie.scale = 0.15 
    zombie.velocityX = -3
  }
}