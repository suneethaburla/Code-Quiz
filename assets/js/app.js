

//create all the elements in the gameStartDiv
let gameStartDivEl = document.getElementById("gameStartDiv");
let welcomeEl = document.getElementById("welcome");
let instructionsEl = document.getElementById("instructions");
let startButtonEl = document.getElementById("startButton");
let questionsDivEl = document.getElementById("questionsDiv");
let titleDivEl = document.getElementById("titleDiv");
let answerChoicesEl = document.getElementById("answerChoices");



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
    setNextQuestion();
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

function setNextQuestion() {
    for (let i = 0; i < questions.length; i++) {
        titleDivEl.textContent = (i + 1) + '. ' + questions[i].title;
        questions[i].choices.forEach(choice => {
            const choiceEl = document.createElement("li");
            choiceEl.textContent = choice;
            titleDivEl.appendChild(choiceEl);
            const resultEl = document.createElement("p");

        })
        choiceEl.addEventListener("click", function (event) {
            if (event.target.matches("li")) {
                if (choices[event.target.parentElement.id] === questions[i].answer) {
                    resultEl.textContent = "correct!"
                }
                else {
                    resultEl.textContent = "wrong!"
                }
            }
        })
    }
}


// function checkAnswer() {
//     choiceEl.addEventListener("click", function(event) {
//         if(event.target.matches("li")) {
//             if (choices[event.target.parentElement.id] === questions[i].answer){
//                 resultEl.textContent = "correct!"
//             }
//             else {
//                 resultEl.textContent = "wrong!"
//             }
//           }
//     })
// }


// var div = document.createElement('div');
// div.textContent = "Sup, y'all?";
// div.setAttribute('class', 'note');
// document.body.appendChild(div);