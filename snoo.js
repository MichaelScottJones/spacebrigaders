// export default class Snoo {
class Snoo {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.img = document.getElementById("snoo");
        this.width = 40;
        this.height = 40;
        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        };
        this.maxSpeed = 5;
        this.speed = 0;
        this.votes = [];
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }

    shoot() {

    }

    draw(ctx) {
        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }

    update(dt) {
        this.position.x += this.speed;
        if (this.position.x < 10) {
            this.position.x = 10;
        }
        if (this.position.x + this.width > this.gameWidth - 10) {
            this.position.x = this.gameWidth - this.width - 10;
        }
    }
}