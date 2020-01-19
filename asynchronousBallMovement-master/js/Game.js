class Game{
    constructor(){}
    getState(){
        var gameStateRef = Database.ref('GameState');
        gameStateRef.on("value",function(data){
            GameState = data.val();
        })
    }
    update(state){
       Database.ref('/').update({
           GameState : state
       })
    }
    async start(){
        if(GameState === 0){
            player = new Player();
            var playerCountRef = await Database.ref('PlayerCount').once("value");
            if(playerCountRef.exists()){
                PlayerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car1.addImage(car1Img);
        car2 = createSprite(300,200);
        car2.addImage(car2Img);
        car3 = createSprite(500,200);
        car3.addImage(car3Img)
        car4 = createSprite(700,200);
        car4.addImage(car4Img);
        cars = [car1, car2, car3, car4];
    }
    play(){
        form.hide();
        textSize(30);
        text("Game Start",180,140);
        player.getPlayerInfo();
        if(allPlayers !== undefined){

            var index = 0;

            //x and y position of the cars
            var x = 0;
            var y;

            var display_position = 130;
            for(var plr in allPlayers){

                index = index + 1 ;

                x = x + 200;

                y = displayHeight - allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;

                if (index === player.index){
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y
                }

                var display_position = 180;
                display_position += 20;
                textSize(15);
                text(allPlayers[plr].name + " : " + allPlayers[plr].distance,160,display_position);
        }
        }
    if(keyIsDown(UP_ARROW)&& player.index !== null){
        player.distance +=50
        player.update();
      }

      drawSprites();

    }
}