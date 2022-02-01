const focusBtn = document.querySelector("#focus-btn");
const relaxBtn = document.querySelector("#relax-btn");
const focusContainer = document.querySelector(".focus-container");
const changeBtn = document.querySelector("#change-button");
const welcome = document.getElementById("welcome");
const purposeQ = document.getElementById("purpose-question");
const purposeBtns = document.getElementById("purpose-btns");
const questionBox = document.querySelector("#question-box");

function readjust() {
    purposeBtns.classList.add("focusedBtns");
    purposeBtns.classList.remove("initial-btns");
    welcome.style.display = "none";
    purposeQ.style.display = "none";
    questionBox.style.margin = "0 auto";
}

focusBtn.addEventListener('click', function() {
    focusContainer.style.display = "flex";
    readjust();
});

relaxBtn.addEventListener('click', function() {
    focusContainer.style.display = "none";
    readjust();
});



changeBtn.addEventListener('click', function() {
    const bgOptions = ["url('IMG_3641.jpg')", "url('IMG_4140.jpg')", "url('IMG_5630.jpg')", "url('IMG_5923.jpg')", "url('IMG_7649.jpg')"];
        document.body.style.background = bgOptions[Math.floor((Math.random() * bgOptions.length))];
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        document.body.style.height = "100vh";
});



const timeDisplay = document.querySelector("#time-display");
const timeSelect = document.querySelectorAll(".time-option");

let countdown = 0; //variable to set/clear intervals
let fakeDuration = 600;
let workTime = 5;
let seconds = 600; //seconds left on clock

timeSelect.forEach(option => {
    option.addEventListener('click', function() {
        fakeDuration = this.getAttribute("data-time");
        workTime = this.getAttribute("data-time") / 60;
        seconds = workTime * 60;
        timeDisplay.textContent = 
            `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;
    });
});