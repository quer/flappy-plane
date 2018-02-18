var MainMenu = function (game) {
	this.game = game;
	this.show = false;
	this.inited = false;
	this.init = function (){
		this.inited = true;
	}
	this.render = function (){
		if(this.show && this.inited){
			var letters = Letters(this.game, "Follow Mukuduk! ;)", 1);
			var startPoss = {x: 100, y: 100};
			var currentWidth = 0;
			for (var i = 0; i < letters.letters.length; i++) {
				var image = letters.letters[i];
				this.game.ctx.drawImage(image, (startPoss.x + currentWidth), startPoss.y);
				currentWidth += image.width + letters.letterGab;
			}
		}
	}
	this.update = function (delta) {
		// body...
	}
	this.showScreen = function () {
		this.show = true;
	}
}