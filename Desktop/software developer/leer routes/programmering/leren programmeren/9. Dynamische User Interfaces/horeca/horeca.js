const fris = 2.00;
const bier = 2.50;
const wijn = 3.00;
var bonnetje = [];

while (true) {
    let product = prompt("Welk product wil je toevoegen? (of typ 'stop' om te stoppen)");
    if (product == "stop") {
        break;
    } else {
        let productRegex = /^(fris|bier|wijn)$/;
        if (!productRegex.test(product)) {
            alert("Dit ken ik niet.");
        } else {
            let aantal = prompt("Hoeveel " + product + " wil je hebben?");
            if (isNaN(aantal) || aantal <= 0) {
                alert("Voer een geldige hoeveelheid in.");
            } else {
                let gevonden = false;
                for (var i = 0; i < bonnetje.length; i++) {
                    if (bonnetje[i].product == product) {
                        bonnetje[i].aantal = parseInt(bonnetje[i].aantal) + parseInt(aantal);
                        gevonden = true;
                        break;
                    }
                }
                if (!gevonden) {
                    bonnetje.push({ product: product, aantal: aantal });
                }
                alert(aantal + " " + product + " is toegevoegd aan het bonnetje.");
            }
        }
    }
}
if (bonnetje.length > 0) {
    var bonnetjeOutput = "Bonnetje:<br>";
    var totaalprijs = 0;
    for (var i = 0; i < bonnetje.length; i++) {
        var product = bonnetje[i].product;
        var aantal = bonnetje[i].aantal;
        var prijs = 0;
        if (product === "fris") {
            prijs = fris;
        }
        else if (product === "bier") {
            prijs = bier;
        } 
        else if (product === "wijn") {
            prijs = wijn;
        }
        var productTotaal = prijs * aantal;
        bonnetjeOutput += aantal + " " + product + " " + prijs.toFixed(2)  + " " + productTotaal.toFixed(2) + " ";
        totaalprijs += productTotaal;
    }
    bonnetjeOutput += "Totaal: " + " " + totaalprijs.toFixed(2) + " " + " euro";
    document.getElementById("output").innerHTML = bonnetjeOutput;
}