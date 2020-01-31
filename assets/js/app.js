console.log(questions);
//On load function
let gameStartEl = document.getElementById("welcome");
let instructionsEl = document.getElementById("instructions");
let startButtonEl = document.getElementById("startButton");

window.addEventListener("load", function(event) {
    gameStartEl.textContent = "Welcome to Code Quiz!";
    instructionsEl.textContent = "Try to answer the following code related questions in the time limit. Keep in mind that the incorrect answers will penalize your time by 5 seconds";
    startButtonEl.textContent = "Start Quiz!";
});

//Timer function
let timeEl = document.getElementById("time");
let mainEl = document.getElementById("main");

var secondsLeft = 90;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      endGame();
    }

  }, 1000);
}
function endGame() {
    timeEl.textContent = " ";
  
    var imgEl = document.createElement("img");
  
    imgEl.setAttribute("src", "images/image_1.jpg");
    mainEl.appendChild(imgEl);
  
  }
  
  setTime();