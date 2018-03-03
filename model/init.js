var Init = function (game, mainCallback) {
	this.game = game;
	this.loadImage = function (image, callback) {
		var base_image = new Image();
		base_image.src = 'asset/'+image;

		base_image.onload = function(){
		    callback(base_image);
  		}
  		//TODO: add error main callback return
	}
	this.loadImage("background_top.png", function (image) {
		this.game.asset["background"] = {};
		this.game.asset["background"]["width"] = image.width;
		this.game.asset["background"]["top"] = image;
		this.loadImage("background_ground.png", function (image) {

			this.game.asset["background"]["ground"] = image;
			this.loadImage("groundGrass.png", function (image) {

				this.game.asset["groundGrass"] = image;
				this.loadImage("groundDirt.png", function (image) {

					this.game.asset["groundDirt"] = image;
					this.loadImage("groundIce.png", function (image) {

						this.game.asset["groundIce"] = image;
						this.loadImage("groundRock.png", function (image) {

							this.game.asset["groundRock"] = image;
							this.loadImage("groundSnow.png", function (image) {

								this.game.asset["groundSnow"] = image;
								this.loadImage("puffLarge.png", function (image) {

									this.game.asset["puffLarge"] = image;
									this.loadImage("puffSmall.png", function (image) {

										this.game.asset["puffSmall"] = image;
										this.loadImage("rock.png", function (image) {

											this.game.asset["rock"] = image;
											this.loadImage("rockDown.png", function (image) {

												this.game.asset["rockDown"] = image;
												this.loadImage("rockGrass.png", function (image) {

													this.game.asset["rockGrass"] = image;
													this.loadImage("rockGrassDown.png", function (image) {

														this.game.asset["rockGrassDown"] = image;
														this.loadImage("rockIce.png", function (image) {

															this.game.asset["rockIce"] = image;
															this.loadImage("rockIceDown.png", function (image) {

																this.game.asset["rockIceDown"] = image;
																this.loadImage("rockSnow.png", function (image) {

																	this.game.asset["rockSnow"] = image;
																	this.loadImage("rockSnowDown.png", function (image) {

																		this.game.asset["rockSnowDown"] = image;
																		this.loadImage("starGold.png", function (image) {

																			this.game.asset["starGold"] = image;
																			this.loadImage("Planes/planeBlue1.png", function (image) {

																				this.game.asset["plane"] = {};
																				this.game.asset["plane"]["blue"] = {};
																				this.game.asset["plane"]["blue"]["part1"] = image;
																				this.loadImage("Planes/planeBlue2.png", function (image) {
																					this.game.asset["plane"]["blue"]["part2"] = image;
																					this.loadImage("Planes/planeBlue3.png", function (image) {
																						this.game.asset["plane"]["blue"]["part3"] = image;
																						this.loadLetters(mainCallback);
																					}.bind(this));
																				}.bind(this));
																			}.bind(this));
																		}.bind(this));
																	}.bind(this));
																}.bind(this));
															}.bind(this));
														}.bind(this));
													}.bind(this));
												}.bind(this));
											}.bind(this));
										}.bind(this));
									}.bind(this));
								}.bind(this));
							}.bind(this));
						}.bind(this));
					}.bind(this));
				}.bind(this));
			}.bind(this));
		}.bind(this));
	}.bind(this));
		
	this.loadLetters = function (callback){
		var letterList = ["letterA","letterB","letterC","letterD","letterE","letterF","letterG","letterH","letterI","letterJ","letterK","letterL","letterM","letterN","letterO","letterP","letterQ","letterR","letterS","letterT","letterU","letterV","letterW","letterX","letterY","letterZ","letterSpace","letter!"];
		this.game.asset["letter"] = {};
		this.loopLetter(letterList, 0, function () {
			this.loadUI(callback);
		}.bind(this));
	}
	this.loopLetter = function (listen, index, callback){
		if(listen.length <= index){
			callback();
		}else{
			var image = listen[index];
			this.loadImage("Letters/"+image+".png", function (theImage) {
				this.game.asset.letter[image] = theImage;
				this.loopLetter(listen, ++index, callback);
			}.bind(this));
		}
	}

	this.loadNumbers = function (callback){
		var numberList = ["number0","number1","number2","number3","number4","number5","number6","number7","number8","number9"];
		this.game.asset["number"] = {};
		this.loopNumbers(numberList, 0, function () {
			this.loadCoins(callback);
		}.bind(this));
	}
	this.loopNumbers = function (numbers, index, callback){
		if(numbers.length <= index){
			callback();
		}else{
			var image = numbers[index];
			this.loadImage("numbers/"+image+".png", function (theImage) {
				this.game.asset.number[image] = theImage;
				this.loopNumbers(numbers, ++index, callback);				
			}.bind(this));
		}
	}


	this.loadUI = function (callback){
		var uiList = ["buttonSmall", "buttonLarge", "UIbg"];
		this.game.asset["ui"] = {};
		this.loopUI(uiList, 0, function () {
			this.loadNumbers(callback);
		}.bind(this));
	}
	this.loopUI = function (listen, index, callback){
		if(listen.length <= index){
			callback();
		}else{
			var image = listen[index];
			this.loadImage("UI/"+image+".png", function (theImage) {
				this.game.asset.ui[image] = theImage;
				this.loopUI(listen, ++index, callback);
				
			}.bind(this));
		}
	}

	this.loadCoins = function (callback){
		var coinList = ["medalBronze", "medalSilver", "medalGold"];
		this.game.asset["coin"] = {};
		this.loopCoins(coinList, 0, function () {
			callback(true);
		}.bind(this));
	}
	this.loopCoins = function (listen, index, callback){
		if(listen.length <= index){
			callback();
		}else{
			var image = listen[index];
			this.loadImage("UI/"+image+".png", function (theImage) {
				this.game.asset.coin[image] = theImage;
				this.loopCoins(listen, ++index, callback);
			}.bind(this));
		}
	}


}