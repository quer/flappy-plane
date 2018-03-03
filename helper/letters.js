var Letters = function (game, word, scale, startPoss) {
	this.game = game;
	this.asset = game.asset.letter;
	this.number = game.asset.number;
	this.startPoss = startPoss;
	this.scale = scale;
	this.letterGab = 3;
	this.lettersList = {
		width: 0,
		height: 0,
		letters: []
	}
	for (var i = 0; i < word.length; i++) {
		var letter = word[i];
		var letterImage = null;
		switch(letter) {
			case 'a':
				letterImage = this.asset["letterA"];
				break;
			case 'A':
				letterImage = this.asset["letterA"];
				break;
			case 'b':
				letterImage = this.asset["letterB"];
				break;
			case 'B':
				letterImage = this.asset["letterB"];
				break;
			case 'c':
				letterImage = this.asset["letterC"];
				break;
			case 'C':
				letterImage = this.asset["letterC"];
				break;
			case 'd':
				letterImage = this.asset["letterD"];
				break;
			case 'D':
				letterImage = this.asset["letterD"];
				break;
			case 'e':
				letterImage = this.asset["letterE"];
				break;
			case 'E':
				letterImage = this.asset["letterE"];
				break;
			case 'f':
				letterImage = this.asset["letterF"];
				break;
			case 'F':
				letterImage = this.asset["letterF"];
				break;
			case 'g':
				letterImage = this.asset["letterG"];
				break;
			case 'G':
				letterImage = this.asset["letterG"];
				break;
			case 'h':
				letterImage = this.asset["letterH"];
				break;
			case 'H':
				letterImage = this.asset["letterH"];
				break;
			case 'i':
				letterImage = this.asset["letterI"];
				break;
			case 'I':
				letterImage = this.asset["letterI"];
				break;
			case 'j':
				letterImage = this.asset["letterJ"];
				break;
			case 'J':
				letterImage = this.asset["letterJ"];
				break;
			case 'k':
				letterImage = this.asset["letterK"];
				break;
			case 'K':
				letterImage = this.asset["letterK"];
				break;
			case 'l':
				letterImage = this.asset["letterL"];
				break;
			case 'L':
				letterImage = this.asset["letterL"];
				break;
			case 'm':
				letterImage = this.asset["letterM"];
				break;
			case 'M':
				letterImage = this.asset["letterM"];
				break;
			case 'n':
				letterImage = this.asset["letterN"];
				break;
			case 'N':
				letterImage = this.asset["letterN"];
				break;
			case 'o':
				letterImage = this.asset["letterO"];
				break;
			case 'O':
				letterImage = this.asset["letterO"];
				break;
			case 'p':
				letterImage = this.asset["letterP"];
				break;
			case 'P':
				letterImage = this.asset["letterP"];
				break;
			case 'q':
				letterImage = this.asset["letterQ"];
				break;
			case 'Q':
				letterImage = this.asset["letterQ"];
				break;
			case 'r':
				letterImage = this.asset["letterR"];
				break;
			case 'R':
				letterImage = this.asset["letterR"];
				break;
			case 's':
				letterImage = this.asset["letterS"];
				break;
			case 'S':
				letterImage = this.asset["letterS"];
				break;
			case 't':
				letterImage = this.asset["letterT"];
				break;
			case 'T':
				letterImage = this.asset["letterT"];
				break;
			case 'u':
				letterImage = this.asset["letterU"];
				break;
			case 'U':
				letterImage = this.asset["letterU"];
				break;
			case 'v':
				letterImage = this.asset["letterV"];
				break;
			case 'V':
				letterImage = this.asset["letterV"];
				break;
			case 'w':
				letterImage = this.asset["letterW"];
				break;
			case 'W':
				letterImage = this.asset["letterW"];
				break;
			case 'x':
				letterImage = this.asset["letterX"];
				break;
			case 'X':
				letterImage = this.asset["letterX"];
				break;
			case 'y':
				letterImage = this.asset["letterY"];
				break;
			case 'Y':
				letterImage = this.asset["letterY"];
				break;
			case 'z':
				letterImage = this.asset["letterZ"];
				break;
			case 'Z':
				letterImage = this.asset["letterZ"];
				break;
			case ' ':
				letterImage = this.asset["letterSpace"];
				break;
			case '!':
				letterImage = this.asset["letter!"];
				break;
			case '0':
				letterImage = this.number["number0"];
				break;
			case '1':
				letterImage = this.number["number1"];
				break;
			case '2':
				letterImage = this.number["number2"];
				break;
			case '3':
				letterImage = this.number["number3"];
				break;
			case '4':
				letterImage = this.number["number4"];
				break;
			case '5':
				letterImage = this.number["number5"];
				break;
			case '6':
				letterImage = this.number["number6"];
				break;
			case '7':
				letterImage = this.number["number7"];
				break;
			case '8':
				letterImage = this.number["number8"];
				break;
			case '9':
				letterImage = this.number["number9"];
				break;
				
			default: 
				letterImage = this.asset["letterZ"];
				break;
		}
		this.lettersList.width += (letterImage.width + this.letterGab) / this.scale;
		this.lettersList.height = letterImage.height / this.scale;
		this.lettersList.letters.push(letterImage);
	}
	this.lettersList.width -= this.letterGab;
	this.center = function(width, height){
		if(width != null){
			this.startPoss.x = this.startPoss.x + ((width - this.lettersList.width) / 2);
		}
		if(height != null){
			this.startPoss.y = this.startPoss.y + ((height - this.lettersList.height) / 2);
		}
	}
	this.render = function(){
		var currentWidth = 0;
		for (var i = 0; i < this.lettersList.letters.length; i++) {
			var image = this.lettersList.letters[i];				
			this.game.ctx.drawImage(image, 0, 0, image.width, image.height, (this.startPoss.x + currentWidth), this.startPoss.y, image.width / this.scale, image.height / this.scale);
			currentWidth += (image.width + this.letterGab) / this.scale;
		}
	}
}