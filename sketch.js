var canvas, backgroundImage;

var questions;

var question, contestant, quiz;
//var backgroundImg = "bg.jpg"
var sprite1

function preload(){
  backgroundImg = loadImage("bg.jpg")
  backgroundImg2 = loadImage("bg2.jpg")
}

function setup(){
  canvas = createCanvas(850,400);

  sprite1 = createSprite(307, 298, 60, 20)
  sprite1.visible = false

  sprite2 = createSprite(850/2,400/2,850,400)
  sprite2.addImage(backgroundImg2)
  sprite2.scale = 1.355
  sprite2.visible = false

  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("red");

  imageMode(CENTER)
  image(backgroundImg,850/2,400/2,850,400)

  
  if (mousePressedOver(sprite1)) {
  sprite2.visible = true
  }

  drawSprites()
}
