// export default class Troll {
class Troll {
    constructor(x, y, game) {
        this.game = game;
        this.img = document.getElementById("troll");
        this.width = 40;
        this.height = 40;
        this.position = {
            x: x,
            y: y
        };
        this.speed = 0;
        this.maxSpeed = 5;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }

    update() {

    }
}