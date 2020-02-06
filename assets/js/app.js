
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
let msg = $("#msg");
let highScoresDiv = $("#highScoresDiv");
let highScoresBtn = $("#highScoresBtn");

// Initializing the variables
let score = 0;
let secondsLeft = 90;
let highScore = 0;
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
    questionIndex = 0;
    startTimer();
    setNextQuestion();
});

//Start Timer function
function startTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        time.text(secondsLeft);

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endGame();
        }

    }, 1000);
}
function endGame() {
    time.text("0");

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

$(".choiceButton").on("click", function(){
    let ans = this;
    console.log(ans);
   ans.text();
    
  });