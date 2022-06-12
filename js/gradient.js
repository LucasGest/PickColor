var btn = document.querySelector(".btn a");
var pickColors = document.querySelector("input.colors");
var pickColorsBis = document.querySelector("input.colors-bis");
var pickColorsTer = document.querySelector("input.colors-ter");
var container = document.querySelector(".option_and_colors");
var spanH = document.querySelector("p.textLinear span");
var resultat = document.querySelector(".show-colors");
var radius = document.querySelector(".radius");

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

var couleurHexa = `#${valueHexaRand()}${valueHexaRand()}${valueHexaRand()}${valueHexaRand()}${valueHexaRand()}${valueHexaRand()}`;
var couleurHexaBis = `#${valueHexaRand()}${valueHexaRand()}${valueHexaRand()}${valueHexaRand()}${valueHexaRand()}${valueHexaRand()}`;
var couleurHexaTer = `#${valueHexaRand()}${valueHexaRand()}${valueHexaRand()}${valueHexaRand()}${valueHexaRand()}${valueHexaRand()}`;

pickColors.value = couleurHexa;
pickColorsBis.value = couleurHexaBis;
pickColorsTer.value = couleurHexaTer;
resultat.style.background = `linear-gradient(${radius.value}deg, ${couleurHexa}, ${couleurHexaBis}, ${couleurHexaTer})`;

// Gère la récupération de la valeur de la palette de couleur dans l'input couleur
btn.addEventListener("click", () => {
  resultat.style.background = `linear-gradient(${radius.value}deg, ${couleurHexa}, ${couleurHexaBis}, ${couleurHexaTer})`;
  spanH.innerHTML = `linear-gradient(${radius.value}deg, ${couleurHexa}, ${couleurHexaBis}, ${couleurHexaTer})`;
  var premiereCouleur = couleurHexa;
  var premiereCouleurBis = couleurHexaBis;
  var premiereCouleurTer = couleurHexaTer;
  var nouvelleCouleur = pickColors.value;
  var nouvelleCouleurBis = pickColorsBis.value;
  var nouvelleCouleurTer = pickColorsTer.value;
  resultat.style.background = `linear-gradient(${radius.value}deg, ${nouvelleCouleur}, ${nouvelleCouleurBis}, ${nouvelleCouleurTer})`;
  spanH.innerHTML = `linear-gradient(${radius.value}deg, ${nouvelleCouleur}, ${nouvelleCouleurBis}, ${nouvelleCouleurTer})`;
});

document.body.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    resultat.style.background = `linear-gradient(${radius.value}deg, ${couleurHexa}, ${couleurHexaBis}, ${couleurHexaTer})`;
    spanH.innerHTML = `linear-gradient(${radius.value}deg, ${couleurHexa}, ${couleurHexaBis}, ${couleurHexaTer})`;
    var premiereCouleur = couleurHexa;
    var premiereCouleurBis = couleurHexaBis;
    var premiereCouleurTer = couleurHexaTer;
    var nouvelleCouleur = pickColors.value;
    var nouvelleCouleurBis = pickColorsBis.value;
    var nouvelleCouleurTer = pickColorsTer.value;
    resultat.style.background = `linear-gradient(${radius.value}deg, ${nouvelleCouleur}, ${nouvelleCouleurBis}, ${nouvelleCouleurTer})`;
    spanH.innerHTML = `linear-gradient(${radius.value}deg, ${nouvelleCouleur}, ${nouvelleCouleurBis}, ${nouvelleCouleurTer})`;
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

console.log(radius.value);
