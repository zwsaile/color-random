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
