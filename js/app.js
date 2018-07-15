// Instantiates the objects.
// Places all enemy objects in an array called allEnemies
// Places the player object in a variable called player

const player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. 

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
