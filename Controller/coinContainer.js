var CoinContainer = function (game) {
	this.game = game;
	this.image = {};
	this.ctx = game.ctx;
	this.coins = [];
	this.coinScale = 2;

	this.init = function () {
		this.image = this.game.asset.coin;
	}

	this.render = function () {
		for (var i = 0; i < this.coins.length; i++) {
			this.coins[i].render();
		}
	}
	this.update = function (delta) {
		
		for (var i = this.coins.length - 1; i >= 0; i--) {
			this.coins[i].update(delta);
			if(this.coins[i].outOfBounce()){
				this.coins[i].add();
				this.coins.splice(i, 1);
			}
		}
	}
	this.addCoins = function (rock1, rock2) {
		var coinType = this.getCoinType();
		if(coinType != null){
			var coin = new Coin(this.game, this.getNewCoinPoss(rock1, rock2), this.image[coinType], coinType, this.coinScale);
			this.coins.push(coin);
			console.log(this.coins.length);
		}
	}

	this.getNewCoinPoss = function (rock1, rock2) {
		var gabWidth = (rock2.x - rock1.x - rock2.imageTop.width);
		var x = (gabWidth / 2) + rock2.x + rock2.imageTop.width - ((this.image["medalBronze"].width / this.coinScale) / 2) ;
		var margin = 71;
		var y = Math.random() * ((this.game.can.height - (this.image["medalBronze"].width / this.coinScale)) - margin) + margin;
		return{ x: x, y: y};
	}
	this.getCoinType = function () {
		var returnType = null;
		if(Math.random() < 0.66) {
			returnType = "medalBronze";
			if(Math.random() < 0.50) {
				returnType = "medalSilver";
				if(Math.random() < 0.40) {
					returnType = "medalGold";

				}
			}
		}
		return returnType;
	}
}