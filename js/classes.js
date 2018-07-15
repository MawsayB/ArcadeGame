// a generic Entity from which the Player and Enemy classes are built
class Entity {
    constructor() {
        this.sprite = 'images/';
        //location on grid on X and Y axises
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

// the Player is the ladybug that is trying to move to the top of the screen
class Player extends Entity {
    constructor() {
        super();
        this.sprite += 'char-boy.png';
        this.moving = false;
        this.win = false;
    }

    //dt = delta time which is the elapsed
    update(dt) {
        super.update();
        if (this.isOutOfBoundsY && !this.moving && !this.win) {
            alert("You Won! Great job!");
            this.win = true;
            player.y = 5;
            player.x = 2;
            this.win = false;
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

const enemySpeed = [2, 3, 4, 5];
var randomEnemySpeed = enemySpeed[Math.floor(Math.random()*enemySpeed.length)];

// the Enemy class is the beetle that are trying to run into the Player
class Enemy extends Entity {
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
            this.x += dt*randomEnemySpeed;
        }
    }
}

let allEnemies = [];
randomizeEnemies();

// creates a random number of enemies up to 3
// with each enemy at a random speed
function randomizeEnemies() {
    
    for (var i=0; i < 3; i++){
        var x = 0;
        var y = Math.floor((Math.random() * 3) + 1);
        allEnemies.push(new Enemy(x, y));
    }
};