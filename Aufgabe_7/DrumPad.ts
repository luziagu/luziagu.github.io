//7.1 Buttons

window.addEventListener("load",function(){

    document.querySelector(".button1").addEventListener("mousedown", function(){play("kick.mp3");});
    document.querySelector(".button2").addEventListener("mousedown", function(){play("snare.mp3");});
    document.querySelector(".button3").addEventListener("mousedown", function(){play("hihat.mp3");});
    document.querySelector(".button4").addEventListener("mousedown", function(){play("F.mp3");});;
    document.querySelector(".button5").addEventListener("mousedown", function(){play("G.mp3");});;
    document.querySelector(".button6").addEventListener("mousedown", function(){play("A.mp3");});;
    document.querySelector(".button7").addEventListener("mousedown", function(){play("C.mp3");});;
    document.querySelector(".button8").addEventListener("mousedown", function(){play("laugh-1.mp3");});;
    document.querySelector(".button9").addEventListener("mousedown", function(){play("laugh-2.mp3");});;

    document.querySelector(".PlayButton").addEventListener("click", PlaySong);

}); 

function play(myMP3: string) {

    var sound:HTMLAudioElement = new Audio("assets/" + myMP3);
        sound.play();


}

//7.2 Arrays

var PlayButton: string[]= ["assets/laugh-1.mp3", "assets/kick.mp3", "assets/kick.mp3","assets/hihat.mp3","assets/kick.mp3","assets/kick.mp3","assets/hihat.mp3","assets/kick.mp3","assets/kick.mp3","assets/hihat.mp3","assets/laugh-1.mp3"]
function playbeat () {
    var sound = setInterval(ChristmasPlay  ,400);
    var index: number = 0;
    

    function ChristmasPlay(){
    var Beat:HTMLAudioElement = new Audio(PlayButton[index]);
    index = index +1; 
    Beat.play(); }



;}


