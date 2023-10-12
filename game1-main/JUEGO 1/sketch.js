
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var Pocoyo,Pocoyo_colisionado;
var backgroundImg, background,gameOverImg
var gameOver, restart;
var bads;



function preload(){
    backgroundImg = loadImage("SKY.png")
Pocoyo_volando = loadImage("plane.png")
Pocoyo_colisionado= loadImage("dead.png");
gameOverImg = loadImage("gameover.png")

badsimg = loadImage("bads.png");
}
function setup() {
    createCanvas(600,600);
    Pocoyo = createSprite(100,500,20,50);
  
  
    Pocoyo.addImage("running", Pocoyo_volando);
    Pocoyo.addImage("collided", Pocoyo_colisionado);
    
Pocoyo.scale=0.2   

background = createSprite(300,300)
background.addImage("fondo",backgroundImg);
background.velocityY = 5;

gameOver = createSprite(650,150);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.8;
gameOver.visible = false;  


}

function draw() {
    
    
    Pocoyo.depth=Pocoyo.depth +1;
    Pocoyo.setCollider("rectangle",0,0,40,40);
    spawnPlanes()
    if(gameState===PLAY){
        console.log(background.y)
        if(background.y > 350 ){
            background.y = width/2;
            gameOver.visible = false;
        }

            if(keyDown("left_arrow")){
                Pocoyo.x =Pocoyo.x -3;
        
              
            }
            if(keyDown("right_arow")){
          
                Pocoyo.x = Pocoyo.x + 3;
                }
            if(keyDown("space")){
          
                 Pocoyo.velocityY = -5;
            }
                Pocoyo.velocityY = Pocoyo.velocityY + 0.8;
                /*
                if(bads.isTouching(Pocoyo)){
                    Pocoyo.destroy()
                    gameState = END
                    }
                    */
              
                    
    }

    if(gameState===END){
        gameOver.visible=true
    }
    drawSprites();
}

    function spawnPlanes (){
    if (frameCount % 50 === 0) {
        var bads= createSprite(200, 100);
        bads.addImage(badsimg);
        //te falta crear un grupo de naves y agregar a ese grupo las naves para que puedas hacer la colision
        //tambien deberias escalar la imagen para que no este muy grande
    }
}
