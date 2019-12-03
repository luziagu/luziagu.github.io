window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("click", play);
});
function play() {
    var sound = new Audio("assets/kick.mp3");
    sound.play();
}
//# sourceMappingURL=Drum.pad.js.map