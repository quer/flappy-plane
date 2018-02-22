var Letters = function (game, word, scale) {
	var asset = game.asset.letter;
	var letterGab = 3;
	var returnList = {
		width: 0,
		height: 0,
		letterGab: letterGab,
		letters: []
	}
	for (var i = 0; i < word.length; i++) {
		var letter = word[i];
		var letterImage = null;
		switch(letter) {
			case 'a':
				letterImage = asset["letterA"];
				break;
			case 'A':
				letterImage = asset["letterA"];
				break;
			case 'b':
				letterImage = asset["letterB"];
				break;
			case 'B':
				letterImage = asset["letterB"];
				break;
			case 'c':
				letterImage = asset["letterC"];
				break;
			case 'C':
				letterImage = asset["letterC"];
				break;
			case 'd':
				letterImage = asset["letterD"];
				break;
			case 'D':
				letterImage = asset["letterD"];
				break;
			case 'e':
				letterImage = asset["letterE"];
				break;
			case 'E':
				letterImage = asset["letterE"];
				break;
			case 'f':
				letterImage = asset["letterF"];
				break;
			case 'F':
				letterImage = asset["letterF"];
				break;
			case 'g':
				letterImage = asset["letterG"];
				break;
			case 'G':
				letterImage = asset["letterG"];
				break;
			case 'h':
				letterImage = asset["letterH"];
				break;
			case 'H':
				letterImage = asset["letterH"];
				break;
			case 'i':
				letterImage = asset["letterI"];
				break;
			case 'I':
				letterImage = asset["letterI"];
				break;
			case 'j':
				letterImage = asset["letterJ"];
				break;
			case 'J':
				letterImage = asset["letterJ"];
				break;
			case 'k':
				letterImage = asset["letterK"];
				break;
			case 'K':
				letterImage = asset["letterK"];
				break;
			case 'l':
				letterImage = asset["letterL"];
				break;
			case 'L':
				letterImage = asset["letterL"];
				break;
			case 'm':
				letterImage = asset["letterM"];
				break;
			case 'M':
				letterImage = asset["letterM"];
				break;
			case 'n':
				letterImage = asset["letterN"];
				break;
			case 'N':
				letterImage = asset["letterN"];
				break;
			case 'o':
				letterImage = asset["letterO"];
				break;
			case 'O':
				letterImage = asset["letterO"];
				break;
			case 'p':
				letterImage = asset["letterP"];
				break;
			case 'P':
				letterImage = asset["letterP"];
				break;
			case 'q':
				letterImage = asset["letterQ"];
				break;
			case 'Q':
				letterImage = asset["letterQ"];
				break;
			case 'r':
				letterImage = asset["letterR"];
				break;
			case 'R':
				letterImage = asset["letterR"];
				break;
			case 's':
				letterImage = asset["letterS"];
				break;
			case 'S':
				letterImage = asset["letterS"];
				break;
			case 't':
				letterImage = asset["letterT"];
				break;
			case 'T':
				letterImage = asset["letterT"];
				break;
			case 'u':
				letterImage = asset["letterU"];
				break;
			case 'U':
				letterImage = asset["letterU"];
				break;
			case 'v':
				letterImage = asset["letterV"];
				break;
			case 'V':
				letterImage = asset["letterV"];
				break;
			case 'w':
				letterImage = asset["letterW"];
				break;
			case 'W':
				letterImage = asset["letterW"];
				break;
			case 'x':
				letterImage = asset["letterX"];
				break;
			case 'X':
				letterImage = asset["letterX"];
				break;
			case 'y':
				letterImage = asset["letterY"];
				break;
			case 'Y':
				letterImage = asset["letterY"];
				break;
			case 'z':
				letterImage = asset["letterZ"];
				break;
			case 'Z':
				letterImage = asset["letterZ"];
				break;
			case ' ':
				letterImage = asset["letterSpace"];
				break;
			case '!':
				letterImage = asset["letter!"];
				break;
			default: 
				letterImage = asset["letterZ"];
				break;
		}
		returnList.width += letterImage.width + letterGab;
		returnList.height += letterImage.height;
		returnList.letters.push(letterImage);
	}
	returnList.width -= letterGab;
	return returnList;
}