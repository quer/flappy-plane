var Ground = function (game) {
	this.ctx = game.ctx;
	this.player = game.player;
	this.game = game;
	this.image = {};
	this.imageWidth = 0;
	this.movePixels = 0;
	this.movingBackrounds = 0;
	this.movingBackroundSpeed = 2;
	this.init = function () {
		var themes = this.game.sharedValues.themes;
		for (var i = 0; i < themes.length; i++) {
			this.image[themes[i].ground] = this.game.asset[themes[i].ground];
		}
		this.imageWidth = this.image[themes[0].ground].width;
		var timeSmaller = this.game.can.width / this.imageWidth;
		this.movingBackrounds = Math.floor(timeSmaller) +  2;
		this.game.sharedValues.init(this.movingBackrounds);
	}

	this.render = function () {
		var themes = this.game.sharedValues.historyThemes;
		var startIndex = (themes.length - this.movingBackrounds)
		for (var i = startIndex; i < themes.length; i++) {
			var theme = this.game.sharedValues.getThemeOnIndex(themes[i]);
			var image = this.image[theme.ground];
			this.ctx.drawImage(image, this.movePixels + (image.width * (i - startIndex)), this.game.can.height - image.height);
		}
		var widthOffScreen = this.imageWidth + (this.movingBackroundSpeed * this.game.sharedValues.movingSpeed);
		if (Math.abs(this.movePixels) > widthOffScreen) {
			this.movePixels += this.imageWidth;
			this.game.sharedValues.setNewTheme();
		}
	}
	this.update = function (delta) {
		this.movePixels -= this.movingBackroundSpeed * this.game.sharedValues.movingSpeed;

		if(delta % 225 === 0 && delta > (this.game.sharedValues.movingSpeed * this.movingBackroundSpeed) / this.imageWidth ){
			this.game.sharedValues.movingSpeed += 0.01;		
		}
	}
}