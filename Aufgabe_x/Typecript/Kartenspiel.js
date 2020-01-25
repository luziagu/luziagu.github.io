console.log("Script Datei wurde geladen");
var farbeRed = "red";
var farbeGreen = "green";
var farbeBlue = "blue";
var farbeYellow = "yellow";
var karte = [
    { farbe: "red", wertigkeit: "1" },
    { farbe: "red", wertigkeit: "2" },
    { farbe: "red", wertigkeit: "3" },
    { farbe: "red", wertigkeit: "4" },
    { farbe: "red", wertigkeit: "5" },
    { farbe: "red", wertigkeit: "6" },
    { farbe: "red", wertigkeit: "7" },
    { farbe: "red", wertigkeit: "8" },
    { farbe: "green", wertigkeit: "1" },
    { farbe: "green", wertigkeit: "2" },
    { farbe: "green", wertigkeit: "3" },
    { farbe: "green", wertigkeit: "4" },
    { farbe: "green", wertigkeit: "5" },
    { farbe: "green", wertigkeit: "6" },
    { farbe: "green", wertigkeit: "7" },
    { farbe: "green", wertigkeit: "8" },
    { farbe: "blue", wertigkeit: "1" },
    { farbe: "blue", wertigkeit: "2" },
    { farbe: "blue", wertigkeit: "3" },
    { farbe: "blue", wertigkeit: "4" },
    { farbe: "blue", wertigkeit: "5" },
    { farbe: "blue", wertigkeit: "6" },
    { farbe: "blue", wertigkeit: "7" },
    { farbe: "blue", wertigkeit: "8" },
    { farbe: "yellow", wertigkeit: "1" },
    { farbe: "yellow", wertigkeit: "2" },
    { farbe: "yellow", wertigkeit: "3" },
    { farbe: "yellow", wertigkeit: "4" },
    { farbe: "yellow", wertigkeit: "5" },
    { farbe: "yellow", wertigkeit: "6" },
    { farbe: "yellow", wertigkeit: "7" },
    { farbe: "yellow", wertigkeit: "8" }
];
var spielerHand = [];
var gegnerHand = [];
var ablegeStapel = [];
var cardDOMElement;
var spielerDOMElememt;
var gegnerDOMElememt;
var spielStartDOMElement;
var gegnerZiehenDOMElement;
var ablegeStapelDOMElement;
window.addEventListener("load", function () {
    spielStartDOMElement = document.querySelector(".SpielStartButton");
    cardDOMElement = document.querySelector(".Stapel");
    spielerDOMElememt = document.querySelector(".Spieler");
    gegnerDOMElememt = document.querySelector(".Spielgegner");
    gegnerZiehenDOMElement = document.querySelector(".gegnerKartenButton");
    ablegeStapelDOMElement = document.querySelector(".ablegeStapel");
    spielStartDOMElement.addEventListener("click", function () {
        mischeKarten();
        ausTeilen();
        spielKarten();
    });
    cardDOMElement.addEventListener("click", function () {
        spielerHandStapel();
        spielKarten();
    });
    gegnerZiehenDOMElement.addEventListener("click", function () {
        /*gegnerHandStapel();*/
        spielKarten();
    });
    cardDOMElement.addEventListener("click", function () {
        console.log("Ich wurde geklickt");
        spielKarten();
    });
    spielKarten();
});
function spielKarten() {
    for (var index = 0; index < karte.length; index++) {
        console.log(karte[index].wertigkeit);
        cardDOMElement.innerHTML = "<div class='front' style='background-color: " + karte[index].farbe + " '> "
            + karte[index].wertigkeit + "</div>";
    }
}
function spielerHandStapel() {
    var letzteKarteVomStapel = karte.pop();
    spielerHand.push(letzteKarteVomStapel);
    var index = spielerHand.length;
    var element = document.createElement("div");
    element.classList.add(".kartenWrapper");
    var randomId = (Math.random() * 10000).toFixed(0);
    console.log(randomId);
    element.innerHTML += "<span class='front spielerCard' id='uniqueID" + randomId + "'style='background-color: "
        + letzteKarteVomStapel.farbe + " '> " + "<span class='wertigkeit'>" + letzteKarteVomStapel.wertigkeit + "</span>" + "</span>";
    spielerDOMElememt.appendChild(element);
    spielerDOMElememt.querySelector("#uniqueID" + randomId).addEventListener("click", function () {
        console.log("ich wurde geklickt: " + randomId);
        if(checkCardDataValid(index))
            ablegeStapelPush(index, element);
    });
    console.log("austeilen");
}
/*function gegnerHandStapel(): void {

    var letzteKarteVomStapel = karte.pop();
    gegnerHand.push(letzteKarteVomStapel);
    gegnerDOMElememt.innerHTML += "<div class='front gegnerCard' style='background-color: " + letzteKarteVomStapel.farbe + " '> "
    + letzteKarteVomStapel.wertigkeit +  "</div>";


}*/
function mischeKarten() {
    var tmp, rand;
    for (var i = 0; i < karte.length; i++) {
        rand = Math.floor(Math.random() * karte.length);
        tmp = karte[i];
        karte[i] = karte[rand];
        karte[rand] = tmp;
    }
    console.log("mischen");
}
function ablegeStapelPush(index, element) {
    document.getElementsByClassName("ablegeStapel").item(0).innerHTML = element.innerHTML;
    element.innerHTML = ""
    ablegeStapel.push(spielerHand[index -1]);
    spielerHand[index -1] = null
    /*
    gegnerDOMElememt.innerHTML += "<div class='front gegnerCard' style='background-color: " + kartenSpieler.farbe + " '> "
    + kartenSpieler.wertigkeit +  "</div>"; */
}
//# sourceMappingURL=Kartenspiel.js.map

function ausTeilen(){
    var temp = null;
    var foo = 0;
    var domPlayer = spielerDOMElememt;
    var domGegner = gegnerDOMElememt;
    for(var i = 0; i < 3; i++){
        //first iteration for playerHand
        temp = karte.pop();
        spielerHand.push(temp);
        ausTeilenMainPart(temp,domPlayer)

        // second iteration for enemyHand
        temp = karte.pop();
        gegnerHand.push(temp);
        ausTeilenMainPart(temp, domGegner)
    }
    ausTeilenCloseToEnd();
return true;
}

function ausTeilenCloseToEnd(){
    var kartePop = karte.pop();
    document.getElementsByClassName("ablegeStapel").item(0).innerHTML ="<span class='front spielerCard' id='uniqueID'style='background-color: "
        + kartePop.farbe + " '> " + "<span class='wertigkeit'>" + kartePop.wertigkeit + "</span>" + "</span>";

    ablegeStapel.push(kartePop);

}
function ausTeilenMainPart(temp, dom) {
    var index = spielerHand.length;
    var element = document.createElement("div");
    element.classList.add(".kartenWrapper");
    var randomId = (Math.random() * 10000).toFixed(0);
    console.log(randomId);
    element.innerHTML += "<span class='front spielerCard' id='uniqueID" + randomId + "'style='background-color: "
        + temp.farbe + " '> " + "<span class='wertigkeit'>" + temp.wertigkeit + "</span>" + "</span>";

    dom.appendChild(element);
    dom.querySelector("#uniqueID" + randomId).addEventListener("click", function () {
        console.log("ich wurde geklickt: " + randomId);
        if(checkCardDataValid(index))
            ablegeStapelPush(index, element);
    });
    return true;
}


function checkCardDataValid(index){
    if(spielerHand[index -1].wertigkeit == ablegeStapel[ablegeStapel.length -1].wertigkeit || spielerHand[index-1].farbe == ablegeStapel[ablegeStapel.length -1].farbe){

        return true;
    } else {
        alert("Das geht nicht");
        return false;

    }
}