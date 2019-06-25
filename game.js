class Game {
    constructor(w, h) {
        this.gameWidth = w;
        this.gameHeight = h;
    }

    start() {
        this.snoo = new Snoo(gameWidth, gameHeight);
        new InputHandler(this.snoo);

        this.gameObjects = [
            snoo
        ]
    }

    update(dt) {
        this.gameObjects.forEach((object) => {
            object.update(dt);
        });
    }

    draw(ctx) {
        this.gameObjects.forEach((object) => {
            object.draw(ctx);
        });

    }
}