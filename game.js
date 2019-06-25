class Game {
    constructor(w, h) {
        this.gameWidth = w;
        this.gameHeight = h;
    }

    start() {
        this.snoo = new Snoo(this);
        new InputHandler(this.snoo);

        this.gameObjects = [
            this.snoo
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