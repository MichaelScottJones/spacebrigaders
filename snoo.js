// export default class Snoo {
class Snoo {
    constructor(game) {
        this.game = game;
        this.img = document.getElementById("snoo");
        this.width = 40;
        this.height = 40;
        this.position = {
            x: this.game.gameWidth / 2 - this.width / 2,
            y: this.game.gameHeight - this.height - 10
        };
        this.maxSpeed = 5;
        this.speed = 0;
        this.votes = [];
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }

    shoot() {
        let v = new Upvote(this.position.x, this.position.y);
        this.votes.push(v);
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
        this.votes.forEach(vote => {
            vote.draw(ctx);
        });
    }

    update(dt) {
        //update position
        this.position.x += this.speed;
        if (this.position.x < 10) {
            this.position.x = 10;
        }
        if (this.position.x + this.width > this.game.gameWidth - 10) {
            this.position.x = this.game.gameWidth - this.width - 10;
        }

        // update upvotes
        let newVotes = [];
        while(this.votes.length > 0) {
            let v = this.votes.pop();
            let nv = v.update();
            if (nv) {
                newVotes.push(nv);
            }
        }
        this.votes = newVotes;

        // check collision
        this.game.trolls.votes.forEach(vote => {
            if (this.checkCollision(vote)) {
                vote.shouldDelete = true;
                this.img = document.getElementById("snoo_sad");
            }
        });
    }

    checkCollision(obj) {
        // check if a collision is impossible, invert the result
        return !(
            obj.position.y > this.position.y + this.height      // too low
            || obj.position.y + obj.height < this.position.y    // too high
            || obj.position.x > this.position.x + this.width    // too far right
            || obj.position.x + obj.width < this.position.x     // too far left
        );
    }
}