
//create all the elements
let viewHighScoreEl = document.getElementById("viewHighScore");
let gameStartDivEl = document.getElementById("gameStartDiv");
let welcomeEl = document.getElementById("welcome");
let instructionsEl = document.getElementById("instructions");
let startButtonEl = document.getElementById("startButton");
let nextButtonEl = document.getElementById("nextButton");
let timeEl = document.getElementById("time");
let questionsDivEl = document.getElementById("questionsDiv");
let questionDivEl = document.getElementById("questionDiv");
let questionEl = document.getElementById("question");
let answerChoicesEl = document.getElementById("answerChoices");
let userChoice = document.querySelector('input[type=radio]');
let choiceEl = document.getElementsByClassName("choice");
let choiceEl1 = document.getElementById("choice1");
let choiceEl2 = document.getElementById("choice2");
let choiceEl3 = document.getElementById("choice3");
let choiceEl4 = document.getElementById("choice4");
let resultsDivEl = document.getElementById("resultsDiv");
let msgEl = document.getElementById("msg");
let highScoresDivEl = document.getElementById("highScoresDiv");
let highScoresBtnEl = document.getElementById("highScoresBtn");


// Initializing the variables
let score = 0;
let secondsLeft = 90;
let highScore = 0;
let questionIndex;
let totQuestions = questions.length;


//On load function, hide all the divs and show gameStart Div
window.addEventListener("load", function () {
    questionsDivEl.style.display = "none";
    highScoresDivEl.style.display = "none";
    resultsDivEl.style.display = "none";
    gameStartDivEl.style.display = "block";

});

// Click eventListener to start Quiz
startButtonEl.addEventListener("click", function (event) {
    gameStartDiv.style.display = "none";
    resultsDivEl.style.display = "none";
    questionsDiv.style.display = "block";
    highScoresDivEl.style.display = "none";
    questionIndex = 0;
    startTimer();
    setNextQuestion();
});

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
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
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
    if(!userChoice) {
        alert("please select an answer");
        return;
    }
    let userAnswer = userChoice.nodeValue;
    if(questions[questionIndex].answer === userAnswer) {
        console.log("correct");
        displayMessage("success", "Registered successfully");
        score++;
    }
    else {
        console.log("wrong");
        displayMessage("error", "Email cannot be blank");
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
