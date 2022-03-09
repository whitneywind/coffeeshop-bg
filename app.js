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
    questionBox.style.margin = "50px auto";
}

focusBtn.addEventListener('click', function() {
    focusContainer.style.display = "flex";
    readjust();
    relaxBtn.style.display = "flex";
    relaxBtn.innerHTML = "go to relax mode";
    focusBtn.style.display = "none";
    
});

relaxBtn.addEventListener('click', function() {
    focusContainer.style.display = "none";
    readjust();
    focusBtn.style.display = "flex";
    focusBtn.innerHTML = "go to focus mode";
    relaxBtn.style.display = "none";
});

changeBtn.addEventListener('click', function() {
    const bgOptions = ["url('IMG_3641.jpg')", "url('IMG_4140.jpg')", "url('IMG_5630.jpg')", "url('IMG_5923.jpg')", "url('IMG_7649.jpg')"];
        document.body.style.backgroundImage = bgOptions[Math.floor((Math.random() * bgOptions.length))];

});

// timer functionality

const timerDisplay = document.querySelector("#timer");
const timeSelect = document.querySelectorAll(".time-option");

let countdown = 0; //variable to set/clear intervals
let fakeDuration = 600;
let workTime = 5;
let seconds = 600; //seconds left on clock
let isPaused = true;
let startBtn = document.querySelector("#start-btn");
let resetBtn = document.querySelector(".reset");

timeSelect.forEach(option => {
    option.addEventListener('click', function() {
        fakeDuration = this.getAttribute("data-time");
        workTime = this.getAttribute("data-time") / 60;
        seconds = workTime * 60;
        timeDisplay.textContent = 
            `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;
    });
});

startBtn.addEventListener("click", () => {
    clearInterval(countdown);
    isPaused = !isPaused;
    if (!isPaused) {
    countdown = setInterval(timer, 1000);
    }
})

resetBtn.addEventListener("click", () => {
    clearInterval(countdown);
    seconds = workTime * 60;
    countdown = 0;
    isPaused = true;
})

function timer() {
    seconds--;
    if (seconds < 0) {
        clearInterval(countdown);
        seconds = workTime * 60;
    }
}

function countdownDisplay() {
    let minutes = Math.floor(seconds / 60);
    let remainderSeconds = seconds % 60;
    timerDisplay.textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}

function buttonDisplay() {
    if (isPaused && countdown === 0) {
        startBtn.textContent = "start";
    } else if (isPaused && countdown !== 0) {
        startBtn.textContent = "continue";
    } else {
        startBtn.textContent = "pause";
    }
}

function updateHTML() {
    countdownDisplay();
    buttonDisplay();
}

window.setInterval(updateHTML, 100);

document.onclick = updateHTML;