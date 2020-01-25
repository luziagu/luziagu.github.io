

console.log("Script Datei wurde geladen"); 



interface SpielKarte {
    wertigkeit: string;
    farbe: string; 
}


var karte:  SpielKarte [] = [

    {farbe: "red", wertigkeit: "1" },
    {farbe: "red", wertigkeit: "2" },  
    {farbe: "red", wertigkeit: "3" },  
    {farbe: "red", wertigkeit: "4" },  
    {farbe: "red", wertigkeit: "5" },    
    {farbe: "red", wertigkeit: "6" },  
    {farbe: "red", wertigkeit: "7" },  
    {farbe: "red", wertigkeit: "8" },
    
    {farbe: "green", wertigkeit: "1" },
    {farbe: "green", wertigkeit: "2" }, 
    {farbe: "green", wertigkeit: "3" }, 
    {farbe: "green", wertigkeit: "4" },   
    {farbe: "green", wertigkeit: "5" }, 
    {farbe: "green", wertigkeit: "6" }, 
    {farbe: "green", wertigkeit: "7" }, 
    {farbe: "green", wertigkeit: "8" }, 

    {farbe: "blue", wertigkeit: "1" },
    {farbe: "blue", wertigkeit: "2" },
    {farbe: "blue", wertigkeit: "3" }, 
    {farbe: "blue", wertigkeit: "4" },
    {farbe: "blue", wertigkeit: "5" },
    {farbe: "blue", wertigkeit: "6" },
    {farbe: "blue", wertigkeit: "7" },
    {farbe: "blue", wertigkeit: "8" },

    {farbe: "yellow", wertigkeit: "1" },
    {farbe: "yellow", wertigkeit: "2" },
    {farbe: "yellow", wertigkeit: "3" },
    {farbe: "yellow", wertigkeit: "4" },
    {farbe: "yellow", wertigkeit: "5" },
    {farbe: "yellow", wertigkeit: "6" },
    {farbe: "yellow", wertigkeit: "7" },
    {farbe: "yellow", wertigkeit: "8" }

];



var spielerHand: SpielKarte [] = [];
var gegnerHand: SpielKarte [] = [];
var ablegeStapel: SpielKarte[] = [];  //Arrays des Spilers, Gegner, Kartenstapel und Ablegestapel


var cardDOMElement: HTMLElement;
var spielerDOMElememt: HTMLElement;
var gegnerDOMElememt: HTMLElement;
var spielStartDOMElement: HTMLElement; 
var gegnerZiehenDOMElement: HTMLElement; 
var ablegeStapelDOMElement: HTMLElement; // Variablen werden deklariert die später die DOM-Elemente speichern


//laden des DOMS 
window.addEventListener("load", function(): void {

    spielStartDOMElement = document.querySelector(".SpielStartButton");
    cardDOMElement = document.querySelector(".Stapel");
    spielerDOMElememt = document.querySelector(".Spieler");
    gegnerDOMElememt = document.querySelector(".Spielgegner");
    gegnerZiehenDOMElement = document.querySelector(".gegnerKartenButton");
    ablegeStapelDOMElement = document.querySelector(".ablegeStapel"); 


    //Event-Listener der auf den Button für den Spielstart verweist, durch klicken lässt sich das Spiel starten
    spielStartDOMElement.addEventListener("click", function(): void {

        mischeKarten();
        spielKarten(); 
        ablegeStapelPush (); 


    });

    //Event-Listener der auf den DIV des Kartenstapels zugreift und zwei funktionen bei klich aufruft 
    cardDOMElement.addEventListener("click", function(): void {
        spielerHandStapel();
        spielKarten(); 

    });

    


    gegnerZiehenDOMElement.addEventListener("click", function(): void {
        /*gegnerHandStapel();*/
        spielKarten(); 

    });

 
    
    spielKarten();
}); 



// Funktion, die eine Schleife für das Array des Kartenstapels setzt und so die 32 Karten aufeinander legt 
function spielKarten(): void {
  

    for (let index: number = 0;  index < karte.length;  index++) {
        console.log(karte[index].wertigkeit);
        
        cardDOMElement.innerHTML = "<div class='front' style='background-color: " + karte[index].farbe + " '> " 
                                    + karte[index].wertigkeit +  "</div>";               
        
    }  

   
}



function spielerHandStapel(): void {


    var letzteKarteVomStapel = karte.pop();
    spielerHand.push(letzteKarteVomStapel); //immmer die letzte Karte des Kartenstapels wird aus dem Array gelöscht und in die Spielerhand gepusht

    var element: HTMLElement = document.createElement("div"); //erstellen eines Div-Elements für die ins neue Array gepushten Karten 
    element.classList.add(".kartenWrapper");

    var randomId: string = (Math.random() * 10000).toFixed(0);
    console.log(randomId);

    element.innerHTML += "<span class='front spielerCard' id='uniqueID" + randomId + "'style='background-color: "
     + letzteKarteVomStapel.farbe + " '> " + "<span class='wertigkeit'>" + letzteKarteVomStapel.wertigkeit  + "</span>" + "</span>";


    spielerDOMElememt.appendChild(element);


    //Bei klick auf die Karten des spielers sollen die Karten gepusht werden 
    spielerDOMElememt.querySelector("#uniqueID" + randomId).addEventListener("click", function(): void {
        console.log("ich wurde geklickt: " + randomId);

        ablegeStapelPush (); 

       
    });

    console.log("austeilen");
    
}



/*function gegnerHandStapel(): void {

    var letzteKarteVomStapel = karte.pop();
    gegnerHand.push(letzteKarteVomStapel); 
    gegnerDOMElememt.innerHTML += "<div class='front gegnerCard' style='background-color: " + letzteKarteVomStapel.farbe + " '> " 
    + letzteKarteVomStapel.wertigkeit +  "</div>"; 


}*/

function mischeKarten(): void {

    //Die Karten des Kartenstapels werden hier bei klick auf den Start-Button gemischelt. 

    var tmp, rand;
    for (var i: number = 0; i < karte.length; i++) {
      rand = Math.floor(Math.random() * karte.length);
      tmp = karte[i]; 
      karte[i] = karte[rand]; 
      karte[rand] = tmp;
    }

    console.log("mischen"); 
}



function ablegeStapelPush (): void {

    
    ablegeStapel.push(karte[karte.length - 1]); 
    karte.splice(karte.length - 1, 1); //die erste Karte vom Kartenstapel wird in das Array vom Ablegstapel gepusht. 

    

    ablegeStapelDOMElement.innerHTML = "<div class='front' style='background-color: " +  " '> " 
    + ablegeStapel +  "</div>";               

 

    console.log(ablegeStapel); 
    /*
    gegnerDOMElememt.innerHTML += "<div class='front gegnerCard' style='background-color: " + kartenSpieler.farbe + " '> " 
    + kartenSpieler.wertigkeit +  "</div>"; */

}