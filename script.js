var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomiser = document.getElementById("random");

function setGradient() {
	body.style.background =
	 "linear-gradient(to right, "+ 
	  color1.value 
	  + ", " 
	  + color2.value 
	  + ")";

	 css.textContent = body.style.background + ";";
}

function randomColor()
{
     color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';

     return color;
}

function setRandomColors() {
	body.style.background =
	 "linear-gradient(to right, "+ 
	  randomColor() 
	  + ", " 
	  + randomColor()
	  + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomiser.addEventListener("click", setRandomColors);
