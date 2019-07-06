// export default class InputHandler {
class InputHandler {
    constructor(game) {
        this.game = game;
        let snoo = this.game.snoo;
        document.addEventListener("keypress", e => {
            switch(e.keyCode) {
                case 13:
                case 16:
                    this.game.paused = !this.game.paused;
                    break;
                case 110:
                    this.game.startNextLevel();
                    break;
                case 114:
                    this.game.startNewGame();

            }
        });
        document.addEventListener("keydown", e => {
            switch(e.keyCode) {
                case 37:        // left
                case 65:
                    snoo.moveLeft();
                    break;
                case 39:        // right
                case 68:
                    snoo.moveRight();
                    break;
                case 32:        // shoot
                    snoo.shoot();
                    break;
            }
        });
        document.addEventListener("keyup", e => {
            switch(e.keyCode) {
                case 37:        // left
                case 65:
                    if (snoo.speed < 0) snoo.stop();
                    break;
                case 39:        // right
                case 68:
                    if (snoo.speed > 0) snoo.stop();
                    break;
            }
        });
    }

}