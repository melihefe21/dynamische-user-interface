var afbeeldingen = ["image1.jpg", "image2.jpg", "image3.jpg"];
var huidigeAfbeelding = 0;

document.getElementById("vorige").addEventListener("click", vorigeAfbeelding);
document.getElementById("volgende").addEventListener("click", volgendeAfbeelding);

function vorigeAfbeelding() {
  huidigeAfbeelding--;
  if (huidigeAfbeelding < 0) {
    huidigeAfbeelding = afbeeldingen.length - 1;
  }
  toonHuidigeAfbeelding();
}

function volgendeAfbeelding() {
  huidigeAfbeelding++;
  if (huidigeAfbeelding >= afbeeldingen.length) {
    huidigeAfbeelding = 0;
  }
  toonHuidigeAfbeelding();
}

function toonHuidigeAfbeelding() {
currentImage.src = afbeelding [huidigeAfbeelding];
}

toonHuidigeAfbeelding()