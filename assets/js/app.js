

//create all the elements in the gameStartDiv
let gameStartDivEl = document.getElementById("gameStartDiv");
let welcomeEl = document.getElementById("welcome");
let instructionsEl = document.getElementById("instructions");
let startButtonEl = document.getElementById("startButton");
let questionsDivEl = document.getElementById("questionsDiv");


//On load function
window.addEventListener("load", function (event) {
    //textContent for all elements in the gameStartDiv
    questionsDiv.style.display = "none";
    welcomeEl.textContent = "Welcome to Code Quiz!";
    instructionsEl.textContent = "Try to answer the following code related questions in the time limit. Keep in mind that the incorrect answers will penalize your time by 5 seconds";
    startButtonEl.textContent = "Start Quiz!";

});

//Start Timer function
let timeEl = document.getElementById("time");
let mainEl = document.getElementById("main");

var secondsLeft = 180;
startButtonEl.addEventListener("click", function (event) {
    gameStartDiv.style.display = "none";
    questionsDiv.style.display = "block";
    setTime();
    showQuestion();
});

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endGame();
        }

    }, 1000);
}
function endGame() {
    timeEl.textContent = "0";

    var imgEl = document.createElement("img");

    imgEl.setAttribute("src", "images/image_1.jpg");
    mainEl.appendChild(imgEl);

}

function showQuestion() {
    for(let i=0;i<questions.length;i++) {
        console.log(questions[i]);
    }
}

