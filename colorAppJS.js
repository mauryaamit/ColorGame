var colors = []
var numSquares=6;
var pickedColor;
var colorDisplay=document.getElementById("rgb");
var squares=document.querySelectorAll(".square");
var message=document.querySelector(".message");
var h1=document.querySelector("h1");
var resetBtn=document.querySelector("#resetBtn");
var modeButtons=document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons evntListeners
	setupModeBtn();
	setupSquares();
	reset();
}

function setupModeBtn(){
	for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected"); 
			this.textContent=="Easy" ? numSquares=3: numSquares=6;
			reset();
		});
	}
}
function setupSquares(){
	for(var i=0; i<squares.length; i++){
	//add clickLitener to square
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor=this.style.backgroundColor;
	    //compare the color with pickedColor
		if (clickedColor==pickedColor){
		   	message.textContent="Correct";
		   	h1.style.backgroundColor=clickedColor;
		   	resetBtn.textContent="Play Again?";
		   	changeColor();	   	
	    }
	   else{
		   	this.style.backgroundColor="#000000";
		   	message.textContent="Try Again";
	    }
	 });	
	}
}

function reset(){ 
	colors=genrateRandomColors(numSquares);
	//pick a new random color form array
	pickedColor=pickColor();
	//chnage colorDisplay to match picked color
	colorDisplay.textContent=pickedColor;
	resetBtn.textContent="New Colors";
	message.textContent="";
	//change colors of square
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor="steelblue";
}


resetBtn.addEventListener("click",function(){
		reset();
});


for(var i=0; i<squares.length; i++){
	//add clickLitener to square
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor=this.style.backgroundColor;
	   //compare the color with pickedColor
	   if (clickedColor==pickedColor){
	   	message.textContent="Correct";
	   	h1.style.backgroundColor=clickedColor;
	   	resetBtn.textContent="Play Again?";
	   	changeColor();	   	
	   }
	   else{
	   	this.style.backgroundColor="#000000";
	   	message.textContent="Try Again";
	   }
	});	
}

function changeColor(){
	for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor=pickedColor;
    }
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function genrateRandomColors(num){
	//make an array
	var arr=[];
	//repeate num times
	for(var i=0;i<num;i++){
		//get random color and push it into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r=Math.floor(Math.random()*256);
	//pick a "green" from0-255
	var g=Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	var b=Math.floor(Math.random()*256);	
	return "rgb(" + r + ", " + g + ", " + b +")";
}
// }consiquence is not your business, process is your business 
