var emissionAsia:number  =16274.1; 

var emissionEurop: number =4209.3; 

var emissionAfrica: number =1235.5;

var emissionSouthAmerica: number =1262.5;

var emissionNorthAmerica: number =6035.6; 

var emissionAustralia: number =2100.5;


/*Europa*/

console.log("Die Emission von Europa ist: " + emissionEurop + " kgCO2");

var emissionWorld: number = emissionAsia + emissionAustralia + emissionNorthAmerica + emissionSouthAmerica + emissionAfrica + emissionEurop;

var relativEmissionEurop: number = emissionEurop / emissionWorld ; 
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit "  + relativEmissionEurop * 100+ " %");

var EmissionEuropa2008: number = 4965.7;
var EmissionEuropadifference: number =  EmissionEuropa2008 - emissionEurop; 
var EmissionEruopaProzent: number = EmissionEuropadifference / EmissionEuropa2008 ;
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + EmissionEruopaProzent * 100 + " % verändert");

var emissionMinusEurop: number = emissionEurop - EmissionEuropa2008;
console.log("2018 im Vergleich zu 2008 sind das " + emissionMinusEurop + " kgCO2");

/*Asien*/ 

console.log("Die Emission von Asien ist:" + emissionAsia + "kgCO2"); 

var relativEmissionAsien: number = emissionAsia / emissionWorld; 
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit "  + relativEmissionAsien * 100 + " %");

var EmissionAsia2008: number = 12954.7; 
var EmissionAsiadifference: number = emissionAsia - EmissionAsia2008 ; 
var EmissionAsiaProzent: number = EmissionAsiadifference / EmissionAsia2008 ; 

console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + EmissionAsiaProzent * 100 + " % verändert");

var emissionMinusAsia: number = emissionAsia - EmissionAsia2008; 
console.log("2018 im Vergleich zu 2008 sind das " + emissionMinusAsia + " kgCO2");

/*Afrika*/

console.log("Die Emission von Afrika ist:" + emissionAfrica + "kgCO2"); 

var relativEmissionAfrica: number = emissionAfrica / emissionWorld; 
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit "  + relativEmissionAfrica *100+ " %");

var EmissionAfrica2008: number = 1028; 
var EmissionAfricadifference: number = emissionAfrica - EmissionAfrica2008; 
var EmissionAfricaProzent: number = EmissionAfricadifference / EmissionAfrica2008; 

console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + EmissionAfricaProzent *100+ " % verändert");

var emissionMinusAfrica: number = emissionAfrica - EmissionAfrica2008; 
console.log("2018 im Vergleich zu 2008 sind das " + emissionMinusAfrica + " kgCO2");

/* Süd-Amerika */


console.log("Die Emission von Süd-Amerika ist:" + emissionSouthAmerica + "kgCO2"); 

var relativEmissionSouthAmerica: number = emissionSouthAmerica/ emissionWorld; 
console.log("Relativ zur Gesamtemission der Welt verursacht Süd-Amerika damit "  + relativEmissionSouthAmerica *100 + " %");

var EmissionSouthAmerica2008: number = 1132.6; 
var EmissionSouthAmericadifference: number = emissionSouthAmerica -EmissionSouthAmerica2008; 
var EmissionSouthAmericaProzent: number = EmissionSouthAmericadifference / EmissionSouthAmerica2008 ; 

console.log("Für Süd-Amerika hat sich 2018 im Vergleich zu 2008 die Emission um " + EmissionSouthAmericaProzent *100 + " % verändert");

var emissionMinusSouthAmerica: number = emissionSouthAmerica - EmissionSouthAmerica2008; 
console.log("2018 im Vergleich zu 2008 sind das " + emissionMinusSouthAmerica + " kgCO2");

/* Nord-Amerika */

console.log("Die Emission von Nord-Amerika ist: " + emissionNorthAmerica + "kgCO2"); 

var relativEmissionNorthAmerica: number = emissionNorthAmerica/ emissionWorld; 
console.log("Relativ zur Gesamtemission der Welt verursacht Nord-Amerika damit "  + relativEmissionNorthAmerica *100 + " %");

var EmissionNorthAmerica2008: number = 6600.4; 
var EmissionNorthAmericadifference: number = EmissionNorthAmerica2008 - emissionNorthAmerica; 
var EmissionNorthAmericaProzent: number = EmissionNorthAmericadifference / EmissionNorthAmerica2008 ; 

console.log("Für Nord-Amerika hat sich 2018 im Vergleich zu 2008 die Emission um " + EmissionNorthAmericaProzent *100 + " % verändert");

var emissionMinusNorthAmerica: number = emissionNorthAmerica - EmissionNorthAmerica2008; 
console.log("2018 im Vergleich zu 2008 sind das " + emissionMinusNorthAmerica + " kgCO2");

/*Australien*/

console.log("Die Emission von Australien ist: " + emissionAustralia + " kgCO2"); 

var relativEmissionAustralia: number = emissionAustralia/ emissionWorld; 
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit "  + relativEmissionAustralia *100 + " %");

var EmissionAustralia2008: number = 1993; 
var EmissionAustraliadifference: number = emissionAustralia - EmissionAustralia2008; 
var EmissionAustraliaProzent: number = EmissionAustraliadifference / EmissionAustralia2008 ; 

console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + EmissionAustraliaProzent *100 + " % verändert");

var emissionMinusAustralia: number = emissionAustralia - EmissionAustralia2008; 
console.log("2018 im Vergleich zu 2008 sind das " + emissionMinusAustralia + " kgCO2");


