// import Snoo from "./snoo";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
// images
let imgSnoo = document.getElementById("snoo");
let imgTroll = document.getElementById("troll");
let imgUpvote = document.getElementById("upvote");
let imgDownvote = document.getElementById("downvote");

let snoo = new Snoo(GAME_WIDTH, GAME_HEIGHT);
let input = new InputHandler(snoo);


let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

let lts = 0;
function gameLoop(ts) {
    let dt = ts - lts;
    lts = ts;
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.update(dt);
    game.draw(ctx);
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);