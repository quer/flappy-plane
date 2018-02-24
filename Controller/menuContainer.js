var MenuContainer = function (game) {
	this.game = game;
	this.show = false;
	this.mainMenu = new MainMenu(game);
	this.pauseScreen = null;
	this.activeMenu = this.game.sharedValues.screenList.mainMenu;
	this.init = function (){
		this.mainMenu.init();
	}
	this.render = function (){
		if(this.show){
			this.mainMenu.render();
		}
	}
	this.update = function (delta) {
		this.mainMenu.update(delta);
	}

	this.showNewMenu = function(menu){
		switch(menu){
			case this.game.sharedValues.screenList.mainMenu:
				this.hideAll();
				this.show = true;
				this.mainMenu.showScreen();
				this.activeMenu = this.game.sharedValues.screenList.mainMenu;
				break;
			case this.game.sharedValues.screenList.pauseScreen:
				this.hideAll();
				this.show = true;
				this.pauseScreen.showScreen(); // is null
				this.activeMenu = this.game.sharedValues.screenList.pauseScreen;
				break;
		}
	}
	this.hideAll = function(){
		this.show = false;
		this.mainMenu.show = false;
	}
	this.click = function(x,y){
		switch(this.activeMenu){
			case this.game.sharedValues.screenList.mainMenu:
				this.mainMenu.click(x,y);
				break;
			case this.game.sharedValues.screenList.pauseScreen:
				this.pauseScreen.click(x,y);
				break;
		}
	}
}
