var savedPalettes = []
var colorBoxes = document.querySelectorAll(".square")
var hexes = document.querySelectorAll(".hex")
var newButton = document.querySelector(".new-palette")
var savePaletteButton = document.querySelector(".save-palette")
var miniSquareSection = document.querySelector(".mini-square")
var squareOne = document.getElementById("color-one")
var squareTwo = document.getElementById("color-two")
var squareThree = document.getElementById("color-three")
var squareFour = document.getElementById("color-four")
var squareFive = document.getElementById("color-five")
var hexOne = document.getElementById("hex-one")
var hexTwo = document.getElementById("hex-two")
var hexThree = document.getElementById("hex-three")
var hexFour = document.getElementById("hex-four")
var hexFive = document.getElementById("hex-five")
var hex = ["A", "B", "C", "D", "E", "F", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

newButton.addEventListener("click", changeAllColors)
savePaletteButton.addEventListener("click", function() {
 addSavedPalette()
 // changeAllColors()
});
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
    this.colorOne = hexOne.innerText
    this.colorTwo = hexTwo.innerText
    this.colorThree = hexThree.innerText
    this.colorFour = hexFour.innerText
    this.colorFive = hexFive.innerText
  };
};
 // this.colors = [new Color, new Color, new Color, new Color, new Color]
function changeColors(element, hexCode) {
  var newColor = new Color
    element.style.backgroundColor = newColor.hex
    hexCode.innerText = newColor.hex
};

function changeAllColors() {
  changeColors(squareOne, hexOne)
  changeColors(squareTwo, hexTwo)
  changeColors(squareThree, hexThree)
  changeColors(squareFour, hexFour)
  changeColors(squareFive, hexFive)
};
function addSavedPalette() {
  savedPalettes.push(new Palette)
  var addHTML = '';
   for(var i = 0; i < savedPalettes.length; i++) {
    addHTML += `
    <div class="flexSquares">
    <p id="mini-color-one" class="mini-square" style="background-color:${savedPalettes[i].colorOne}"></p>
    <p id="mini-color-two" class="mini-square" style="background-color:${savedPalettes[i].colorTwo}"></p>
    <p id="mini-color-three" class="mini-square" style="background-color:${savedPalettes[i].colorThree}"></p>
    <p id="mini-color-four" class="mini-square" style="background-color:${savedPalettes[i].colorFour}"></p>
    <p id="mini-color-five" class="mini-square" style="background-color:${savedPalettes[i].colorFive}"></p>
    <img src="https://cdn-icons-png.flaticon.com/512/1345/1345823.png" alt="Trashcan"/></div>`
  };
  miniSquareSection.innerHTML = addHTML;
};
