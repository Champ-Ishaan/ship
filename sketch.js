var sea;
var seaImg;
var shipImg1;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadImage("ship-1.png", "ship-2.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400, 400);
  sea.addImage(seaImg);
}

function draw() {
  background("blue");
 
}