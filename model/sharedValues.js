var SharedValues = new function () {
	this.movingSpeed = 1;
	this.activeTheme = 0;
	this.historyThemes = [];
	this.themes = [
	{
		name: "Dirt", 
		rock: {
			top: "rockDown",
			bottom: "rock"
		},
		ground: "groundDirt"
	},
	{
		name: "Grass", 
		rock: {
			top: "rockGrassDown",
			bottom: "rockGrass"
		},
		ground: "groundGrass"
	},
	{
		name: "Ice", 
		rock: {
			top: "rockIceDown",
			bottom: "rockIce"
		},
		ground: "groundIce"
	},
	{
		name: "Rock", 
		rock: {
			top: "rockDown",
			bottom: "rock"
		},
		ground: "groundRock"
	},
	{
		name: "Snow", 
		rock: {
			top: "rockSnowDown",
			bottom: "rockSnow"
		},
		ground: "groundSnow"
	}
	];

	this.screenList = {
		game:0,
		mainMenu: 1,
		pauseScreen: 2
	}
	this.pointsType = {
		standard: 0,
		coin: 1
	}

	this.setNewTheme = function () {
		this.historyThemes.push(this.activeTheme);
		this.activeTheme = this.getRandomInt(this.themes.length, 0);
	}
	this.getTheme = function () {
		return this.themes[this.activeTheme];
	}
	this.getThemeOnIndex = function(index){
		return this.themes[index];
	}
	this.getRandomInt = function (max, min) {
		return Math.floor((Math.random() * (max - min) + min));
	}
	this.init = function (historyThemesAmount) {
		for (var i = 0; i < historyThemesAmount; i++) {
			this.setNewTheme();
		}
	}
}