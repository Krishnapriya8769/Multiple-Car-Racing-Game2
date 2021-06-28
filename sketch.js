var hypotonicball,database;
var position;
function setup(){
    database=firebase.database
    console.log(database)
    createCanvas(500,500);
   hypotonicball = createSprite(250,250,10,10);
    hypotonicball.shapeColor = "red";
    var database=database.ref("ball/position")
    hypotonicballPosition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(position !== undefined){
        if(keyDown(LEFT_ARROW)){
            changePosition(-1,0);
    }
    if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(0,-1);;
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
        drawSprites();
    }}
    
   function changePosition((x,y){
       hypotonicball.x=ball.x + x;
       hypotonicball.y=ball.y + y;
   }
function readPosition(data){
    position=data.val()
    hypotonicball.x=position.x
    hypotonicball.y=position.y
}
function writePosition(x,y){
    database.ref("ball/position").set({
        "x":position.x+y,
        "y":position.y+y
    })
    }
    function showError(){
        console.log("errorInWritingToTheDatabase")
    }