// export default class Snoo {
class Snoo {
    constructor(game) {
        this.game = game;
        this.img = document.getElementById("snoo");
        this.lifeImg = document.getElementById("snoo_smile");
        this.width = 40;
        this.height = 40;
        this.position = {
            x: this.game.gameWidth / 2 - this.width / 2,
            y: this.game.gameHeight - this.height - 10
        };
        this.maxSpeed = 5;
        this.speed = 0;
        this.votes = [];
        this.lives = 3;
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
        if (!this.game.paused && !this.game.gameOver) {
            let v = new Upvote(this.position.x, this.position.y);
            this.votes.push(v);
        }
    }

    publishLives() {
        game.statsCtx.clearRect(0, 0, 800, 50);
        document.getElementById("lifeCounter").innerHTML = this.lives;
        if (this.lives >= 3) {
            this.lifeImg = document.getElementById("snoo_smile");
        } else if (this.lives == 2) {
            this.lifeImg = document.getElementById("snoo_surprised");
        } else if (this.lives == 1) {
            this.lifeImg = document.getElementById("snoo_scream");
        } else {
            this.img = document.getElementById("snoo_sad");
            this.game.gameOver = true;
        }
        for (let i=0; i<this.lives; i++) {
            game.statsCtx.drawImage(
                this.lifeImg, (10*(i+1))+(i*this.width),
                5, this.height, this.width
            );
        }
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
                if (!this.game.gameOver) {
                vote.shouldDelete = true;
                this.lives--;
                this.publishLives();
                }
            }
        });
        this.game.trolls.trolls.forEach(troll => {
            if (this.checkCollision(troll)) {
                this.lives--;
                this.publishLives();
            }
        });
    }

    checkCollision(obj) {
        // check if a collision is impossible, invert the result
        let b = 6;   // hitbox buffer
        return !(
            obj.position.y + b > this.position.y + this.height - b      // too low
            || obj.position.y + obj.height - b < this.position.y + b    // too high
            || obj.position.x + b > this.position.x + this.width - b    // too far right
            || obj.position.x + obj.width - 5 < this.position.x + b     // too far left
        );
    }

    reset() {
        this.speed = 0;
        this.votes = [];
        this.lives = 3;
        this.position.x = this.game.gameWidth / 2 - this.width / 2,
        this.img = document.getElementById("snoo");
    }
}