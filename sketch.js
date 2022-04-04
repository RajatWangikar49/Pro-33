var snowImage;
var boy1, boy1Image;
var snow1, snow1Image;

function preload(){

	snowImage = loadImage("snow1.jpg");
	boy1Image = loadImage("boy1.jpg");
	snow1Image = loadImage("snow4.webp");

}

function setup() {

  createCanvas(800,400);

  boy1 = createSprite(500, 200);
  boy1.addImage(boy1Image);
  boy1.scale = 0.2;
  
}

function draw() {

  background(snowImage);

  drawSprites();
  snow();

}

function snow(){

	if (frameCount % 2 === 0){
		var snow1 = createSprite(50, 50);
		snow1.addImage(snow1Image);
		snow1.scale = 0.05;
		snow1.velocityY = 7;
		snow1.x = (random(10, 800));
	}
}