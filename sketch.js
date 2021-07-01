var ball;
var ballx = 300;
var bally = 300;
var ballSize=40;
var score=0;
var gameState = "L1";
var cute;
function preload(){
  cute = loadImage("cute.jpg");
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(30);
   var button = createButton("reset");
  button.mousePressed(resetS);
}

function draw() {
  background(100);
  //ball.addImage(cute);
  if(gameState=="L1"){
  Levelone();
  }
  if(gameState=="L2"){
     Leveltwo();
     }
  if(gameState=="L3"){
     Levelthree();
     }
  text(("Score: "+score),width/2,40)
}//end of draw
function Levelone(){
  background(226,128,16);
  text("Level 1",width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall<ballSize){
     ballx=random(width);
     bally=random(height);
     score = score + 1;
     }
  if(score>5){
   gameState="L2"
  }
  
  line(ballx,bally,mouseX,mouseY);
  ellipse(ballx,bally,ballSize,ballSize);
 // ball.addImage(cute);
}//end of level 1

function Leveltwo(){
  background(100,250,0);
  text("Level 2!!",width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall<ballSize){
     ballx=random(width);
     bally=random(height);
     score = score + 1;
     }
  if(score>10){
   gameState="L3"
  }
  
  //line(ballx,bally,mouseX,mouseY);
  ellipse(ballx,bally,ballSize,ballSize);
}//end of level 2

function Levelthree(){
  background(134,146,253);
  text("Level 3!!!",width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall<ballSize){
     ballx=random(width);
     bally=random(height);
     score = score + 1;
     ballSize=ballSize - 4;
     }
  if(score>20){
   background(random(150));
    text("Game Over!!!",300,280);
  }
  
  //line(ballx,bally,mouseX,mouseY);
  ellipse(ballx,bally,ballSize,ballSize);
}//end of level 3
function resetS(){
  gameState="L1";
  score=0;
  ballSize=40;
  ballx = 300;
  bally = 300;
}//Game reset 