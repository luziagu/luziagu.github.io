var emissionAsia:number  =16274.1; 

var emissionEurop: number =4209.3; 

var emissionAfrica: number =1235.5;

var emissionSouthAmerica: number =1262.5;

var emissionNorthAmerica: number =6035.6; 

var emissionAustralia: number =2100.5;


/*Europa*/
function FunctionEurope () {
document.querySelector(".MainTitle").innerHTML = "Carbon Dioxide Emissions in Europe";
document.querySelector(".NumberEmission").innerHTML = "" + emissionEurop;
document.querySelector(".TextEmission"). innerHTML = "Emission absolute of Europe in 2018"; 
document.querySelector(".RelativNumber"). innerHTML = "" + relativEmissionEurop.toFixed(2) + " %"; 
document.querySelector(".NumberGrowth"). innerHTML = "" + EmissionEruopaProzent.toFixed(2) +" %"; 
document.querySelector(".NumberDifference"). innerHTML = "" + emissionMinusEurop.toFixed(2); 
document.querySelector(".chart").setAttribute('style', 'height:' + relativEmissionEurop + '%');
}

window.addEventListener('load', function () {
    document.querySelector('.europe').addEventListener('click', FunctionEurope);
});


var emissionWorld: number = emissionAsia + emissionAustralia + emissionNorthAmerica + emissionSouthAmerica + emissionAfrica + emissionEurop;
var relativEmissionEurop: number = emissionEurop / emissionWorld * 100 ; 
var EmissionEuropa2008: number = 4965.7;
var EmissionEuropadifference: number = emissionEurop - EmissionEuropa2008 ; 
var EmissionEruopaProzent: number = EmissionEuropadifference / EmissionEuropa2008 *100 ;
var emissionMinusEurop: number = emissionEurop - EmissionEuropa2008;


/*Asien*/ 

function FunctionAsien () {
    document.querySelector(".MainTitle").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector(".NumberEmission").innerHTML = "" + emissionAsia;
    document.querySelector(".TextEmission"). innerHTML = "Emission absolute of Asia in 2018"; 
    document.querySelector(".RelativNumber"). innerHTML = "" + relativEmissionAsien.toFixed(2)+ " %"; 
    document.querySelector(".NumberGrowth"). innerHTML = "" + EmissionAsiaProzent.toFixed(2)+ " %"; 
    document.querySelector(".NumberDifference"). innerHTML = "" + emissionMinusAsia.toFixed(2); 
    document.querySelector(".chart").setAttribute('style', 'height:' + relativEmissionAsien + '%');
    }
    window.addEventListener('load', function () {
        document.querySelector('.asia').addEventListener('click', FunctionAsien);
    });
    

var relativEmissionAsien: number = emissionAsia / emissionWorld * 100; 
var EmissionAsia2008: number = 12954.7; 
var EmissionAsiadifference: number = emissionAsia - EmissionAsia2008 ; 
var EmissionAsiaProzent: number = EmissionAsiadifference / EmissionAsia2008 * 100 ; 
var emissionMinusAsia: number = emissionAsia - EmissionAsia2008; 


/*Afrika*/

function FunctionAfrika () {
    document.querySelector(".MainTitle").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector(".NumberEmission").innerHTML = "" + emissionAfrica;
    document.querySelector(".TextEmission"). innerHTML = "Emission absolute of Africa in 2018"; 
    document.querySelector(".RelativNumber"). innerHTML = "" + relativEmissionAfrica.toFixed(2)+ " %"; 
    document.querySelector(".NumberGrowth"). innerHTML = "" + EmissionAfricaProzent.toFixed(2)+ " %"; 
    document.querySelector(".NumberDifference"). innerHTML = "" + emissionMinusAfrica.toFixed(2); 
    document.querySelector(".chart").setAttribute('style', 'height:' + relativEmissionAfrica + '%');
    }
    window.addEventListener('load', function () {
        document.querySelector('.africa').addEventListener('click', FunctionAfrika);
    });

var relativEmissionAfrica: number = emissionAfrica / emissionWorld *100 ; 
var EmissionAfrica2008: number = 1028; 
var EmissionAfricadifference: number = emissionAfrica - EmissionAfrica2008; 
var EmissionAfricaProzent: number = EmissionAfricadifference / EmissionAfrica2008 * 100 ; 
var emissionMinusAfrica: number = emissionAfrica - EmissionAfrica2008; 


/* Süd-Amerika */

function FunctionSüdAmerika () {
    document.querySelector(".MainTitle").innerHTML = "Carbon Dioxide Emissions in South-America";
    document.querySelector(".NumberEmission").innerHTML = "" + emissionSouthAmerica;
    document.querySelector(".TextEmission"). innerHTML = "Emission absolute of South-America in 2018"; 
    document.querySelector(".RelativNumber"). innerHTML = "" + relativEmissionSouthAmerica.toFixed(2)+ " %"; 
    document.querySelector(".NumberGrowth"). innerHTML = "" + EmissionSouthAmericaProzent.toFixed(2)+ " %"; 
    document.querySelector(".NumberDifference"). innerHTML = "" + emissionMinusSouthAmerica.toFixed(2); 
    document.querySelector(".chart").setAttribute('style', 'height:' + relativEmissionSouthAmerica + '%');
    }
    window.addEventListener('load', function () {
        document.querySelector('.southamerica').addEventListener('click', FunctionSüdAmerika);
    });


var relativEmissionSouthAmerica: number = emissionSouthAmerica/ emissionWorld * 100; 
var EmissionSouthAmerica2008: number = 1132.6; 
var EmissionSouthAmericadifference: number = emissionSouthAmerica - EmissionSouthAmerica2008; 
var EmissionSouthAmericaProzent: number = EmissionSouthAmericadifference / EmissionSouthAmerica2008 * 100; 
var emissionMinusSouthAmerica: number = emissionSouthAmerica - EmissionSouthAmerica2008; 

/* Nord-Amerika */

function FunctionNorthAmerica () {
    document.querySelector(".MainTitle").innerHTML = "Carbon Dioxide Emissions in North-America";
    document.querySelector(".NumberEmission").innerHTML = "" + emissionNorthAmerica;
    document.querySelector(".TextEmission"). innerHTML = "Emission absolute of North-America in 2018"; 
    document.querySelector(".RelativNumber"). innerHTML = "" + relativEmissionNorthAmerica.toFixed(2)+ " %"; 
    document.querySelector(".NumberGrowth"). innerHTML = "" + EmissionNorthAmericaProzent.toFixed(2)+ " %"; 
    document.querySelector(".NumberDifference"). innerHTML = "" + emissionMinusNorthAmerica.toFixed(2); 
    document.querySelector(".chart").setAttribute('style', 'height:' + relativEmissionNorthAmerica + '%');
    }
    window.addEventListener('load', function () {
        document.querySelector('.northamerica').addEventListener('click', FunctionNorthAmerica);
    });


var relativEmissionNorthAmerica: number = emissionNorthAmerica/ emissionWorld * 100; 
var EmissionNorthAmerica2008: number = 6600.4; 
var EmissionNorthAmericadifference: number =  emissionNorthAmerica - EmissionNorthAmerica2008; 
var EmissionNorthAmericaProzent: number = EmissionNorthAmericadifference / EmissionNorthAmerica2008 * 100; 
var emissionMinusNorthAmerica: number = emissionNorthAmerica - EmissionNorthAmerica2008; 

/*Australien*/
 
function FunctionAustralien () {
    document.querySelector(".MainTitle").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector(".NumberEmission").innerHTML = "" + emissionAustralia;
    document.querySelector(".TextEmission"). innerHTML = "Emission absolute of Australia in 2018"; 
    document.querySelector(".RelativNumber"). innerHTML = "" + relativEmissionAustralia.toFixed(2)+ " %"; 
    document.querySelector(".NumberGrowth"). innerHTML = "" + EmissionAustraliaProzent.toFixed(2)+ " %"; 
    document.querySelector(".NumberDifference"). innerHTML = "" + emissionMinusAustralia.toFixed(2); 
    document.querySelector(".chart").setAttribute('style', 'height:' + relativEmissionAustralia + '%');
    }
    window.addEventListener('load', function () {
        document.querySelector('.australia').addEventListener('click', FunctionAustralien);
    });

var relativEmissionAustralia: number = emissionAustralia/ emissionWorld *100; 
var EmissionAustralia2008: number = 1993; 
var EmissionAustraliadifference: number = emissionAustralia - EmissionAustralia2008; 
var EmissionAustraliaProzent: number = EmissionAustraliadifference / EmissionAustralia2008 *100; 
var emissionMinusAustralia: number = emissionAustralia - EmissionAustralia2008; 