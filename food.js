class Food{
    constructor(){
       
    }

    display(){
        if (frameCount % 20 === 0) {
            foods = createSprite(random(100, 1000), 0, 100, 100);
            //foods.velocityY = 6;
            var rand = Math.round(random(1,5));
            switch(rand){
                case 1: foods.addImage("food1",apple);
                break;
                case 2: foods.addImage("food2", orange);
                break;
                case 3: foods.addImage("food3", banana);
                break;
                // case 4: foods.addImage("", );
                // break;
                // case 5: foods.addImage("", );
                // break;
            }
            foodGroup.add(foods);



         //  foodGroup.visible = false;
            
        }
    }

}