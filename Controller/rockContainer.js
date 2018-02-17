var RockContainer = function (game) {
	this.game = game;
	this.image = {};
	this.ctx = game.ctx;
	this.topParts = ["rockDown", "rockGrassDown", "rockIceDown", "rockSnowDown"];
	this.bottomParts = ["rock", "rockGrass", "rockIce", "rockSnow"];
	this.lastaddetRock = 0;
	this.rocks = [];

	this.init = function () {
		for (var i = 0; i < this.topParts.length; i++) {
			this.image[this.topParts[i]] = this.game.asset[this.topParts[i]];
		}
		for (var i = 0; i < this.bottomParts.length; i++) {
			this.image[this.bottomParts[i]] = this.game.asset[this.bottomParts[i]];
		}
	}

	this.render = function () {
		for (var i = 0; i < this.rocks.length; i++) {
			this.rocks[i].render();
		}
	}
	this.update = function (delta) {
		if(this.lastaddetRock + 100 < delta){
			this.addRock();
			this.lastaddetRock = delta;
		}

		for (var i = this.rocks.length - 1; i >= 0; i--) {
			this.rocks[i].update(delta);
			if(this.rocks[i].outOfBounce()){
				this.rocks.splice(i, 1);
			}
		}
	}
	this.addRock = function () {
		var part = Math.floor((Math.random() * this.topParts.length));
		var rock = new Rock(this.game, this.image[this.topParts[part]], this.image[this.bottomParts[part]]);
		this.rocks.push(rock);
		console.log(this.rocks.length);
	}
}