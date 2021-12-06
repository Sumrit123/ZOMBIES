var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bg,bgImg;
var player, shooterImg, shooter_shooting,shooter;
var zombies,heart,zombie_img,bullets,heart_img;
var zombies1,zombies2,zombies3,zombies4,gameState,loseSound;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  shooter=loadImage("assets/shooter_1.png")
  bgImg = loadImage("assets/bg.jpeg")
  zombie_img=loadImage("assets/zombie.png")
  heart_img3=loadImage("assets/heart_3.png")
  heart_img1=loadImage("assets/heart_1.png")
  heart_img2=loadImage("assets/heart_2.png")
  explosionSound=loadSound("assets/explosion.mp3")
  loseSound=loadSound("assets/lose.mp3")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  


//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
   zombies1= createSprite(displayWidth-600,displayHeight-350,20,30);
   zombies1.addImage(zombie_img)
  zombies1.scale=0.15
  zombies1.velocityX=-3;
  zombies2 = createSprite(displayWidth-500,displayHeight-400,20,30);
  zombies2.addImage(zombie_img)
 zombies2.scale=0.15
 zombies2.velocityX=-2;
 zombies3 = createSprite(displayWidth-650,displayHeight-250,20,30);
 zombies3.addImage(zombie_img)
zombies3.scale=0.15
zombies3.velocityX=-8;
zombies4 = createSprite(displayWidth-550,displayHeight-300,20,30);
zombies4.addImage(zombie_img)
zombies4.scale=0.15
zombies4.velocityX=-5;


//heart 
heart=createSprite(displayWidth-200,displayHeight-700,30,9)
heart.addImage(heart_img3)
heart.scale=0.2



}

function draw() {
  background(0); 

 
 
      if(keyDown("UP_ARROW")||touches.length>0){
        player.y = player.y-30
      }
      if(keyDown("DOWN_ARROW")||touches.length>0){
       player.y = player.y+30
      }
      //release bullets and change the image of shooter to shooting position when space is pressed
      if(keyWentDown("space")){
       
        player.addImage(shooter_shooting)
        explosionSound.play()
        zombies1.destroy()
         
      }else if(keyWentUp("space")){
        player.addImage(shooterImg)
      }
      if(keyWentDown("shift")){
       
        player.addImage(shooter_shooting)
        explosionSound.play()
        zombies2.destroy()
         
      }
      if(keyWentDown("enter")){
       
        player.addImage(shooter_shooting)
        explosionSound.play()
        zombies3.destroy()
         
      }
      if(keyWentDown("ctrl")){
       
        player.addImage(shooter_shooting)
        explosionSound.play()
        zombies4.destroy()
         
      }
      if(zombies1.isTouching(player)|| zombies2.isTouching(player)|| zombies3.isTouching(player)||zombies4.isTouching(player)){
       player.destroy()
        heart.addImage(heart_img2)
        loseSound.play()
        gameState="END";
      }
      
      
      
  

  //moving the player up and down and making the game mobile compatible using touches



//player goes back to original standing image once we stop pressing the space bar




//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
       
  player.addImage(shooter_shooting)
  explosionSound.play()
  zombies1.destroy()
  velocityX=0;
   
   
}else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
if(keyWentDown("shift")){
 
  player.addImage(shooter_shooting)
  explosionSound.play()
  zombies2.destroy()
  velocityX=0; 
}
if(keyWentDown("enter")){
 
  player.addImage(shooter_shooting)
  explosionSound.play()
  zombies3.destroy()
  velocityX=0;
}
if(keyWentDown("ctrl")){
 
  player.addImage(shooter_shooting)
  explosionSound.play()
  zombies4.destroy()
  velocityX=0;
}
if(zombies1.isTouching(player)|| zombies2.isTouching(player)|| zombies3.isTouching(player)||zombies4.isTouching(player)){
  player.destroy()
}



drawSprites();

}
function reset(){
  gameState="END"
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(shooterImg)
    player.scale = 0.3 
}


  
