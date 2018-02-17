var Background = function (game) {
	this.ctx = game.ctx;
	this.player = game.player;
	this.game = game;
	this.image = null;
	this.movePixels = 0;
	this.movingBackrounds = 0;
	this.movingBackroundSpeed = 2;
	this.shoudReset = false;
	this.placeGroundeTopPoss = 0;
	this.init = function () {
		this.image = this.game.asset.background;
		var timeSmaller = this.game.can.width / this.image.width;
		this.movingBackrounds = Math.floor(timeSmaller) +  2;
		this.placeGroundeTopPoss = this.game.can.height - this.image.ground.height;
	}

	this.render = function () {
		ctx.fillStyle="#eaf5fa";
		ctx.fillRect(0,0,this.game.can.width,this.game.can.height);
		for (var i = 0; i < this.movingBackrounds; i++) {
			this.ctx.drawImage(this.image.top, this.movePixels + (this.image.width * i), 0);
			this.ctx.drawImage(this.image.ground, this.movePixels + (this.image.width * i), this.placeGroundeTopPoss);

		}
		var widthOffScreen = this.image.width + (this.movingBackroundSpeed * 4);
		if (Math.abs(this.movePixels) > widthOffScreen) {
			this.shoudReset = true;
		}
		
	}
	this.update = function (delta) {
		
		if((delta % this.movingBackroundSpeed) === 0){
			this.movePixels -= 2;
			if(this.shoudReset){
				this.movePixels += this.image.width;
				this.shoudReset = false;
			}
		}
	}
}