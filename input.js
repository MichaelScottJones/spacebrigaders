// export default class InputHandler {
class InputHandler {
    constructor(snoo) {
        this.snoo = snoo;
        document.addEventListener("keydown", e => {
            switch(e.keyCode) {
                case 37:        // left
                case 65:
                    this.snoo.moveLeft();
                    break;
                case 39:        // right
                case 68:
                    this.snoo.moveRight();
                    break;
                case 32:        // shoot
                    this.snoo.shoot();
                    break;
            }
        });
        document.addEventListener("keyup", e => {
            switch(e.keyCode) {
                case 37:        // left
                case 65:
                    if (this.snoo.speed < 0) this.snoo.stop();
                    break;
                case 39:        // right
                case 68:
                    if (this.snoo.speed > 0) this.snoo.stop();
                    break;
            }
        });
    }

}