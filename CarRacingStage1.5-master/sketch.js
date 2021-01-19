var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var Car1Image,Car2Image,Car3Image,Car4image,groundImage,trackImage
function preload(){
Car1Image=loadImage("images/car1.png")
Car2Image=loadImage("images/car2.png")
Car3Image=loadImage("images/car3.png")
Car4Image=loadImage("images/car4.png")
groundImage=loadImage("images/ground.png")
trackImage=loadImage("images/track.jpg")


}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}



function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end()
  }
}
