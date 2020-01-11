window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["Erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            alert("Neue Aufgabe: " + wildcard);
        }
    });
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=playgroud-artyom-script.js.map