var chef_img, chef
var fridge, fridge_img
var basket, basket_img
var food1, apple, food2, orange, food3, banana
var recipe, recipe_img
var foodGroup;


function preload(){
  chef_img = loadImage("images/chef.png");
  fridge_img = loadImage("images/fridge.png");
  basket_img = loadImage("images/basket.png");
  apple = loadImage("images/apple.png");
  orange = loadImage("images/orange.png");
  banana = loadImage("images/banana.png");
  recipe_img = loadImage("images/recipe.png");
  foodGroup = new Group();

  
}

function setup() {
  createCanvas(800,400);
  chef = createSprite(400, 200, 50, 50);
  chef.addImage(chef_img)
  chef.scale = 0.3;

  fridge = createSprite(100, 200, 50, 50);
  fridge.addImage(fridge_img);
  fridge.scale = 0.1;

  basket = createSprite(500, 200, 20, 20);
  basket.addImage(basket_img);
  basket.scale = 0.05;
  basket.visible = false;

  food1 = new Food(300, 200, 10, 10);
  food1.scale = 0.02

  food2 = new Food(100, 200, 10, 10);
  food2.scale = 0.09

  food3 = new Food(200, 200, 10, 10);
  food3.scale = 0.04

  

  recipe = createSprite(400, 200, 100, 150);
  recipe.visible = false;
  recipe.addImage(recipe_img);
 
 
}

function draw() {
  background(255, 255, 255);  

 

  if (keyDown("left")){
    chef.velocityX = -3;
  }

  if (keyDown("right")){
    chef.velocityX = 3;
  }

  if (chef.isTouching(fridge)|| chef.x > 450){
    chef.visible = false;
    fridge.visible = false;
    foodGroup.visible = true;
    basket.visible = true;

  }

  /* //add mousePressedOver function here
  if (mousePressedOver(food1)){
    food1.x = 500;
    food1.y = 200;

  }

  if (mousePressedOver(food2)){
    food2.x = 470;
    food2.y = 200;
  }

  if (mousePressedOver(food3)){
    food3.x = 460;
    food3.y = 200;
  }

  if (mousePressedOver(food1 && food2 && food3)){
    food1.visible = false;
    food2.visible = false;
    food3.visible = false;
    basket.visible = false;
    recipe.visible = true;
 
  } */

  // if (mousePressedOver(recipe)){
  //   recipe.x = 50;
  //   recipe.y = 100;

  //   food1.visible = true;
  //   food1.x = 200
  //   food1.y = 100
  //   food2.visible = true;
  //   food2.x = 300
  //   food2.y = 100
  //   food3.visible = true;
  //   food3.x = 400
  //   food3.y = 100

  // }


  //change background after food is selected
  

  //display text of the recipe and click
  

  //chef needs to make the recipe before the bugs/time runs out
  //if the bugs get to the food, lose the game/game is over



  drawSprites();
}