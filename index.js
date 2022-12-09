// Pulling variables from HTML document
var userScore = document.getElementById('user-score')
var time = document.getElementById('time-left')
var question = document.getElementById('question-text')
var answerOne = document.getElementById('option-one')
var answerTwo = document.getElementById('option-two')
var answerThree = document.getElementById('option-three')
var answerFour = document.getElementById('option-four')
var startBtn = document.getElementById('start-game')
var scoreMessage = document.getElementById('score-message')

// Constructing Game Logic
let currentQuestion = 0;
var score = 0;
var questions = 
[
    {
        question: "What is 3x1?",
        answers: [
            {option: 1, answer: false},
            {option: 3, answer: true},
            {option: 4, answer: false},
            {option: 500, answer: false},
        ]
    },
    {
        question: "What is 4x1?",
        answers: [
            {option: 4, answer: true},
            {option: 3, answer: false},
            {option: 1, answer: false},
            {option: 700, answer: false},
        ]
    },
    {
        question: "What is 5x1?",
        answers: [
            {option: 5, answer: true},
            {option: 4, answer: false},
            {option: 1, answer: false},
            {option: 600, answer: false},
        ]
    },
    {
        question: "What is 6x1?",
        answers: [
            {option: 61, answer: false},
            {option: 6, answer: true},
            {option: 7, answer: false},
            {option: 9000, answer: false},
        ]
    },
]

function remove() {
    startBtn.remove();
}

function nextQuestion() {
    if(currentQuestion>=3){
        return window.location.assign('./highscore.html')
        

    } else {
        currentQuestion++;
        question.innerHTML = questions[currentQuestion].question;
        answerOne.innerHTML = questions[currentQuestion].answers[0].option;
        answerOne.setAttribute("data-answer", questions[currentQuestion].answers[0].answer)
        answerTwo.innerHTML = questions[currentQuestion].answers[1].option;
        answerTwo.setAttribute("data-answer", questions[currentQuestion].answers[1].answer)
        answerThree.innerHTML = questions[currentQuestion].answers[2].option;
        answerThree.setAttribute("data-answer", questions[currentQuestion].answers[2].answer)
        answerFour.innerHTML = questions[currentQuestion].answers[3].option;
        answerFour.setAttribute("data-answer", questions[currentQuestion].answers[3].answer)
    }
}


function beginQuiz(){
    currentQuestion = 0;
    question.innerHTML = questions[currentQuestion].question;
    answerOne.innerHTML = questions[currentQuestion].answers[0].option;
    answerOne.setAttribute("data-answer", questions[currentQuestion].answers[0].answer)
    answerOne.addEventListener('click', function(event) {
        if(event.currentTarget.dataset.answer === 'true') {
            score+= 10;
        } else {
            console.log("Bad Job!")
        }
        userScore.innerHTML = score;
        nextQuestion();
    });

    answerTwo.innerHTML = questions[currentQuestion].answers[1].option;
    answerTwo.setAttribute("data-answer", questions[currentQuestion].answers[1].answer)
    answerTwo.addEventListener('click', function(event) {
        if(event.currentTarget.dataset.answer === 'true') {
            score+= 10;
        } else {
            console.log("Bad Job!")
        }
        userScore.innerHTML = score;
        nextQuestion();

    });

    answerThree.innerHTML = questions[currentQuestion].answers[2].option;
    answerThree.setAttribute("data-answer", questions[currentQuestion].answers[2].answer)
    answerThree.addEventListener('click', function(event) {
        if(event.currentTarget.dataset.answer === 'true') {
            console.log("Good Job")
        } else {
            console.log("Bad Job!")
        }
        nextQuestion();
    });

    answerFour.innerHTML = questions[currentQuestion].answers[3].option;
    answerFour.setAttribute("data-answer", questions[currentQuestion].answers[3].answer)
    answerFour.addEventListener('click', function(event) {
        if(event.currentTarget.dataset.answer === 'true') {
            console.log("Good Job")
        } else {
            console.log("Bad Job!")
        }
        nextQuestion();
    });

}

//Create Event Listeners for Game
startBtn.addEventListener('click', beginQuiz)
//console.log(questions[currentQuestion].answers[1].answer)
