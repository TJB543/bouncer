var player;
var world;
var world2;
var world3;
function setup() {
    createCanvas(1000, 600);
    player = new Player();
    world = new World();
    world2 = new World2();
    world3 = new World3();

}

function Keypressed_Walking() {
    if(keyIsPressed && keyCode === LEFT_ARROW) {
        player.xdir = -2.5;
    } else if (keyIsPressed && keyCode === RIGHT_ARROW) {
        player.xdir = 2.5;
    } else {
        player.xdir = 0;
    }
}

function On_Platform() {
    if(player.y > world.y-(world.h*world.h) && player.y < world.y &&player.x > world.x-20 && player.x <world.x+world.w) {
        player.y=world.y-(world.h*world.h);
        player.v = 0;
        player.ydir = 0;
    } else if (player.y > world2.y-(world2.h*world2.h) && player.y < world2.y &&player.x > world2.x-20 && player.x <world2.x+world2.w){
        player.y=world2.y-(world2.h*world2.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world2.s;
    } else if (player.y > world3.y-(world3.h*world3.h) && player.y < world3.y &&player.x > world3.x-20 && player.x <world3.x+world3.w){
        player.y=world3.y-(world3.h*world3.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world3.s;
    }
}
function Keypressed_Jumping() {
    if (keyIsPressed && keyCode === UP_ARROW){
        player.ydir = -7.5;
    } else if (keyIsPressed && keyCode === DOWN_ARROW) {
        player.ydir = 25;
    }
}

function draw() {
    background(0);
    Keypressed_Walking();
    Keypressed_Jumping();
    player.update();
    player.show();
    world.show();
    world2.show();
    world2.update();
    world3.show();
    world3.update();
    On_Platform();
}