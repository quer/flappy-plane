var Player = function (game) {
	this.game = game;
	this.image = null;
	this.ctx = game.ctx;
	this.color = "blue";
	this.delta = 0;
	this.x = 100;
	this.y = 100;
	this.collisionPoints = {
                 "polyline":[
                        {
                         "x":0,
                         "y":0
                        }, 
                        {
                         "x":22.75,
                         "y":-14.25
                        }, 
                        {
                         "x":68,
                         "y":-13.75
                        }, 
                        {
                         "x":68.5,
                         "y":4.75
                        }, 
                        {
                         "x":81.75,
                         "y":4.5
                        }, 
                        {
                         "x":81.5,
                         "y":48.75
                        }, 
                        {
                         "x":65.5,
                         "y":49.75
                        }, 
                        {
                         "x":59,
                         "y":57.25
                        }, 
                        {
                         "x":49.25,
                         "y":57.25
                        }, 
                        {
                         "x":19,
                         "y":49
                        }, 
                        {
                         "x":8,
                         "y":17.75
                        }, 
                        {
                         "x":-0.25,
                         "y":15.75
                        }, 
                        {
                         "x":-2.25,
                         "y":4.5
                        }, 
                        {
                         "x":-0.5,
                         "y":0.25
                        }],
                 "x":2.75,
                 "y":15
                };
	this.cycle = ["part1", "part2", "part3", "part2"];
	this.cycleIndex = 0;
	this.move = {
        up: false,
        down: false,
        right: false,
        left: false
    }
    this.movementSpeed = 10;
    this.score = 0;
    this.scoreLog = [];

	this.init = function () {
		this.image = this.game.asset.plane[this.color];
	}
	this.render = function () {
		if(this.game.started){
			this.ctx.drawImage(this.image[this.getPart()], this.x, this.y);
		}
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
		this.delta = delta;
		if(delta % 3 === 0){
			++this.cycleIndex;
			if(this.cycle.length <= this.cycleIndex){
				this.cycleIndex = 0;
			}
		}
		if(this.move.up && this.move(0, -this.movementSpeed)){
			this.y -= this.movementSpeed;
		}else if(this.move.down && this.move(0, this.movementSpeed)){
			this.y += this.movementSpeed;
		}

		if(this.move.right && this.move(this.movementSpeed, 0)){
			this.x += this.movementSpeed;
		}else if(this.move.left && this.move(-this.movementSpeed, 0)){
			this.x -= this.movementSpeed;
		}
		
	}

	this.move = function (x, y) {
		x += this.x;
		y += this.y;
		var gab = this.movementSpeed;
		if(x < gab || x + this.image[this.getPart()].width > this.game.can.width-gab || y < gab || y + this.image[this.getPart()].height > this.game.can.height - gab - 40){
			return false;
		}
		return true;
	}
	this.getPart = function () {
		return this.cycle[this.cycleIndex];
	}
	this.getCurrentImage = function(){
		return this.image[this.getPart()];
	}
	this.getCords = function () {
		var returnList = [];
		for (var i = 0; i < this.collisionPoints.polyline.length - 1; i++) {
			var cords1x = this.x + this.collisionPoints.polyline[i].x + this.collisionPoints.x;
			var cords1y = this.y + this.collisionPoints.polyline[i].y + this.collisionPoints.y;


			var cords2x = this.x + this.collisionPoints.polyline[(i + 1)].x + this.collisionPoints.x;
			var cords2y = this.y + this.collisionPoints.polyline[(i + 1)].y + this.collisionPoints.y;
			returnList.push([{x: cords1x, y: cords1y}, {x: cords2x, y: cords2y}]);
		}
		return returnList;
	}
	this.getPoint = function (points, type) {
		this.score += points;
		this.scoreLog.push({type: type, points: points});
	}
}
