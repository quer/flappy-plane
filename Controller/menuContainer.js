var MenuContainer = function (game) {
	this.game = game;
	this.show = true;
	this.mainMenu = new MainMenu(game);
	this.pauseScreen = null;
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
			case this.game.sharedValues.menuList.mainMenu:
				this.hideAll();
				this.show = true;
				this.mainMenu.showScreen();
				break;
			case this.game.sharedValues.menuList.pauseScreen:
				this.hideAll();
				this.show = true;
				this.pauseScreen.showScreen(); // is null
				break;
		}
	}
	this.hideAll = function(){
		this.show = false;
		this.mainMenu.show = false;
	}
}