var Rock = function (game, imageTop, imageBottom) {
	this.ctx = ctx;
	this.game = game;
	this.imageTop = imageTop;
	this.imageBottom = imageBottom;
	this.x = this.game.can.width;
	this.topY = 0;
	this.bottomY = this.game.can.height - this.imageBottom.height;

	this.init = function(){
	}
	this.render = function () {

		this.ctx.drawImage(this.imageTop, 0,0, this.imageTop.width, this.imageTop.height, this.x, this.topY, this.imageTop.width, (this.imageTop.height * 1.4));
		this.ctx.drawImage(this.imageBottom, this.x, this.bottomY);
	}
	this.update = function (delta) {
		if(delta % Math.floor(this.game.background.movingBackroundSpeed /2) === 0){
			this.x -= 2; 
		}
	}
	this.outOfBounce = function () {
		if(this.x + this.imageTop.width < 0){
			return true;
		}
		return false;
	}
}