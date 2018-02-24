var Click = function (game) {
	this.game = game;
	this.handlers = {};
	this.add = function(screen, collision, callback){
		if (!(screen in this.handlers)){
			this.handlers[screen] = [];
		}
		this.handlers[screen].push({
			collision: collision,
			callback, callback
		});
		
	}
	this.click = function(x, y){
		var screenList = this.game.sharedValues.screenList;
		if(this.game.started){
			if(screenList.game in this.handlers){
				for (var i = 0; i < this.handlers[screenList.game].length; i++) {
					var handler = this.handlers[screenList.game][i];
					this.collision(x, y, handler.collision, handler.callback);
				}
			}
		}else{
			var activeMenu = this.game.menuContainer.activeMenu;
			if(activeMenu in this.handlers){
				for (var i = 0; i < this.handlers[activeMenu].length; i++) {
					var handler = this.handlers[activeMenu][i];
					this.collision(x, y, handler.collision, handler.callback);
				}
			}
		}
	}
	this.collision = function (x, y, collisionList, callback) {
		if(collisionList[0] < x &&
			collisionList[0] + collisionList[2] > x &&
			collisionList[1] < y && 
			collisionList[1] + collisionList[3] > y){

			callback();
		}
	}
}