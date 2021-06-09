  //variable for storing sprite for monkey
  var monkey , monkey_running

  //variable for storing sprite for bananas
  var banana ,bananaImage,BananaGroup,Food;

  //variable for storing obstacles
  var obstacle, obstaclesImage,ObstacleGroup;

  //variable for storing the sprite for ground
  var ground;

  //variable for storing the sprite for background
  var bg,bgImage;

  //variable for storing score
  var survivalTime;


function preload(){
  
  //loading animation for the money
  monkey_running =   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  //loading image for the bananas
  bananaImage = loadImage("banana.png");

  //loading image for the obstacles
  obstaclesImage = loadImage("obstacle.png");
  
  //loading image for background
  bgImage=loadImage("jungle1.jpg");
  
}


function setup() {

  //creating an canvas
  createCanvas(500,500);
  
  //creating a background
  bg=createSprite(250,155,30,30);
  bg.addImage(bgImage);
  bg.velocityX=-4;
 
  //creating a sprite for monkey
  monkey=createSprite(30,320,30,30);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1; 
  
  //creating a sprite for ground
  ground=createSprite(500,350,900,10);
  ground.velocityX=-5;
  ground.collide(monkey);
  ground.visible=false;
  
  //creating a group for all the obstacles
  obstaclesGroup=createGroup();
  
  //creating a group for all the bananas
  bananaGroup=createGroup();
  
  //survival Time
  survivalTime=0;
}


function draw() {
  
  //giving colour to the background
  background ("white");

    //creating an invisible ground
    if(ground.x<=0){
    ground.x=200;
    }
  
      //making the monkey jump when spaced is pressed
      if(keyDown("space")&&monkey.y>=310){
        monkey.velocityY=-9;
      }
  
        //creating a moving brackground
        if(bg.x<=250){
        bg.x=bg.width/2;
        }
  
  //giving a gravity to monkey
  monkey.velocityY=monkey.velocityY+0.3;
  
  //colliding mon key with the ground
  monkey. collide(ground);
  
  //to spawn bananas
  Food();
  
  //to spawn obstacles
  obstacles();
  
  //making the sprites appear
  drawSprites();
  
  //displaying survial time or score
  stroke=("black");
  textSize=30;
  fill=("pink");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SurvivalTime "+survivalTime,400,40);
}


//for spawning bananas
function Food(){
    
    //creating bananas
    if(frameCount%80==0){
      var banana=createSprite(400,300,20,20);
      banana.y=Math.round(random(130,200));
      banana.addImage(bananaImage);
      banana.velocityX=-3;
      banana.lifetime=180;
      banana.scale=0.1;
      
      //adding all the bananas in a group
      bananaGroup.add(banana);
     }
}


//for spawning obstacles
function obstacles(){

      //creating obstacles
      if(frameCount%300==0){
      var obstacles=createSprite(400,330,20,20);
      obstacles.x=Math.round(random(490,500));
      obstacles.addImage(obstaclesImage);
      obstacles.velocityX=-4 ;
      obstacles.lifetime=180;
      obstacles.scale=0.1;
        
      //adding all the obstacles in a group
      obstaclesGroup.add(obstacles);
      }
}



