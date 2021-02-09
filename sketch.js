var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);
	//fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	

	engine = Engine.create();
	world = engine.world;

	//starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	//World.add(world, starBody);
	
	Engine.run(engine);


}


function draw() {
  background(bgImg);
  if (keyDown("left_arrow")){
    fairy.x=fairy.x-3;
  }
  if (keyDown("right_arrow")){
    fairy.x=fairy.x+3;
    

  }
  if (keyDown("space")){
	star.x=star.x-3;
	star.velocityY=3;
    
  }
  


  //star.x= starBody.position.x 
 // star.y= starBody.position.y 

//if(starBody.position.y > 470){

//}

star.display();

  drawSprites();

}