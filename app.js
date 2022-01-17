// i'll eventually add something useful here
let changeBtn = document.getElementById("change-button");

changeBtn.addEventListener("click", bgChange);

function bgChange() {
    document.body.style.backgroundImage = "white";
}