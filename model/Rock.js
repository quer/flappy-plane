var Rock = function (game, imageTop, imageBottom) {
	this.ctx = ctx;
	this.game = game;
	this.imageTop = imageTop;
	this.imageBottom = imageBottom;
	this.x = ((this.game.ground.movingBackrounds) * this.game.ground.imageWidth) - this.imageTop.width;
	this.topY = 0;
	this.bottomY = 0;

	this.topPartHeight = 0;
	this.bottomPartHeight = 0;

	this.init = function(){
		var gab = this.game.player.getCurrentImage().height * 1.5;
		var maxTopPart = Math.floor(this.game.can.height / 3) * 2;
		var minTopPart = Math.floor(this.game.can.height / 4);
		this.topPartHeight = Math.floor((Math.random() * (maxTopPart - minTopPart)) + minTopPart);
		this.bottomPartHeight = this.game.can.height - this.topPartHeight - gab;
		this.bottomY = this.game.can.height - this.bottomPartHeight;
	}
	this.render = function () {
		this.ctx.drawImage(this.imageTop, 0,0, this.imageTop.width, this.imageTop.height, this.x, this.topY, this.imageTop.width, this.topPartHeight);
		this.ctx.drawImage(this.imageBottom, 0,0, this.imageBottom.width, this.imageBottom.height, this.x, this.bottomY, this.imageBottom.width, this.bottomPartHeight);

		if(this.game.debug){
			var lines = this.getCords();
			for (var i = 0; i < lines.length; i++) {
				this.game.ctx.beginPath();
				this.game.ctx.moveTo(lines[i][0].x,lines[i][0].y);
				this.game.ctx.lineTo(lines[i][1].x,lines[i][1].y);
				this.game.ctx.stroke();		
			}
		}
	}
	this.update = function (delta) {
		this.x -= this.game.sharedValues.movingSpeed * 2;		
		if(this.collision()){
			this.game.gameOver();
		}
	}
	this.outOfBounce = function () {
		if(this.x + this.imageTop.width < 0){
			return true;
		}
		return false;
	}
	this.collision = function () {
		var lines = this.getCords();
		var playerLine = this.game.player.getCords();
		for (var i = 0; i < playerLine.length; i++) {
			for (var j = 0; j < lines.length; j++) {
				if(this.linesIntersect(playerLine[i][0], playerLine[i][1], lines[j][0], lines[j][1])){
					if(this.game.debug){
						console.log("collision");
					}
					return true;
				}
			}
		}
		return false;
	}
	this.getCords = function () {
		var lineTopRight = {x: this.x, y: this.topY};
		var lineTopLeft = {x: (this.x + this.imageTop.width), y: this.topY};
		var lineTopBottomCenter = {x: (this.x + (this.imageTop.width / 2) + 12), y: this.topY + this.topPartHeight}

		var lineBottomTopCenter = {x: (this.x + (this.imageTop.width / 2)) + 12, y: this.bottomY};
		var lineBottomLeft = {x: this.x, y: this.game.can.height};
		var lineBottomRight = {x: this.x + this.imageBottom.width, y: this.game.can.height};

		return [[lineTopRight, lineTopBottomCenter], [lineTopLeft, lineTopBottomCenter], [lineBottomLeft, lineBottomTopCenter], [lineBottomTopCenter, lineBottomRight]];
	}
	this.linesIntersect = function(a1, a2, a3, a4) {
		var x12 = a1.x - a2.x;
		var x34 = a3.x - a4.x;
		var y12 = a1.y - a2.y;
		var y34 = a3.y - a4.y;
		var c = x12 * y34 - y12 * x34;
		if (c == 0) {
			return false;
		}
		var a = a1.x * a2.y - a1.y * a2.x;
		var b = a3.x * a4.y - a3.y * a4.x;
		var x = (a * x34 - b * x12) / c;
		var y = (a * y34 - b * y12) / c;
		return ((Math.min(a1.x, a2.x) < x && x < Math.max(a1.x, a2.x) &&
			  	Math.min(a3.x, a4.x) < x && x < Math.max(a3.x, a4.x)) ||
				(Math.min(a1.y, a2.y) < y && y < Math.max(a1.y, a2.y) &&
			  	Math.min(a3.y, a4.y) < y && y < Math.max(a3.y, a4.y)));
	}
	this.init();
}