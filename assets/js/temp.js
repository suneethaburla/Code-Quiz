let viewHighScoreEl = $("#viewHighScore");
let gameStartDivEl = $("#gameStartDiv");
let welcomeEl = $("#welcome");
let instructionsEl = $("#instructions");
let startButtonEl = $("#startButton");
let nextButtonEl = $("#nextButton");
let timeEl = $("#time");
let questionsDivEl = $("#questionsDiv");
console.log(questionsDivEl);
let questionEl = $("#question");
let answerChoicesEl = $("#answerChoices");
let userChoice = document.querySelector('input[type=radio]');
let userChoice1 = $(".choice");
let choiceEl = $(".choice");
let choiceEl1 = $("#choice1");
let choiceEl2 = $("#choice2");
let choiceEl3 = $("#choice3");
let choiceEl4 = $("#choice4");
let resultsDivEl = $("#resultsDiv");
let msgEl = $("#msg");
let highScoresDivEl = $("#highScoresDiv");
let highScoresBtnEl = $("#highScoresBtn");


// Initializing the variables
let score = 0;
let secondsLeft = 90;
let highScore = 0;
let questionIndex;
let totQuestions = questions.length;

questionsDivEl.style.display = "none";
//On load function, hide all the divs and show gameStart Div
// window.addEventListener("load", function () {
//     questionsDivEl.style.display = "none";
//     highScoresDivEl.style.display = "none";
//     resultsDivEl.style.display = "none";
//     gameStartDivEl.style.display = "block";

// });
// Click eventListener to start Quiz
startButtonEl.addEventListener("click", startGame());

// start game
function startGame() {
    gameStartDiv.style.display = "none";
    resultsDivEl.style.display = "none";
    questionsDiv.style.display = "block";
    highScoresDivEl.style.display = "none";
    questionIndex = 0;
    startTimer();
    setNextQuestion();
}

highScoresBtnEl.addEventListener("click", function (event) {
    displayHighScore()
})
viewHighScoreEl.addEventListener("click", function (event) {
    displayHighScore()
})

//Start Timer function
function startTimer() {
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

}

function decrementTimer() {
    secondsLeft=secondsLeft-5;

}

function displayHighScore() {
let initials = localStorage.getItem("initials");
let highScore = localStorage.getItem("highScore");
displayHighScore.textContent = initials + ":" + highScore;
}

function displayMessage(type, message) {
    msgEl.textContent = message;
    msgEl.setAttribute("class", type);
  }


function setNextQuestion() {
    showQuestion(questions[questionIndex])   
}

// Click event listener to nextButton
nextButtonEl.addEventListener("click", function (event) {
    showQuestion(questions[questionIndex]) 
})

// Click event listener to check answer
userChoice.addEventListener("click", function (event) {
    alert("your clicked me")
    if(!userChoice) {
        alert("please select an answer");
        return;
    }
    let userAnswer = userChoice.value;
    if(questions[questionIndex].answer === userAnswer) {
        console.log("correct");
        score++;
    }
    else {
        console.log("wrong");
        decrementTimer()
    }
    // userChoice.checked = false;
    questionIndex++;
    console.log(questionIndex);
    if(questionIndex === totQuestions -1) {
        nextButtonEl.textContent = "Finish";
    }
    if(questionIndex === totQuestions) {
        questionsDiv.style.display = "none";
        gameStartDiv.style.display = "none";
        resultsDiv.style.display = "block";
        highScoresDivEl.style.display = "none";
        localStorage.setItem("initials", initials);
        localStorage.setItem("highScore", highScore);
        renderLastRegistered();

    }
})


function showQuestion(question) {
    // need to write the below cleaner
    questionEl.textContent = question.question;
    choiceEl1.textContent =question.choices[0];
    choiceEl2.textContent =question.choices[1];
    choiceEl3.textContent =question.choices[2];
    choiceEl4.textContent =question.choices[3];
    
    }

function checkAnswer() {

            if (event.target.matches("button")) {
                console.log("hello");
                if (choices[event.target.id] === questions[i].answer) {
                    resultEl.textContent = "correct!"
                    score += score;
                }
                else {
                    resultEl.textContent = "wrong!"
                }
            }

}
