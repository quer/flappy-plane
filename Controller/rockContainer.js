var RockContainer = function (game) {
	this.game = game;
	this.image = {};
	this.ctx = game.ctx;
	this.lastaddetRock = 0;
	this.LastKnownMovingSpeed = 0;
	this.rocks = [];

	this.init = function () {
		var themes = this.game.sharedValues.themes;
		this.LastKnownMovingSpeed = this.game.sharedValues.movingSpeed;
		for (var i = 0; i < themes.length; i++) {
			this.image[themes[i].rock.top] = this.game.asset[themes[i].rock.top];
			this.image[themes[i].rock.bottom] = this.game.asset[themes[i].rock.bottom];
		}
	}

	this.render = function () {
		for (var i = 0; i < this.rocks.length; i++) {
			this.rocks[i].render();
		}
	}
	this.update = function (delta) {
		if(this.lastaddetRock + (150 / this.LastKnownMovingSpeed) < delta){
			this.addRock();
			this.lastaddetRock = delta;
			this.LastKnownMovingSpeed = this.game.sharedValues.movingSpeed;
		}

		for (var i = this.rocks.length - 1; i >= 0; i--) {
			this.rocks[i].update(delta);
			if(this.rocks[i].outOfBounce()){
				this.rocks.splice(i, 1);
			}
		}
	}
	this.addRock = function () {
		var activeTheme = this.game.sharedValues.getTheme();
		var rock = new Rock(this.game, this.image[activeTheme.rock.top], this.image[activeTheme.rock.bottom]);
		this.rocks.push(rock);
		console.log(this.rocks.length);
		if(this.rocks.length > 1){
			this.game.coinContainer.addCoins(this.rocks[this.rocks.length - 2], this.rocks[this.rocks.length-1]);
		}
	}
}