var MainMenu = function (game) {
	this.game = game;
	this.show = false;
	this.inited = false;

	this.init = function (){
		this.inited = true;
		//header text
		this.headerText = new Letters(this.game, "Flappy Plane!", 1, {x: 0, y: 100});
		this.headerText.center(this.game.can.width, null);
		//start button
		this.startButton = {};
		this.startButton.asset = this.game.asset.ui["buttonLarge"];
		this.startButton.width = 450;
		this.startButton.edgeWidth = 15;
		this.startButton.loopAmount = 21;
		this.startButton.loopWidth = 20;
		this.startButton.poss = {x: (this.game.can.width - this.startButton.width) / 2, y: 200};
		this.startButton.text = new Letters(this.game, "Start game", 1.5, {x: this.startButton.poss.x, y: this.startButton.poss.y});
		this.startButton.text.center(this.startButton.width, 63);

		// menu box
		this.setting = {};
		this.setting.boxHeight = 470
		this.setting.asset = this.game.asset.ui["buttonLarge"];
		this.setting.poss = {x: this.startButton.poss.x + this.startButton.width - this.setting.asset.width, y: this.setting.boxHeight};
		this.setting.text = new Letters(this.game, "setting", 1.5, {x: this.setting.poss.x, y: this.setting.poss.y});
		this.setting.text.center(this.setting.asset.width, 63);
		// retry box
		/*this.highscore
		this.optionsBtnImage = this.game.asset.ui["buttonLarge"];
		this.optionsBtnStartPos = {x: startButton.poss.x, y: this.boxHeight};
		this.lettersRetry = new Letters(this.game, "Highscore", 1.5, {x: this.optionsBtnStartPos.x, y: this.optionsBtnStartPos.y});
		this.lettersRetry.center(this.optionsBtnImage.width, 63);
*/
		/*this.game.click.add(this.game.sharedValues.screenList.mainMenu, [this.optionsBtnStartPos.x, this.optionsBtnStartPos.y, this.optionsBtnImage.width, this.optionsBtnImage.height], function(){
			console.log("click inde i!");
			this.game.reset();
		}.bind(this));*/
	}
	this.render = function (){
		if(this.show && this.inited){
			//header test
			this.headerText.render();
			//start button 

			// top part
			this.game.ctx.drawImage(this.startButton.asset, 0, 0,this.startButton.edgeWidth, this.startButton.asset.height, this.startButton.poss.x, this.startButton.poss.y, this.startButton.edgeWidth, this.startButton.asset.height);
			// middle part
			for (var i = 0; i < this.startButton.loopAmount; i++) {
				this.game.ctx.drawImage(
					this.startButton.asset, 

					this.startButton.edgeWidth, 
					0, 
					this.startButton.loopWidth, 
					this.startButton.asset.height, 

					this.startButton.poss.x + this.startButton.edgeWidth + (this.startButton.loopWidth * i), 
					this.startButton.poss.y, 
					this.startButton.loopWidth, 
					this.startButton.asset.height
				);
			}
			//bottom part
			this.game.ctx.drawImage(this.startButton.asset, this.startButton.asset.width - this.startButton.edgeWidth, 0, this.startButton.edgeWidth, this.startButton.asset.height, this.startButton.poss.x + (this.startButton.width - this.startButton.edgeWidth), this.startButton.poss.y, this.startButton.edgeWidth, this.startButton.asset.height);
			//start text
			this.startButton.text.render();
			
			//settings 
			this.game.ctx.drawImage(this.setting.asset, this.setting.poss.x, this.setting.poss.y);
			this.setting.text.render();
		}
	}
	this.update = function (delta) {
		// body...
	}
	this.showScreen = function () {
		this.show = true;
	}
	this.click = function(x,y){
		
	}
}