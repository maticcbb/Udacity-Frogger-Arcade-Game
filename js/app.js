// Enemies our player must avoid
const allEnemies = [];
window.setInterval(function () {
    allEnemies.push(new Enemy(0,Math.random()*550));
    allEnemies.push(new Enemy(0, Math.random() * 550));
    allEnemies.push(new Enemy(0, Math.random() * 550));
}, 2000);

var Enemy = function(x,y) {
     this.y = y;
     this.x = x;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    allEnemies.push(this);
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    
    this.x = this.x + (Math.random() *(15 - 1 + 1)* dt*25);
    this.y = this.y;
    
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

const Player = function (x, y) {
    this.x = x;
    this.y = y;
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
this.sprite = 'images/char-boy.png';

}

Player.prototype.update = function(dt)  {

};

Player.prototype.render = function()  {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(e)  {

};

const player = new Player(50,10);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
