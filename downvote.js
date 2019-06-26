class Downvote {
    constructor(x, y, gameHeight) {
        this.gameHeight = gameHeight;
        this.img = document.getElementById("downvote");
        this.width = 30;
        this.height = 30;
        this.position = {
            x: x,
            y: y
        };1
        this.speed = -3;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.position.y += this.speed;
        // check collision with bottom
        return this.position.y < 0 - this.gameHeight ? null : this;
    }
}