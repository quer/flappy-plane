var Player = function (game) {
	this.game = game;
	this.image = null;
	this.ctx = game.ctx;
	this.color = "blue";
	this.delta = 0;
	this.x = 100;
	this.y = 100;
	this.cycle = ["part1", "part2", "part3", "part2"];
	this.cycleIndex = 0;
	this.move = {
        up: false,
        down: false,
        right: false,
        left: false
    }
    this.movementSpeed = 10;

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
				//this.game.ctx.stroke();		
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
		var lineTopLeft = {x: this.x, y: this.y};
		var lineTopRight = {x: this.x + this.getCurrentImage().width, y: this.y};
		var lineBottomLeft = {x: this.x, y: this.y + this.getCurrentImage().height};
		var lineBottomRight = {x: this.x + this.getCurrentImage().width, y: this.y + this.getCurrentImage().height};

		return [[lineTopLeft, lineTopRight], [lineTopRight, lineBottomRight], [lineBottomRight, lineBottomLeft], [lineBottomLeft, lineTopLeft]];

	}
}
