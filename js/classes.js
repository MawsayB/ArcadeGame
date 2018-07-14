class Entity {
    constructor() {
        this.sprite = 'images/';
        this.x = 2;
        this.y = 5;
    }

    update(dt) {
        this.isOutOfBoundsX = this.x > 5;
        this.isOutOfBoundsY = this.y < 1;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x* 101, this.y * 83);
    }

    checkCollisions(playerorEnemy) {
        if (this.y === playerorEnemy.y) {
            if (this.x >= playerorEnemy.x - 0.5 && this.x <= playerorEnemy.x + 0.5) {
                return true;
            }
        }
        else {
            return false;
        }
    }
}

class Player extends Entity {
    constructor() {
        super();
        this.sprite += 'char-boy.png';
        this.moving = false;
        this.win = false;
    }

    update(dt) {
        super.update();
        if (this.isOutOfBoundsY && !this.moving && !this.win) {
            alert("You Won! Great job!");
            this.win = true;
            //create reset function and call it here
        }
    }

    render() {
        super.render();
        this.moving = false;
    }

    //moves Player within board
    handleInput(input) {
        switch (input) {
            case 'left':
                this.x = this.x > 0 ? this.x - 1 : this.x;
                break;
            case 'up':
                this.y = this.y > 0 ? this.y - 1 : this.y;
                break;
            case 'right':
                this.x = this.x < 4 ? this.x + 1 : this.x;
                break;
            case 'down':
                this.y = this.y < 5 ? this.y + 1 : this.y;
                break;
            default:
                break;
        }
        this.moving = true;
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

    update(dt) {
        super.update();
        if(this.isOutOfBoundsX){
            this.x = -1;
        }
        else {
            this.x += dt;
        }
    }
}