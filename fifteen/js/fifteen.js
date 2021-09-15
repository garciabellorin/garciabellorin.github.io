window.onload = function () {
	$("shufflebutton").onclick = shuffle;
	renderPuzzle();
};

//Place the elmemts into right position
var slideNumber = [];
function renderPuzzle() {
	let slide = $$("#puzzlearea div");
	for (let i = 0; i < slide.length; i++) {
		slide[i].className = "puzzlepiece";
		slide[i].id = i;
		slideNumber[i] = i + 1;
		moveSlide(slide[i], i);
		slideBackground(slide[i], i);
		//Event Handling
		slide[i].addEventListener('click', movePieceEvent);
		slide[i].onmouseover = highlightPiece;
		slide[i].onmouseout = dehighlightPiece;
	}
	slideNumber[slide.length] = 0;
}

//Place a single piece into right position
var size = 4;
function moveSlide(piece, index) {
	//index -> (x, y)
	let currX = Math.floor(index / size);
	let currY = index % size;

	let topZero = currX * (400 / size);
	let sideZero = currY * (400 / size);
	piece.style.top = topZero + "px";
	piece.style.left = sideZero + "px";
}

//Set background images of the pieces
function slideBackground(piece, index) {
	var x = Math.floor(index / size);
	var y = index % size;
	var fromTheRightEdge = 400 - x * (400 / size);
	var fromTheBottomEdge = 400 - y * (400 / size);
	piece.style.backgroundPosition = fromTheBottomEdge + "px " + fromTheRightEdge + "px";
}

//Move Pieces
function movePieceEvent(event) {
	var index = parseInt(this.id);
	var dest = canMoveTo(index);
	if (dest != -1) {
		movePieceFromTo(this, index, dest);
		//Reset the slideNumber[i]
		slideNumber[dest] = slideNumber[index];
		slideNumber[index] = 0;
		this.id = dest;
	}

	//Judge whether it is a successful status
	//If success, change the background image of the body
	var slide = $$("#puzzlearea div");
	var correctCount = 0;
	for (var i = 0; i < slide.length; i++) {
		if (slideNumber[i] == i + 1)
			correctCount++;
	}
	if (slideNumber[slide.length] == 0)
		correctCount++;
	if (correctCount == 16) {
		// alert("OH YEAH YOU ARE SUCCESSFUL!");
		$$('body')[0].setStyle({ backgroundColor: '#900' });
	}
	else {
		$$('body')[0].setStyle({ backgroundColor: 'white' });
	}
}

function movePieceFromTo(piece, index, dest) {
	//Calculation
	var fromX = Math.floor(index / size) * (400 / size);
	var fromY = (index % size) * (400 / size);
	var destX = Math.floor(dest / size) * (400 / size);
	var destY = (dest % size) * (400 / size);
	var interval = 10;

	//Begin moving
	var i = 0;
	if (fromX == destX) {
		for (i = 1; i <= 100 / interval; i++)
			setTimeout(stepMoveTo, i * interval, piece, fromX, fromY + (destY - fromY) / (100 / interval) * i);
	}
	else {
		for (i = 1; i <= 100 / interval; i++)
			setTimeout(stepMoveTo, i * interval, piece, fromX + (destX - fromX) / (100 / interval) * i, fromY);
	}
	//Finish moving
}

//Caller: movePiece
function canMoveTo(index) {
	var destination = null;
	var left = index - 1;
	var right = index + 1;
	var up = index - 4;
	var down = index + 4;

	if (left >= 0 && left < 16)
		//if 0 left side and index is not leftmost
		if (slideNumber[left] == 0 && index % size != 0) {
			return left;
		}
	if (right >= 0 && right < 16)
		if (slideNumber[right] == 0 && index % size != 3) {
			return right;
		}
	if (up >= 0 && up < 16)
		if (slideNumber[up] == 0 && Math.floor(index / size) != 0) {
			return up;
		}
	if (down >= 0 && down < 16)
		if (slideNumber[down] == 0 && Math.floor(index / size) != 3) {
			return down;
		}
	return -1;
}

//Caller: movePiece
function stepMoveTo(piece, x, y) {
	piece.style.top = x + "px";
	piece.style.left = y + "px";
}

//Highlight and dehighlight pieces
function highlightPiece(event) {
	if (canMoveTo(parseInt(this.id)) != -1) {
		this.style.borderColor = "red";
		this.style.color = "#006600";
		this.style.textDecoration = "underline";
	}
}

function dehighlightPiece(event) {
	this.style.borderColor = "black";
	this.style.color = "black";
	this.style.textDecoration = "";
}

// Shuffle the pieces
function shuffle(event) {
	var slide = $$("#puzzlearea div");
	//use 20 steps to mess up the puzzle
	for (var step = 0; step < 200; step++) {
		list = [];
		//select the movable pieces
		for (var i = 0; i < slide.length; i++) {
			var tempIndex = parseInt(slide[i].id);
			if (canMoveTo(tempIndex) != -1)
				list.push(slide[i]);
		}
		var piece = list[Math.floor(Math.random() * list.length)];
		var index = parseInt(piece.id);
		var dest = canMoveTo(index);
		movePieceFromTo(piece, index, dest);
		slideNumber[dest] = slideNumber[index];
		slideNumber[index] = 0;
		piece.id = dest;
		list = [];
	}
}