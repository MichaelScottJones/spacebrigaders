class Trolls {
    constructor(game, numTrolls) {
        this.numTrolls = numTrolls;
        this.game = game;
        this.trolls = [];
        this.votes = [];
        this.shouldChangeDirection = false;
        
        let tpr = (this.game.gameWidth / 50) - 3;
        let rows = Math.ceil(numTrolls / tpr);

        for (let i=0; i<rows; i++) {
            let x = 10;
            for (let j=0; j<tpr; j++) {
                let y = 10 + (i * 50);
                this.trolls.push(new Troll(x, y, this.game));
                x += 50;
            }
        }
    }

    changeDirection() {
        this.trolls.forEach(troll => {
            troll.speed *= -1;
            troll.position.y += (troll.height + 10) / 3;
        });
    }

    update(dt) {
        let newTrolls = [];
        while(this.trolls.length > 0) {
            let t = this.trolls.pop();
            let vote = t.shoot();
            if (vote) {
                this.votes.push(new Downvote(t.position.x, t.position.y, this.game.gameHeight));
            }
            let nt = t.update(dt);
            if (nt) {
                newTrolls.push(nt);
            } else {
            }
        }
        this.trolls = newTrolls;

        let newVotes = [];
        while(this.votes.length > 0) {
            let v = this.votes.pop();
            let nv = v.update();
            if (nv) {
                newVotes.push(nv);
            }
        }
        this.votes = newVotes;
        if (this.shouldChangeDirection) {
            this.changeDirection();
            this.shouldChangeDirection = false;
        }
    }

    draw(ctx) {
        this.trolls.forEach(troll => {
            troll.draw(ctx);
        });
        this.votes.forEach(vote => {
            vote.draw(ctx);
        });
    }
}