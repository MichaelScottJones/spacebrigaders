class Upvote {
    constructor(x, y) {
        this.img = document.getElementById("upvote");
        this.width = 30;
        this.height = 30;
        this.position = {
            x: x,
            y: y
        };
        this.speed = 3;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.position.y -= this.speed;
        // check collision with top
        return this.position.y < 0 - this.height ? null : this;
    }
}