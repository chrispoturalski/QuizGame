// Pulling variables from HTML document
var score = document.getElementById('user-score');
var time = document.getElementById('time-left');
var question = document.getElementById('question-text');
var answerOne = document.getElementById('option-one');
var answerTwo = document.getElementById('option-two');
var answerThree = document.getElementById('option-three');
var answerFour = document.getElementById('option-four');
var previous = document.getElementById('previous');
var next = document.getElementById('next');
var submit = document.getElementById('submit');

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
            {option: 51, answer: false},
            {option: 4, answer: false},
            {option: 5, answer: true},
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
