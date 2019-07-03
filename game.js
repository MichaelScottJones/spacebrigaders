class Game {
    constructor(w, h) {
        this.gameWidth = w;
        this.gameHeight = h;
        this.level = 1;
        this.statsCtx = document.getElementById("statsScreen").getContext("2d");
    }

    start() {
        this.snoo = new Snoo(this);
        this.trolls = new Trolls(this, 50);
        new InputHandler(this.snoo);
        this.snoo.publishLives();

        this.gameObjects = [
            this.snoo,
            this.trolls
        ]
    }

    update(dt) {
        this.gameObjects.forEach(object => {
            object.update(dt);
        });
    }

    draw(ctx) {
        this.gameObjects.forEach(object => {
            object.draw(ctx);
        });
    }
}