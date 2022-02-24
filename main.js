var colorBoxes = document.querySelectorAll(".square")
var hexes = document.querySelectorAll(".hex")
var newButton = document.querySelector(".new-palette")

var hex = ["A", "B", "C", "D", "E", "F", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

newButton.addEventListener("click", changeColor)
window.addEventListener("load", changeColor)






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
     this.colors = [new Color, new Color, new Color, new Color, new Color]
   };
 };


function changeColors() {

};


// var newPalette = new Palette;
// colorBoxes[i].style.backgroundColor = newPalette.colors[i].hex;
// hexes[i].innerText = newPalette.colors[i].hex;
