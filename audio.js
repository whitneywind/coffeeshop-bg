let rainAudio = new Audio();
// rainAudio.play();
// rainAudio.pause();
rainAudio.addEventListener("canplay", e => {
    rainAudio.play();
})

// audio controls
let a = document.getElementById("audio-input");
a.onclick = function(e) {
    let t = this.checked === true;
    document.getElementById(this.value)[t ? "play" : "pause"]();
    this.checked = t ? true : false;
}