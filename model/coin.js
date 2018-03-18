var Coin = function (game, poss, image, type, scale) {
	this.ctx = ctx;
	this.game = game;
	this.poss = poss;
	this.image = image;
	this.type = type;
	this.scale = scale;
	this.collision = {
		"polyline":[
                        {
                         "x":0,
                         "y":0
                        }, 
                        {
                         "x":40,
                         "y":-40
                        }, 
                        {
                         "x":74,
                         "y":-40
                        }, 
                        {
                         "x":114,
                         "y":0
                        }, 
                        {
                         "x":114,
                         "y":40
                        }, 
                        {
                         "x":74,
                         "y":74
                        }, 
                        {
                         "x":40,
                         "y":74
                        }, 
                        {
                         "x":0,
                         "y":40
                        }],
        "x":0,
        "y":40
    };
	this.render = function () {
		this.ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.poss.x, this.poss.y, this.image.width / this.scale, this.image.height / this.scale);
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
		this.poss.x -= this.game.sharedValues.movingSpeed * 2;
	}
	this.outOfBounce = function () {
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
	this.add = function () {
		var points = 0;
		switch(this.type){
			case "medalBronze":
				points = 2;
				break;
			case "medalSilver":
				points = 4;
				break;
			case "medalGold":
				points = 8;
				break;
			default:
				console.log("ikke en coin type ? ");
		}
		this.game.player.getPoint(points, this.game.sharedValues.pointsType.coin);
	}
	this.getCords = function () {
		var returnList = [];
		for (var i = 0; i < this.collision.polyline.length - 1; i++) {
			var cords1x = this.poss.x + ((this.collision.polyline[i].x + this.collision.x) / this.scale) ;
			var cords1y = this.poss.y + ((this.collision.polyline[i].y + this.collision.y) / this.scale);


			var cords2x = this.poss.x + ((this.collision.polyline[(i + 1)].x + this.collision.x) / this.scale);
			var cords2y = this.poss.y + ((this.collision.polyline[(i + 1)].y + this.collision.y) / this.scale);
			returnList.push([{x: cords1x, y: cords1y}, {x: cords2x, y: cords2y}]);
		}
		return returnList;
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
}