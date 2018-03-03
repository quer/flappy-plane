var MainMenu = function (game) {
	this.game = game;
	this.show = false;
	this.inited = false;
	
	

	this.init = function (){
		this.inited = true;
		// main box
		this.bgImage = this.game.asset.ui["UIbg"];
		this.bgWidth = 450;
		this.bgHeight = 250;
		this.bgStartPos = {x: (this.game.can.width - this.bgWidth) / 2, y: 200};
		// menu box 
		this.startBtnImage = this.game.asset.ui["buttonLarge"];
		this.startBtnStartPos = {x: this.bgStartPos.x + this.bgWidth - this.startBtnImage.width, y: 470};
		this.lettersMenu = new Letters(this.game, "Menu", 1.5, {x: this.startBtnStartPos.x, y: this.startBtnStartPos.y});
		this.lettersMenu.center(this.startBtnImage.width, 63);
		// retry box
		this.optionsBtnImage = this.game.asset.ui["buttonLarge"];
		this.optionsBtnStartPos = {x: this.bgStartPos.x, y: 470};
		this.lettersRetry = new Letters(this.game, "Retry", 1.5, {x: this.optionsBtnStartPos.x, y: this.optionsBtnStartPos.y});
		this.lettersRetry.center(this.optionsBtnImage.width, 63);

		this.game.click.add(this.game.sharedValues.screenList.mainMenu, [this.optionsBtnStartPos.x, this.optionsBtnStartPos.y, this.optionsBtnImage.width, this.optionsBtnImage.height], function(){
			console.log("click inde i!");
			this.game.reset();
		}.bind(this));
	}
	this.render = function (){
		if(this.show && this.inited){
			var letters = new Letters(this.game, "You Dieded!", 1, {x: 0, y: 100});
			letters.center(this.game.can.width, null);
			letters.render();

			
			//this.ctx.drawImage(this.imageTop, 0,0, this.imageTop.width, this.imageTop.height, this.x, this.topY, this.imageTop.width, this.topPartHeight);
			
			
			// top part
			this.game.ctx.drawImage(this.bgImage, 0, 0, 35, 35, this.bgStartPos.x, this.bgStartPos.y, 35, 35);
			
			for (var i = 0; i < 10; i++) {
				this.game.ctx.drawImage(this.bgImage, 35, 0, 38, 35, this.bgStartPos.x + 35 + (i * 38), this.bgStartPos.y, 38, 35);
			}
			this.game.ctx.drawImage(this.bgImage, this.bgImage.width - 35, 0, 35, 35, this.bgStartPos.x + this.bgWidth - 35, this.bgStartPos.y, 35, 35);
			// middel part
			for (var i = 0; i < 5; i++) {
				this.game.ctx.drawImage(this.bgImage, 0, 35, 35, 36, this.bgStartPos.x, this.bgStartPos.y + 35 +( i * 36 ), 35, 36);
			}
			ctx.fillStyle = "#e0d1af";
			ctx.fillRect(this.bgStartPos.x + 35,this.bgStartPos.y + 35,this.bgWidth - 35,this.bgHeight - 35);

			for (var i = 0; i < 5; i++) {
				this.game.ctx.drawImage(this.bgImage, this.bgImage.width - 35, 35, 35, 36, this.bgStartPos.x + this.bgWidth - 35, this.bgStartPos.y + 35 +( i * 36 ), 35, 36);
			}
			//bottom 
			this.game.ctx.drawImage(this.bgImage, 0, this.bgImage.width-35, 35, 35, this.bgStartPos.x, this.bgStartPos.y + this.bgHeight - 35, 35, 35);
			
			for (var i = 0; i < 10; i++) {
				this.game.ctx.drawImage(this.bgImage, 35, this.bgImage.width-35, 38, 35, this.bgStartPos.x + 35 + (i * 38), this.bgStartPos.y + this.bgHeight - 35, 38, 35);
			}
			this.game.ctx.drawImage(this.bgImage, this.bgImage.width - 35, this.bgImage.width-35, 35, 35, this.bgStartPos.x + this.bgWidth - 35, this.bgStartPos.y + this.bgHeight - 35, 35, 35);


			letters = new Letters(this.game, "You Lost!", 1.25, {x: this.bgStartPos.x, y: this.bgStartPos.y+ 30});
			letters.center(this.bgWidth, null);
			letters.render();
			
			letters = new Letters(this.game, this.game.player.score +" poins", 1.25, {x: this.bgStartPos.x, y: this.bgStartPos.y + 130});
			letters.center(this.bgWidth, null);
			letters.render();
			//this.game.ctx.drawImage(this.bgImage, this.bgStartPos.x, this.bgStartPos.y, this.bgWidth, this.bgHeight);

			
			this.game.ctx.drawImage(this.startBtnImage, this.startBtnStartPos.x, this.startBtnStartPos.y);
			this.lettersMenu.render();

			
			this.game.ctx.drawImage(this.optionsBtnImage, this.optionsBtnStartPos.x, this.optionsBtnStartPos.y);
			this.lettersRetry.render();
			
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