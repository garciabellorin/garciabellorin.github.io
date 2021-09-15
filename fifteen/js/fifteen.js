$(document).ready(function () {

	window.onload = function () {
		$("shufflebutton").onclick = shuffle;
		placeElements();
	};

	//Place the elmemts into right position
	var tileNumber = [];
	function placeElements() {
		var puzzlepieces = $$("#puzzlearea div");
		for (var i = 0; i < puzzlepieces.length; i++) {
			puzzlepieces[i].className = "puzzlepiece";
			puzzlepieces[i].id = i;
			tileNumber[i] = i + 1;
			tilePosition(puzzlepieces[i], i);
			tileBackground(puzzlepieces[i], i);

			//Event Handling
			puzzlepieces[i].addEventListener("click", moveTile);
			puzzlepieces[i].onmouseover = highlightPiece;
			puzzlepieces[i].onmouseout = dehighlightPiece;
		}
		tileNumber[puzzlepieces.length] = 0;
	}

	//Place a single piece into right position
	var size = 4;
	function tilePosition(piece, index) {
		//index -> (x, y)
		var x = Math.floor(index / size);
		var y = index % size;

		var fromTheTopEdge = x * (400 / size);
		var fromTheLeftEdge = y * (400 / size);
		piece.style.top = fromTheTopEdge + "px";
		piece.style.left = fromTheLeftEdge + "px";
	}

	//Set background images of the pieces
	function tileBackground(piece, index) {
		var posX = Math.floor(index / size);
		var posY = index % size;
		var fromTheRightEdge = 400 - posX * (400 / size);
		var fromTheBottomEdge = 400 - posY * (400 / size);
		piece.style.backgroundPosition = fromTheBottomEdge + "px " + fromTheRightEdge + "px";
	}

	//Move Pieces
	function moveTile(event) {
		var index = parseInt(this.id);
		var dest = availablePosition(index);
		if (dest != -1) {
			moveTileFromTo(this, index, dest);
			//Reset the tileNumber[i]
			tileNumber[dest] = tileNumber[index];
			tileNumber[index] = 0;
			this.id = dest;
		}

		//Check status and change background
		var puzzlepieces = $$("#puzzlearea div");
		var correctCount = 0;
		for (var i = 0; i < puzzlepieces.length; i++) {
			if (tileNumber[i] == i + 1)
				correctCount++;
		}
		if (tileNumber[puzzlepieces.length] == 0)
			correctCount++;
		if (correctCount == 16) {
			$$("body")[0].setStyle({ backgroundColor: "#900" });
		}
		else {
			$$("body")[0].setStyle({ backgroundColor: "white" });
		}
	}

	function moveTileFromTo(piece, index, dest) {
		var fromX = Math.floor(index / size) * (400 / size);
		var fromY = (index % size) * (400 / size);
		var destX = Math.floor(dest / size) * (400 / size);
		var destY = (dest % size) * (400 / size);
		var interval = 10;

		//Render
		var i = 0;
		if (fromX == destX) {
			for (i = 1; i <= 100 / interval; i++)
				setTimeout(moveTileTo, i * interval, piece, fromX, fromY + (destY - fromY) / (100 / interval) * i);
		}
		else {
			for (i = 1; i <= 100 / interval; i++)
				setTimeout(moveTileTo, i * interval, piece, fromX + (destX - fromX) / (100 / interval) * i, fromY);
		}

	}

	//Caller: moveTile
	function availablePosition(index) {
		var destination = null;
		var left = index - 1;
		var right = index + 1;
		var up = index - 4;
		var down = index + 4;

		if (left >= 0 && left < 16)
			//if 0 left side and index is not leftmost
			if (tileNumber[left] == 0 && index % size != 0) {
				return left;
			}
		if (right >= 0 && right < 16)
			if (tileNumber[right] == 0 && index % size != 3) {
				return right;
			}
		if (up >= 0 && up < 16)
			if (tileNumber[up] == 0 && Math.floor(index / size) != 0) {
				return up;
			}
		if (down >= 0 && down < 16)
			if (tileNumber[down] == 0 && Math.floor(index / size) != 3) {
				return down;
			}
		return -1;
	}

	//Caller: moveTile
	function moveTileTo(piece, x, y) {
		piece.style.top = x + "px";
		piece.style.left = y + "px";
	}

	//Highlight and dehighlight pieces
	function highlightPiece(event) {
		if (availablePosition(parseInt(this.id)) != -1) {
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
		var puzzlepieces = $$("#puzzlearea div");
		//use 20 steps to mess up the puzzle
		for (var step = 0; step < 200; step++) {
			list = [];
			//select the movable pieces
			for (var i = 0; i < puzzlepieces.length; i++) {
				var tempIndex = parseInt(puzzlepieces[i].id);
				if (availablePosition(tempIndex) != -1)
					list.push(puzzlepieces[i]);
			}
			var piece = list[Math.floor(Math.random() * list.length)];
			var index = parseInt(piece.id);
			var dest = availablePosition(index);
			moveTileFromTo(piece, index, dest);
			tileNumber[dest] = tileNumber[index];
			tileNumber[index] = 0;
			piece.id = dest;
			list = [];
		}

	}
});