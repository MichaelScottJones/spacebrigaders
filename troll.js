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
        this.speed = 1;
    }

    shoot() {
        return Math.random() < .001 * this.game.level;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }

    update(dt) {
        let hit = false;
        this.game.snoo.votes.forEach(vote => {
            if (this.checkCollision(vote) && !vote.shouldDelete) {
                hit = true;
                vote.shouldDelete = true;
                this.game.level += .01;
            }
        });
        if (hit) return null;

        this.position.x += this.speed;
        if (this.position.x < 10 || this.position.x > game.gameWidth - 10 - this.width) {
            this.game.trolls.shouldChangeDirection = true;
        }
        return this;
    }

    checkCollision(obj) {
        // check if a collision is impossible, invert the result
        let b = 5;   // hitbox buffer
        return !(
            obj.position.y + b > this.position.y + this.height - b      // too low
            || obj.position.y + obj.height - b < this.position.y + b    // too high
            || obj.position.x + b > this.position.x + this.width - b    // too far right
            || obj.position.x + obj.width - 5 < this.position.x + b     // too far left
        );
    }
}