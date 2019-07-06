class Game {
    constructor(w, h, snoo) {
        this.gameWidth = w;
        this.gameHeight = h;
        this.level = 1;
        this.statsCtx = document.getElementById("statsScreen").getContext("2d");
        this.paused = false;
        this.ctx = document.getElementById("gameScreen").getContext("2d");
        this.gameOver = false;
        this.snoo = new Snoo(this);
    }

    start() {
        this.gameOver = false;
        this.snoo.votes = [];
        this.trolls = new Trolls(this, 50);
        new InputHandler(this);
        this.snoo.publishLives();

        this.gameObjects = [
            this.snoo,
            this.trolls
        ]
    }

    update(dt) {
        if (this.paused) {
            this.writeState("PAUSED");
            return;
        }
        if (this.gameOver) {
            if (this.snoo.lives <= 0) {
                this.writeState("GAME OVER");
                return;
            }
            if (this.trolls.trolls.length == 0) {
                this.writeState("LEVEL COMPLETE");
            }
        }
        
        this.gameObjects.forEach(object => {
            object.update(dt);
        });
    }

    draw() {
        this.gameObjects.forEach(object => {
            object.draw(this.ctx);
        });
    }

    writeState(text) {
        this.ctx.font = "48px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText(text, this.gameWidth/2, this.gameHeight/2);
        // this.ctx.strokeText(text, this.gameWidth/2, this.gameHeight/2);
    }

    startNextLevel() {
        if (this.gameOver && this.snoo.lives > 0) {
            this.level += 1;
            this.gameOver = false;
            this.start();
        }
    }

    startNewGame() {
        this.snoo = new Snoo(this);
        this.level = 1;
        this.start();
    }
    
}