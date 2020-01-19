class Player{
    constructor(){
        this.index = null,
        this.distance = 0,
        this.name = null
    }
    getCount(){
        var PlayerCountRef = Database.ref('PlayerCount');
        PlayerCountRef.on("value",function(data){
            PlayerCount = data.val();
        })
    }
    updateCount(count){
        Database.ref('/').update({
            PlayerCount : count
        });
    }
    update(){
        var PlayerIndex = "players/player"+this.index;
        Database.ref(PlayerIndex).set({
            name : this.name,
            distance :this.distance
        });
    }
    static getPlayerInfo (){
        var playerInfoRef = Database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        });
    }
}