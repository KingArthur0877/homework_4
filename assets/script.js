const bodyElement = document.body;
const startBtnElement = document.getElementById("startQuiz")
const welcomeMain = document.getElementById("welcome")
const timer = document.getElementById("timer")
const questionOne = [
    "What header do you start a with?",
    "h1",
    "h2",
    "h3",
    "h4",
];
const questionTwo = [
    "What does HTML stand for?",
    "Help The Mushrooms Live",
    "Hypertext Markup Language",
    "High Markup Language",
    "Hypertext Makeup Language",
]
const questionThree = [
    "What was the first coding language?",
    "HTML",
    "CSS",
    "FORTRAN",
    "Python",
]
const questionFour = [
    "What is the basic setup for a HTML?",
    "<head><body><header>",
    "<header><body><head>",
    "<body><head><header>",
    "<header><head><body>",
]
const questionFive = [
    "Arrays are Zero Based in JavaScript",
    "True",
    "False",
]
let timerValue = 60;
let questionValue = 0;

const getHighScore = () => {
    const highScore = localStorage.getItem("high-score");

    if(highScore) {
        return JSON.parse(highScore);
    } else {
        return [];
    }
};

const startTimer = () => {
    const countdown = () => {
        timerValue -= 1;
        
    }
}