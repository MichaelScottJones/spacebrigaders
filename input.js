// export default class InputHandler {
class InputHandler {
    constructor(snoo) {
        this.snoo = snoo;
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