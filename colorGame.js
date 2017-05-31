var numColors = 6;

var colors = generateRandomColors(numColors);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message")
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var hardBtn = document.getElementById("hardBtn");
var easyBtn = document.getElementById("easyBtn");

var pickedColor = pickColor();


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add listeners to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){
			message.textContent = "Correct!";
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again!"
		}
		else {
			this.style.backgroundColor = "#232323"
			message.textContent = "Try Again!";
		}
	});
};

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numColors = 3;
	resetGame();
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numColors = 6;
	resetGame();
});

resetButton.addEventListener("click", function(){
	resetGame();
});

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
};

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num){
	var arr = [];

	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}

	return arr;
};

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function resetGame(){
	colors = generateRandomColors(numColors);

	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		//add colors to squares
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
		else {
			squares[i].style.display = "none";
		}
	}

	resetButton.textContent = "New Colors";
	h1.style.backgroundColor ="steelblue"
	message.textContent = "";
}