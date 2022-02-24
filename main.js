var colorBoxes = document.querySelectorAll(".square")
var hexes = document.querySelectorAll(".hex")
var newButton = document.querySelector(".new-palette")
var squareOne = document.getElementById("color-one")
var squareTwo = document.getElementById("color-two")
var squareThree = document.getElementById("color-three")
var squareFour = document.getElementById("color-four")
var squareFive = document.getElementById("color-five")
var hex = ["A", "B", "C", "D", "E", "F", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

newButton.addEventListener("click", changeAllColors)
window.addEventListener("load", changeAllColors)






 class Color {
   constructor() {
     this.hex = this.getRandomHex(hex);
     this.locked = false;
     this.id = Date.now();
   };

   getRandomHex(hex) {
     var randomHex = [];
     for (var i = 0; i < 6; i++) {
       var hexDigit = hex[Math.floor((Math.random() * hex.length))];
       randomHex.push(hexDigit);
     };
       var newRandomHex = randomHex.join("");
       return `#${newRandomHex}`;
   };

 };


 class Palette {
   constructor() {
   };
 };

 // this.colors = [new Color, new Color, new Color, new Color, new Color]

function changeColors(element) {
  var newColor = new Color
element.style.backgroundColor = newColor.hex
};

function changeAllColors() {
  changeColors(squareOne)
  changeColors(squareTwo)
  changeColors(squareThree)
  changeColors(squareFour)
  changeColors(squareFive)
}

// var newPalette = new Palette;
// colorBoxes[i].style.backgroundColor = newPalette.colors[i].hex;
// hexes[i].innerText = newPalette.colors[i].hex;
