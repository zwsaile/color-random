var savedPalettes = []
var colorPalette = document.querySelector(".color-palette")
var newButton = document.querySelector(".new-palette")
var savePaletteButton = document.querySelector(".save-palette")
var miniSquareSection = document.querySelector(".mini-square")
var square = document.querySelectorAll(".square")
var hexCodes = document.querySelectorAll(".hex")
var miniTrash = document.getElementById("mini-trash")
var unlock = document.querySelectorAll(".unlock-image")
var hex = ["A", "B", "C", "D", "E", "F", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var currentPalette = [];

newButton.addEventListener("click", changeAllColors)
savePaletteButton.addEventListener("click", function() {
 addSavedPalette()
 changeAllColors()
});
window.addEventListener("load", changeAllColors)
colorPalette.addEventListener("click", changeLockIcon);

function changeColors() {
  var newPalette = [];
  var newColorOne = new Color;
  var newColorTwo = new Color;
  var newColorThree = new Color;
  var newColorFour = new Color;
  var newColorFive = new Color;
  newPalette.push(newColorOne, newColorTwo, newColorThree, newColorFour, newColorFive)
  currentPalette = newPalette;
};

function changeAllColors() {
  changeColors();
  for (var i = 0; i < 5; i++) {
    square[i].style.backgroundColor = currentPalette[i].hex;
    hexCodes[i].innerText = currentPalette[i].hex;
  };
};

function displayPalettes() {
  var addHTML = '';
   for(var i = 0; i < savedPalettes.length; i++) {
    addHTML += `
    <div class="flexSquares">
    <p id="mini-color-one" class="mini-square" style="background-color:${savedPalettes[i].colorOne}"></p>
    <p id="mini-color-two" class="mini-square" style="background-color:${savedPalettes[i].colorTwo}"></p>
    <p id="mini-color-three" class="mini-square" style="background-color:${savedPalettes[i].colorThree}"></p>
    <p id="mini-color-four" class="mini-square" style="background-color:${savedPalettes[i].colorFour}"></p>
    <p id="mini-color-five" class="mini-square" style="background-color:${savedPalettes[i].colorFive}"></p>
    <img onclick='deletePalette(this.id)' id="${savedPalettes[i].id += 1}" class="mini-square" src="./assets/trash.png" alt="Trashcan"/></div>`
  };
  miniSquareSection.innerHTML = addHTML;
};

function addSavedPalette() {
  savedPalettes.push(new Palette)
  displayPalettes()
};

function deletePalette(id) {
  for (var i = 0; i < savedPalettes.length; i++) {
    if (id == savedPalettes[i].id) {
      savedPalettes.splice(i, 1);
    };
  };
  displayPalettes()
};

function changeLockIcon() {
  if (event.target.src !== "./assets/padlock.png") {
    event.target.src = "./assets/padlock.png";
  }
}
