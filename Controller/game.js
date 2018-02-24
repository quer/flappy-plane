var can = document.getElementById('game');
var	ctx = can.getContext('2d');
var Game = function (can, ctx) {
	this.started = false;
	this.asset = {};
	this.ctx = ctx;
	this.can = can;
	this.sharedValues = SharedValues;
	this.click = new Click(this);
	this.player = new Player(this);
	this.background = new Background(this);
	this.rockContainer = new RockContainer(this);
	this.ground = new Ground(this);
	this.menuContainer = new MenuContainer(this);
	this.isInited = false;
	this.debug = {
		debug: true,
		gameSpeed: {
			faster: false,
			slower: false
		}
	};

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
			this.ground.render();

			this.menuContainer.render();
		}
		ctx.restore();

        var end = Date.now();
        ctx.font = '16px sans-serif'
        ctx.textAlign = 'center';
        ctx.fillText('Rendered in ' + (end - start) + ' ms', can.width / 2, can.height - 20);
	
	}
	this.update = function (delta) {
		if(this.started){
			this.background.update(delta);
			this.player.update(delta);
			this.rockContainer.update(delta);
			this.ground.update(delta);
			if(this.debug.debug){
				if(this.debug.gameSpeed.faster){
					this.sharedValues.movingSpeed += 0.5;
				}
				if(this.debug.gameSpeed.slower){
					if(this.sharedValues.movingSpeed > 1){
						this.sharedValues.movingSpeed -= 0.5;
					}
				}
			}
		}
		this.menuContainer.update(delta);
	}
	this.init = function () {
		new Init(this, function (status) {
			if(status){
				this.background.init();
				this.player.init();
				this.ground.init();
				this.rockContainer.init();
				this.menuContainer.init();
				this.menuContainer.showNewMenu(this.sharedValues.screenList.mainMenu);
				this.isInited = true;
			}
		}.bind(this));
	}
	this.reset = function(){
		this.isInited = false;
		this.player = new Player(this);
		this.background = new Background(this);
		this.rockContainer = new RockContainer(this);
		this.ground = new Ground(this);
		this.menuContainer.hideAll();
		this.started = true;
		this.activeMenu = this.sharedValues.screenList.game;

		this.background.init();
		this.player.init();
		this.ground.init();
		this.rockContainer.init();
		this.isInited = true;
	}
	this.gameOver = function () {
		gameStopGame();
	}
	this.clickEvent = function(x,y){
		this.click.click(x,y);
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
        case 107:
        	game.debug.gameSpeed.faster = true;
        	break;
        case 109:
        	game.debug.gameSpeed.slower = true;
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
        case 107:
        	game.debug.gameSpeed.faster = false;
        	break;
        case 109:
        	game.debug.gameSpeed.slower = false;
        	break;
    }
}, false);

can.addEventListener('click', function(event) { 
    game.clickEvent(event.offsetX || event.layerX, event.offsetY || event.layerY);

}, false);