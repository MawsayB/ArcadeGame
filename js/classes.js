class Entity {
    constructor() {
        this.sprite = 'images/';
        this.x = 2;
        this.y = 5;
    }

    update() {
        this.isOutOfBoundsX = this.x > 5;
        this.isOutOfBoundsY = this.y < 1;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x* 101, this.y * 83);
    }
}

class Player extends Entity {
    constructor() {
        super();
        this.sprite += 'char-boy.png';
    }
}

class Enemy extends Entity {
    //give a different start point
    constructor(x, y) {
        super();
        this.sprite += 'enemy-bug.png';
        this.x = x;
        this.y = y;
    }
}