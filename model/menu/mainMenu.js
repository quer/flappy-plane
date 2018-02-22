var MainMenu = function (game) {
	this.game = game;
	this.show = false;
	this.inited = false;
	this.init = function (){
		this.inited = true;
	}
	this.render = function (){
		if(this.show && this.inited){
			var letters = Letters(this.game, "Follow Mukuduk!", 1);
			var startPoss = {x: 100, y: 100};
			var currentWidth = 0;
			
			for (var i = 0; i < letters.letters.length; i++) {
				var image = letters.letters[i];				
				this.game.ctx.drawImage(image, (startPoss.x + currentWidth), startPoss.y);
				currentWidth += image.width + letters.letterGab;
			}
			//this.ctx.drawImage(this.imageTop, 0,0, this.imageTop.width, this.imageTop.height, this.x, this.topY, this.imageTop.width, this.topPartHeight);
			var bgImage = this.game.asset.ui["UIbg"];
			var bgWidth = 450;
			var bgHeight = 350;
			var bgStartPos = {x: (this.game.can.width - bgWidth) / 2, y: 200};
			
			this.game.ctx.drawImage(bgImage, bgStartPos.x, bgStartPos.y, bgWidth, bgHeight);

			var startBtnImage = this.game.asset.ui["buttonLarge"];
			var startBtnWidth = 196;
			var startBtnHeight = 70;
			var startBtnMargin = 10;
			var startBtnStartPos = {x: bgStartPos.x + bgWidth - startBtnWidth - startBtnMargin, y: 470};
			
			this.game.ctx.drawImage(startBtnImage, startBtnStartPos.x, startBtnStartPos.y, startBtnWidth, startBtnHeight);

			var optionsBtnImage = this.game.asset.ui["buttonLarge"];
			var optionsBtnWidth = 196;
			var optionsBtnHeight = 70;
			var optionsBtnMargin = 10;
			var optionsBtnStartPos = {x: bgStartPos.x + startBtnMargin, y: 470};
			
			this.game.ctx.drawImage(optionsBtnImage, optionsBtnStartPos.x, optionsBtnStartPos.y, optionsBtnWidth, optionsBtnHeight);

		}
	}
	this.update = function (delta) {
		// body...
	}
	this.showScreen = function () {
		this.show = true;
	}
}