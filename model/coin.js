var Coin = function (game, poss, image, type, scale) {
	this.ctx = ctx;
	this.game = game;
	this.poss = poss;
	this.image = image;
	this.type = type;
	this.scale = scale;

	this.render = function () {
		this.ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.poss.x, this.poss.y, this.image.width / this.scale, this.image.height / this.scale);
	}
	this.update = function (delta) {
		this.poss.x -= this.game.sharedValues.movingSpeed * 2;
	}
}