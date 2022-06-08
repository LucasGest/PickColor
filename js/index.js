var btn = document.querySelector(".btn a");
var pickColors = document.querySelector("input.colors");
var container = document.querySelector(".center");
var spanH = document.querySelector("p.textHexa span");
var spanR = document.querySelector("p.textRgb span");
var resultat = document.querySelector(".show-colors");

// Gère la récupération de la valeur de la palette de couleur dans l'input couleur
btn.addEventListener("click", () => {
  resultat.style.background = pickColors.value;
  spanH.innerHTML = pickColors.value;

  var noHexa = pickColors.value.substr(1);

  String.prototype.convertToRGB = function () {
    if (this.length != 6) {
      throw "Seules les couleurs hexadécimales à six chiffres sont autorisées.";
    }

    var aRgbHex = this.match(/.{1,2}/g);
    var aRgb = [
      parseInt(aRgbHex[0], 16),
      parseInt(aRgbHex[1], 16),
      parseInt(aRgbHex[2], 16),
    ];
    return aRgb;
  };

  spanR.innerHTML = `rgb(${noHexa.convertToRGB()})`;
});

document.body.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    resultat.style.background = pickColors.value;
    spanH.innerHTML = pickColors.value;

    var noHexa = pickColors.value.substr(1);

    String.prototype.convertToRGB = function () {
      if (this.length != 6) {
        throw "Seules les couleurs hexadécimales à six chiffres sont autorisées.";
      }

      var aRgbHex = this.match(/.{1,2}/g);
      var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16),
      ];
      return aRgb;
    };

    spanR.innerHTML = `rgb(${noHexa.convertToRGB()})`;
  }
});