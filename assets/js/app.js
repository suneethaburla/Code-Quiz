
//create all the elements
let viewHighScore = $("#viewHighScore");
let gameStartDiv = $("#gameStartDiv");
let welcome = $("#welcome");
let instructions = $("#instructions");
let startButton = $("#startButton");
let nextButton = $("#nextButton");
let time = $("#time");
let questionsDiv = $("#questionsDiv");
let title = $("#title");
let choiceButton1 = $("#choiceButton1");
let choiceButton2 = $("#choiceButton2");
let choiceButton3 = $("#choiceButton3");
let choiceButton4 = $("#choiceButton4");
let answerChoices = $("#answerChoices");
let choiceButton =$(".choiceButton");
let resultsDiv = $("#resultsDiv");
let totalScore = $("#totalScore");
let highScoresDiv = $("#highScoresDiv");
let displayHighScore = $("#displayHighScore");
let highScoresBtn = $("#highScoresBtn");
let initialsInput = $("#initialsInput");
let submitButton = $("#submit");
let msg = $("#msg");
let restartButton = $("#restartButton");


// Initializing the variables
let score;
let allottedTime =30;
let secondsLeft;
let highScore;
let questionIndex;
let totQuestions = questions.length;



// On load function, hide all the divs and show gameStart Div
window.addEventListener("load", function () {
    questionsDiv.hide();
    resultsDiv.hide();
    highScoresDiv.hide();
    gameStartDiv.show();
});

startButton.click(function () {
    questionsDiv.show();
    resultsDiv.hide();
    highScoresDiv.hide();
    gameStartDiv.hide();
    secondsLeft=30;
    score=0;
    questionIndex = 0;
    startTimer();
    setNextQuestion();
});

//Start Timer function
function startTimer() {
    let timerInterval = setInterval(function () {
    

        secondsLeft--;
        time.text(secondsLeft);

        if (secondsLeft < 0) {
            clearInterval(timerInterval);
            endGame();
        }

    }, 1000);
}

function decrementTimer() {
    secondsLeft=secondsLeft-5;

}
function stopTimer() {
    secondsLeft = 0;
    time.text(secondsLeft);

}

function setNextQuestion() {
    showQuestion(questions[questionIndex]);
}

function showQuestion(question) {
    title.text((parseInt(questionIndex) + 1) + ". " + question.question);
    choiceButton1.text(question.choices[0]);
    choiceButton2.text(question.choices[1]);
    choiceButton3.text(question.choices[2]);
    choiceButton4.text(question.choices[3]);
        
}

choiceButton.on("click", function(){
    let clickedEl = $(this);
    userChoice = $(clickedEl).text();
    checkAnswer();
   }
    
  );

  function checkAnswer(timerInterval) {
    if (userChoice===questions[questionIndex].answer) {
        alert("correct");
        score++
        
    }
    else{
     alert("wrong");
     decrementTimer();
     
    }
    timeLeft=secondsLeft;
    timeTaken=allottedTime-timeLeft;
    questionIndex++
    if (questionIndex<totQuestions){
        setNextQuestion();
    }
    else {
        endGame();
    }
}

function endGame() {
    questionsDiv.hide();
    highScoresDiv.hide();
    gameStartDiv.hide();
    resultsDiv.show();
    stopTimer();
    totalScore.text(`You answered ${score} out of ${totQuestions} correct in ${timeTaken} seconds`);

}

function saveScore() {
    let highScore = score;
    localStorage.setItem("highScore", highScore);

}


  
submitButton.on("click", function(event){
  event.preventDefault();

  let initialsInput = $("#initialsInput").value;
  
  if (initialsInput === "") {
    displayMessage("error", "Initials cannot be blank");
  } else {
    displayMessage("success", "Thank you for taking the quiz!");

  // Save email and password to localStorage and render the last registered.
  localStorage.setItem("initials", initialsInput);
  localStorage.setItem("highScore", highScore);
  }
  highScoresDiv.show();
  resultsDiv.hide();
  questionsDiv.hide();
  gameStartDiv.hide();
});

function displayMessage(type, message) {
    msg.attr("class", type);
    msg.text(message);
  }

function showHighScores() {
let scoreDisplay = localStorage.getItem("highScore");
let initialsDisplay = localStorage.getItem("initials");
displayHighScore.text(` ${initialsDisplay} : ${displayHighScore} `);
}

restartButton.on("click", function(event){
    questionsDiv.show();
    resultsDiv.hide();
    highScoresDiv.hide();
    gameStartDiv.hide();
    secondsLeft=60;
    score=0;
    questionIndex = 0;
    startTimer();
    setNextQuestion();

});

viewHighScore.on("click", function(event){
    console.log("hello");
    showHighScores()
});


