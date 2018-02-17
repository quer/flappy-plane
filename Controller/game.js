var can = document.getElementById('game');
var	ctx = can.getContext('2d');

var Game = function (can, ctx) {
	this.started = true;
	this.asset = {};
	this.ctx = ctx;
	this.can = can;
	this.player = new Player(this);
	this.background = new Background(this);
	this.rockContainer = new RockContainer(this);
	this.isInited = false;
	this.debug = true;

	this.render = function () {
		var start = Date.now();
        ctx.fillStyle="black";
		ctx.save();
        ctx.translate(0, 0);
        // clear the viewport
        ctx.clearRect(0, 0, can.width, can.height);
        if(this.isInited){
			this.background.render();
			this.player.render();
			this.rockContainer.render();
		}

		ctx.restore();

        var end = Date.now();
        ctx.font = '16px sans-serif'
        ctx.textAlign = 'center';
        ctx.fillText('Rendered in ' + (end - start) + ' ms', can.width / 2, can.height - 20);
	
	}
	this.update = function (delta) {
		this.background.update(delta);
		this.player.update(delta);
		this.rockContainer.update(delta);
	}
	this.init = function () {
		new Init(this, function (status) {
			if(status){
				this.background.init();
				this.player.init();
				this.rockContainer.init();
				this.isInited = true;
			}
		}.bind(this));
	}
	this.gameOver = function () {
		gameStopGame();
	}
}
var game = new Game(can, ctx);
game.init();

var fps = 1000 / 30 ;
var delta = 0;
var mainloop = function() {
	delta++;
	
	game.update(delta);
	game.render();
	
	
};
var gameLoop = setInterval( mainloop, fps);
function gameStopGame () {
	clearInterval(gameLoop);
}

window.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37:  
            game.player.move.left = true;
            break;
        case 39:
            game.player.move.right = true;
            break;
        case 38:  
            game.player.move.up = true;
            break;
        case 40:
            game.player.move.down = true;
            break;
    }
}, false);
window.addEventListener('keyup', function(e) {
    switch (e.keyCode) {
        case 37:  
            game.player.move.left = false;
            break;
        case 39:
            game.player.move.right = false;
            break;
        case 38:  
            game.player.move.up = false;
            break;
        case 40:
            game.player.move.down = false;
            break;
    }
}, false);