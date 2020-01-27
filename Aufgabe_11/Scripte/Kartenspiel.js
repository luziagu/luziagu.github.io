console.log("skript verknüpft");
var cardDOMElement;
var playedcardsDOMElement;
var spielerDOMElement;
var gegnerDOMElement;
var startButton;
var spielerkartenButton;
var gegenerkartenButton;
var uebereinstimmung = false;
var kartenBlatt;
var spielerHand;
var gegnerHand;
var ablegeStapel;
window.addEventListener("load", function () {
    cardDOMElement = document.querySelector(".kartenblatt");
    playedcardsDOMElement = document.querySelector(".ablegestapel");
    spielerDOMElement = document.querySelector(".spieler");
    gegnerDOMElement = document.querySelector(".gegner");
    startButton = document.querySelector("#start");
    Initialiserung();
    AktualisiereKartenstapel();
    cardDOMElement.addEventListener("click", function () {
        SpielerZiehtKarteVonStapel();
        AktualisiereKartenstapel();
        Gegnerzug();
    });
    startButton.addEventListener("click", function () {
        Initialiserung();
        mischeKarten();
        for (var index = 0; index < 3; index++) {
            SpielerZiehtKarteVonStapel();
            GegnerZiehtKarteVonStapel();
        }
        DeckeObersteKarteAuf();
        AktualisiereKartenstapel();
        AktualisiereAblagestapel();
    });
});
function AktualisiereKartenstapel() {
    var lezteKarteAufStapel = kartenBlatt[kartenBlatt.length - 1];
    cardDOMElement.innerHTML = "<div class='cardface cardback' </div>";
}
function Initialiserung() {
    kartenBlatt = [
        { farbe: "red", wertigkeit: "1", uniqueId: 0 },
        { farbe: "red", wertigkeit: "2", uniqueId: 0 },
        { farbe: "red", wertigkeit: "3", uniqueId: 0 },
        { farbe: "red", wertigkeit: "4", uniqueId: 0 },
        { farbe: "red", wertigkeit: "5", uniqueId: 0 },
        { farbe: "red", wertigkeit: "6", uniqueId: 0 },
        { farbe: "red", wertigkeit: "7", uniqueId: 0 },
        { farbe: "red", wertigkeit: "8", uniqueId: 0 },
        { farbe: "blue", wertigkeit: "1", uniqueId: 0 },
        { farbe: "blue", wertigkeit: "2", uniqueId: 0 },
        { farbe: "blue", wertigkeit: "3", uniqueId: 0 },
        { farbe: "blue", wertigkeit: "4", uniqueId: 0 },
        { farbe: "blue", wertigkeit: "5", uniqueId: 0 },
        { farbe: "blue", wertigkeit: "6", uniqueId: 0 },
        { farbe: "blue", wertigkeit: "7", uniqueId: 0 },
        { farbe: "blue", wertigkeit: "8", uniqueId: 0 },
        { farbe: "yellow", wertigkeit: "1", uniqueId: 0 },
        { farbe: "yellow", wertigkeit: "2", uniqueId: 0 },
        { farbe: "yellow", wertigkeit: "3", uniqueId: 0 },
        { farbe: "yellow", wertigkeit: "4", uniqueId: 0 },
        { farbe: "yellow", wertigkeit: "5", uniqueId: 0 },
        { farbe: "yellow", wertigkeit: "6", uniqueId: 0 },
        { farbe: "yellow", wertigkeit: "7", uniqueId: 0 },
        { farbe: "yellow", wertigkeit: "8", uniqueId: 0 },
        { farbe: "green", wertigkeit: "1", uniqueId: 0 },
        { farbe: "green", wertigkeit: "2", uniqueId: 0 },
        { farbe: "green", wertigkeit: "3", uniqueId: 0 },
        { farbe: "green", wertigkeit: "4", uniqueId: 0 },
        { farbe: "green", wertigkeit: "5", uniqueId: 0 },
        { farbe: "green", wertigkeit: "6", uniqueId: 0 },
        { farbe: "green", wertigkeit: "7", uniqueId: 0 },
        { farbe: "green", wertigkeit: "8", uniqueId: 0 }
    ];
    spielerHand = [];
    gegnerHand = [];
    ablegeStapel = [];
    cardDOMElement.innerHTML = "";
    playedcardsDOMElement.innerHTML = "";
    spielerDOMElement.innerHTML = "";
    gegnerDOMElement.innerHTML = "";
}
function AktualisiereAblagestapel() {
    var obersteKarte = ablegeStapel[ablegeStapel.length - 1];
    playedcardsDOMElement.innerHTML = "<div class='cardface' style='background-color:" + obersteKarte.farbe + "'>" + "<span class='wertigkeit'>" + obersteKarte.wertigkeit + "</span>" + "<span class=' wertigkeitUmgedreht'>" + obersteKarte.wertigkeit + "</span>" + "</div>";
}
function Gegnerzug() {
    setTimeout(function () {
        for (var i = 0; i < gegnerHand.length; i++) {
            if (pruefeUebereinstimmung(gegnerHand[i]) == true) {
                ablegeStapel.push(gegnerHand[i]);
                gegnerHand.splice(i, 1);
                gegnerDOMElement.removeChild(gegnerDOMElement.firstChild);
                AktualisiereAblagestapel();
                if (gegnerHand.length == 0) {
                    gegnerSieg();
                }
                return;
            }
        }
        GegnerZiehtKarteVonStapel();
    }, 2000);
}
function pruefeUebereinstimmung(geklickteKarte) {
    var letzteKarteAufAblegestapel = ablegeStapel[ablegeStapel.length - 1];
    if (geklickteKarte.wertigkeit == letzteKarteAufAblegestapel.wertigkeit) {
        return true;
    }
    else if (geklickteKarte.farbe == letzteKarteAufAblegestapel.farbe) {
        return true;
    }
    return false;
}
function SpielerZiehtKarteVonStapel() {
    var letzteKarteVomStapel = kartenBlatt.pop();
    var randomId = Math.random() * 10000;
    var randomIdText = randomId.toFixed(0);
    letzteKarteVomStapel.uniqueId = randomId;
    spielerHand.push(letzteKarteVomStapel);
    var element = document.createElement("div");
    element.classList.add(".kartenwrapper");
    element.setAttribute("style", "float: left");
    element.innerHTML += "<div class='cardface spielerkarten' id='uniqueID" + randomIdText + "' style=' background-color:" + letzteKarteVomStapel.farbe + "'>" + "<span class=' wertigkeit'>" + letzteKarteVomStapel.wertigkeit + "</span>" + "<span class=' wertigkeitUmgedreht'>" + letzteKarteVomStapel.wertigkeit + "</span>" + "</div>";
    spielerDOMElement.appendChild(element);
    AktualisiereKartenstapel();
    spielerDOMElement.querySelector("#uniqueID" + randomIdText).addEventListener("click", function () {
        for (var i = 0; i < spielerHand.length; i++) {
            if (spielerHand[i].uniqueId == randomId) {
                var geklickteKarte = spielerHand[i];
                if (pruefeUebereinstimmung(geklickteKarte) == true) {
                    spielerHand.splice(i, 1);
                    ablegeStapel.push(geklickteKarte);
                    spielerDOMElement.removeChild(element);
                    AktualisiereAblagestapel();
                    if (spielerHand.length == 0) {
                        spielerSieg();
                        return; //Spielt Gegnerzug nicht aus 
                    }
                    Gegnerzug();
                    break; //
                }
            }
        }
    });
    console.log("austeilen");
}
function GegnerZiehtKarteVonStapel() {
    var letzteKarteVomStapel = kartenBlatt.pop();
    gegnerHand.push(letzteKarteVomStapel);
    gegnerDOMElement.innerHTML += "<div class='cardface cardback'></div>";
    AktualisiereKartenstapel();
    console.log("austeilen");
}
function mischeKarten() {
    var tmp, rand;
    for (var i = 0; i < kartenBlatt.length; i++) {
        rand = Math.floor(Math.random() * kartenBlatt.length);
        tmp = kartenBlatt[i];
        kartenBlatt[i] = kartenBlatt[rand];
        kartenBlatt[rand] = tmp;
    }
    console.log("gemischt");
}
function DeckeObersteKarteAuf() {
    var obersteKarte = kartenBlatt.pop();
    ablegeStapel.push(obersteKarte);
}
function spielerSieg() {
    alert("YEAYYY! Du hast gewonnen!");
}
function gegnerSieg() {
    alert("Leider hast du verloren. Probiere es noch einmal!");
}
//# sourceMappingURL=Kartenspiel.js.map