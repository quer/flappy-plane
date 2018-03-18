var GameInterface = function (game) {
	this.game = game;
	this.inited = false;
	this.show = true;
	this.score = true;

	this.init = function () {
		this.inited = true;
		this.score = new Letters(this.game, "score" + this.game.player.score, 2, {x: 10, y: 10});
		this.score.TopOfScreen();
		this.score.RightSideOfScreen();
	}
	this.render = function () {
		if(this.show && this.inited){
			this.score.render();
		}
	}
	this.update = function (delta) {
		this.score.setText("score" + this.game.player.score);
	}
}