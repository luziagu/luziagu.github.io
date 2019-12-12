var playbutton = ["F.mp3", "G.mp3", "snare.mp3"];
var intervalloop;
var record = false;
window.addEventListener("load", function () {
    document.querySelector(".button1").addEventListener("mousedown", function () { playSample("kick.mp3"); });
    document.querySelector(".button2").addEventListener("mousedown", function () { playSample("snare.mp3"); });
    document.querySelector(".button3").addEventListener("mousedown", function () { playSample("hihat.mp3"); });
    document.querySelector(".button4").addEventListener("mousedown", function () { playSample("F.mp3"); });
    document.querySelector(".button5").addEventListener("mousedown", function () { playSample("G.mp3"); });
    document.querySelector(".button6").addEventListener("mousedown", function () { playSample("A.mp3"); });
    document.querySelector(".button7").addEventListener("mousedown", function () { playSample("C.mp3"); });
    document.querySelector(".button8").addEventListener("mousedown", function () { playSample("laugh-1.mp3"); });
    document.querySelector(".button9").addEventListener("mousedown", function () { playSample("laugh-2.mp3"); });
    document.querySelector("#play").addEventListener("click", PlaySong);
    document.querySelector("#microphone").addEventListener("click", Recordplaybutton);
    document.querySelector("#trash").addEventListener("click", deleteplaybutton);
});
function playSample(myMP3) {
    var sound = new Audio("assets/" + myMP3);
    sound.play();
    console.log(playbutton);
    if (record == true) {
        playbutton.push(myMP3);
    }
}
function PlaySong() {
    var index = 0;
    record = false;
    if (document.getElementById("play").classList.contains("fa-play")) {
        document.getElementById("play").classList.remove("fa-play");
        document.getElementById("play").classList.add("fa-stop");
        intervalloop = setInterval(Christmas, 400);
    }
    else {
        document.getElementById("play").classList.remove("fa-stop");
        document.getElementById("play").classList.add("fa-play");
        clearInterval(intervalloop);
    }
    function Christmas() {
        playSample(playbutton[index]);
        index += 1;
        if (index >= playbutton.length) {
            index = 0;
        }
    }
}
function deleteplaybutton() {
    playbutton = [];
}
function Recordplaybutton() {
    record = true;
}
//# sourceMappingURL=DrumPad-8.js.map