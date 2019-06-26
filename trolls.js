class Trolls {
    constructor(game, numTrolls) {
        this.numTrolls = numTrolls;
        this.game = game;
        this.trolls = [];
        this.votes = [];
        this.masterSpeed = 4;
        
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

    update(dt) {

    }

    draw(ctx) {
        this.trolls.forEach(troll => {
            troll.draw(ctx);
        });
    }
}