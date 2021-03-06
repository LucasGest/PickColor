var btn = document.querySelector(".btn a");
var pickColors = document.querySelector("input.colors");
var container = document.querySelector(".center");
var spanH = document.querySelector("p.textHexa span");
var spanR = document.querySelector("p.textRgb span");
var resultat = document.querySelector(".show-colors");
var responsive_form = document.querySelector(".form_one");
var responsive_form_bis = document.querySelector(".form_two");
var responsive_form_ter = document.querySelector(".form_three");
var responsive_form_qua = document.querySelector(".form_four");

// Fonction générant des charactères aléatoires pour définir une couleur héxadécimales
function valueHexaRand() {
  var result = [];
  var char = "0123456789abcdef";
  var charlenght = char.length;

  for (var i = 0; i < charlenght; i++) {
    result.push(char.charAt(Math.floor(Math.random() * charlenght)));
    return result.join("");
  }
}

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

pickColors.value = `#${valueHexaRand()}${valueHexaRand()}${valueHexaRand()}${valueHexaRand()}${valueHexaRand()}${valueHexaRand()}`;
resultat.style.background = pickColors.value;
responsive_form.style.background = pickColors.value;
responsive_form_bis.style.background = pickColors.value;
responsive_form_ter.style.background = pickColors.value;
responsive_form_qua.style.background = pickColors.value;
spanH.innerHTML = pickColors.value;
spanR.innerHTML = `rgb(${pickColors.value.substr(1).convertToRGB()})`;

// Gère la récupération de la valeur de la palette de couleur dans l'input couleur
btn.addEventListener("click", () => {
  resultat.style.background = pickColors.value;
  spanH.innerHTML = pickColors.value;
  spanR.innerHTML = `rgb(${pickColors.value.substr(1).convertToRGB()})`;
});

document.body.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    resultat.style.background = pickColors.value;
    spanH.innerHTML = pickColors.value;
    spanR.innerHTML = `rgb(${pickColors.value.substr(1).convertToRGB()})`;
  }
});

var lineDrawing = anime({
  targets: "#lineDrawing .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 200,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: false,
});
