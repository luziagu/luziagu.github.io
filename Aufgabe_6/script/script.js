var emissionAsia = 16274.1;
var emissionEurop = 4209.3;
var emissionAfrica = 1235.5;
var emissionSouthAmerica = 1262.5;
var emissionNorthAmerica = 6035.6;
var emissionAustralia = 2100.5;
/*Europa*/
function FunctionEurope() {
    document.querySelector(".MainTitle").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector(".NumberEmission").innerHTML = "" + emissionEurop;
    document.querySelector(".TextEmission").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector(".RelativNumber").innerHTML = "" + relativEmissionEurop;
    document.querySelector(".NumberGrowth").innerHTML = "" + EmissionEruopaProzent;
    document.querySelector(".NumberDifference").innerHTML = "" + emissionMinusEurop;
    document.querySelector(".chart").setAttribute('style', 'height:' + relativEmissionEurop + '%');
}
window.addEventListener('load', function () {
    document.querySelector('.europe').addEventListener('click', FunctionEurope);
});
var emissionWorld = emissionAsia + emissionAustralia + emissionNorthAmerica + emissionSouthAmerica + emissionAfrica + emissionEurop;
var relativEmissionEurop = emissionEurop / emissionWorld * 100;
var EmissionEuropa2008 = 4965.7;
var EmissionEuropadifference = emissionEurop - EmissionEuropa2008;
var EmissionEruopaProzent = EmissionEuropadifference / EmissionEuropa2008 * 100;
var emissionMinusEurop = emissionEurop - EmissionEuropa2008;
/*Asien*/
function FunctionAsien() {
    document.querySelector(".MainTitle").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector(".NumberEmission").innerHTML = "" + emissionAsia;
    document.querySelector(".TextEmission").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector(".RelativNumber").innerHTML = "" + relativEmissionAsien;
    document.querySelector(".NumberGrowth").innerHTML = "" + EmissionAsiaProzent;
    document.querySelector(".NumberDifference").innerHTML = "" + emissionMinusAsia;
    document.querySelector(".chart").setAttribute('style', 'height:' + relativEmissionAsien + '%');
}
window.addEventListener('load', function () {
    document.querySelector('.asia').addEventListener('click', FunctionAsien);
});
var relativEmissionAsien = emissionAsia / emissionWorld * 100;
var EmissionAsia2008 = 12954.7;
var EmissionAsiadifference = emissionAsia - EmissionAsia2008;
var EmissionAsiaProzent = EmissionAsiadifference / EmissionAsia2008 * 100;
var emissionMinusAsia = emissionAsia - EmissionAsia2008;
/*Afrika*/
function FunctionAfrika() {
    document.querySelector(".MainTitle").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector(".NumberEmission").innerHTML = "" + emissionAsia;
    document.querySelector(".TextEmission").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector(".RelativNumber").innerHTML = "" + relativEmissionAfrica;
    document.querySelector(".NumberGrowth").innerHTML = "" + EmissionAfricaProzent;
    document.querySelector(".NumberDifference").innerHTML = "" + emissionMinusAfrica;
    document.querySelector(".chart").setAttribute('style', 'height:' + relativEmissionAfrica + '%');
}
window.addEventListener('load', function () {
    document.querySelector('.africa').addEventListener('click', FunctionAfrika);
});
var relativEmissionAfrica = emissionAfrica / emissionWorld * 100;
var EmissionAfrica2008 = 1028;
var EmissionAfricadifference = emissionAfrica - EmissionAfrica2008;
var EmissionAfricaProzent = EmissionAfricadifference / EmissionAfrica2008 * 100;
var emissionMinusAfrica = emissionAfrica - EmissionAfrica2008;
/* Süd-Amerika */
function FunctionSüdAmerika() {
    document.querySelector(".MainTitle").innerHTML = "Carbon Dioxide Emissions in South-America";
    document.querySelector(".NumberEmission").innerHTML = "" + emissionSouthAmerica;
    document.querySelector(".TextEmission").innerHTML = "Emission absolute of South-America in 2018";
    document.querySelector(".RelativNumber").innerHTML = "" + relativEmissionSouthAmerica;
    document.querySelector(".NumberGrowth").innerHTML = "" + EmissionSouthAmericaProzent;
    document.querySelector(".NumberDifference").innerHTML = "" + emissionMinusSouthAmerica;
    document.querySelector(".chart").setAttribute('style', 'height:' + relativEmissionSouthAmerica + '%');
}
window.addEventListener('load', function () {
    document.querySelector('.southamerica').addEventListener('click', FunctionSüdAmerika);
});
var relativEmissionSouthAmerica = emissionSouthAmerica / emissionWorld * 100;
var EmissionSouthAmerica2008 = 1132.6;
var EmissionSouthAmericadifference = emissionSouthAmerica - EmissionSouthAmerica2008;
var EmissionSouthAmericaProzent = EmissionSouthAmericadifference / EmissionSouthAmerica2008 * 100;
var emissionMinusSouthAmerica = emissionSouthAmerica - EmissionSouthAmerica2008;
/* Nord-Amerika */
function FunctionNorthAmerica() {
    document.querySelector(".MainTitle").innerHTML = "Carbon Dioxide Emissions in North-America";
    document.querySelector(".NumberEmission").innerHTML = "" + emissionNorthAmerica;
    document.querySelector(".TextEmission").innerHTML = "Emission absolute of North-America in 2018";
    document.querySelector(".RelativNumber").innerHTML = "" + relativEmissionNorthAmerica;
    document.querySelector(".NumberGrowth").innerHTML = "" + EmissionNorthAmericaProzent;
    document.querySelector(".NumberDifference").innerHTML = "" + emissionMinusNorthAmerica;
    document.querySelector(".chart").setAttribute('style', 'height:' + relativEmissionNorthAmerica + '%');
}
window.addEventListener('load', function () {
    document.querySelector('.northamerica').addEventListener('click', FunctionNorthAmerica);
});
var relativEmissionNorthAmerica = emissionNorthAmerica / emissionWorld * 100;
var EmissionNorthAmerica2008 = 6600.4;
var EmissionNorthAmericadifference = emissionNorthAmerica - EmissionNorthAmerica2008;
var EmissionNorthAmericaProzent = EmissionNorthAmericadifference / EmissionNorthAmerica2008 * 100;
var emissionMinusNorthAmerica = emissionNorthAmerica - EmissionNorthAmerica2008;
/*Australien*/
function FunctionAustralien() {
    document.querySelector(".MainTitle").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector(".NumberEmission").innerHTML = "" + emissionAustralia;
    document.querySelector(".TextEmission").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector(".RelativNumber").innerHTML = "" + relativEmissionAustralia;
    document.querySelector(".NumberGrowth").innerHTML = "" + EmissionAustraliaProzent;
    document.querySelector(".NumberDifference").innerHTML = "" + emissionMinusAustralia;
    document.querySelector(".chart").setAttribute('style', 'height:' + relativEmissionAustralia + '%');
}
window.addEventListener('load', function () {
    document.querySelector('.australia').addEventListener('click', FunctionAustralien);
});
var relativEmissionAustralia = emissionAustralia / emissionWorld * 100;
var EmissionAustralia2008 = 1993;
var EmissionAustraliadifference = emissionAustralia - EmissionAustralia2008;
var EmissionAustraliaProzent = EmissionAustraliadifference / EmissionAustralia2008 * 100;
var emissionMinusAustralia = emissionAustralia - EmissionAustralia2008;
//# sourceMappingURL=script.js.map