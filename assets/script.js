const bodyElement = document.body;
const startBtnElement = document.getElementById("startQuiz")
const introMain = document.getElementById("welcome")
const timer = document.getElementById("timer")
const questionOne = [
    "What header do you start a with?",
    "h3",
    "h1",
    "h4",
    "h2",
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
    "Python",
    "FORTRAN",
]
const questionFour = [
    "What is the basic setup for a HTML?",
    "<head><body><header>",
    "<header><body><head>",
    "<body><head><header>",
    "<header><head><body>",
]
const questionFive = [
    "An array index always starts with which number?",
    "1",
    "0",
    "Numbers?",
    "10",
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
        timerSpan.textContent = timerValue;

        if (timerValue === 0) {
            clearInterval(timer);

            const questionCardID = document.getElementById("questions");
            bodyElement.removeChild(questionCardID);

            const gameOverContainer = constructGameOver();
            bodyElement.appendChild(gameOverContainer);
          } else if (timerValue < 0) {
            clearInterval(timer);

            const questionCardID = document.getElementById("questions");
            bodyElement.removeChild(questionCardID)
            
            const gameOverContainer = constructGameOver();
            bodyElement.appendChild(gameOverContainer);
            timerSpan.textContent = 0;
          } else if (questionValue === 6) {
              clearInterval(timer);
          }
    };
    const timer = setInterval(countdown, 1000);
};

const constructQuestion = () => {
    const questionCardDiv = document.createElement("div");
    questionCardDiv.setAttribute("id", "questions");

    const h2Element = document.createElement("h2")
    h2Element.textContent = questionOne[0];

    const btnElement1 = document.createElement("button");
    btnElement1.setAttribute("id", "Answer-One")
    btnElement1.textContent = questionOne[1];
    const btnElement2 = document.createElement("button");
    btnElement2.setAttribute("id", "Answer-Two");
    btnElement2.textContent = questionOne[2];
    const btnElement3 = document.createElement("button");
    btnElement3.setAttribute("id", "Answer-Three");
    btnElement3.textContent = questionOne[3];
    const btnElement4 = document.createElement("button");
    btnElement4.setAttribute("id", "Answer-Four");
    btnElement4.textContent = questionOne[4];

    questionCardDiv.append(
        h2Element,
        btnElement1,
        btnElement2,
        btnElement3,
        btnElement4,
    );

    questionValue += 1;
       const Answer1 = () => {
        h2Element.textContent = questionTwo[0];
        btnElement1.textContent = questionTwo[1];
        btnElement2.textContent = questionTwo[2];
        btnElement3.textContent = questionTwo[3];
        btnElement4.textContent = questionTwo[4];
    
        btnElement2.removeEventListener("click", incorrect);
        btnElement3.removeEventListener("click", Answer1);
    
        btnElement2.addEventListener("click", Answer2);
        btnElement3.addEventListener("click", incorrect);
        questionValue += 1;
       };

       const Answer2 = () => {
        h2Element.textContent = questionThree[0];
        btnElement1.textContent = questionThree[1];
        btnElement2.textContent = questionThree[2];
        btnElement3.textContent = questionThree[3];
        btnElement4.textContent = questionThree[4];
    
        btnElement2.removeEventListener("click", Answer2);
        btnElement4.removeEventListener("click", incorrect);
    
        btnElement2.addEventListener("click", incorrect);
        btnElement4.addEventListener("click", Answer3);
        questionValue += 1;
      };

      const Answer3 = () => {
        h2Element.textContent = questionFour[0];
        btnElement1.textContent = questionFour[1];
        btnElement2.textContent = questionFour[2];
        btnElement3.textContent = questionFour[3];
        btnElement4.textContent = questionFour[4];
    
        btnElement1.removeEventListener("click", incorrect);
        btnElement4.removeEventListener("click", Answer3);
    
        btnElement1.addEventListener("click", Answer4);
        btnElement4.addEventListener("click", incorrect);
        questionValue += 1;
      };

      const Answer4 = () => {
        h2Element.textContent = questionFive[0];
        btnElement1.textContent = questionFive[1];
        btnElement2.textContent = questionFive[2];
        btnElement3.textContent = questionFive[3];
        btnElement4.textContent = questionFive[4];
    
        btnElement1.removeEventListener("click", Answer4);
        btnElement2.removeEventListener("click", incorrect);
    
        btnElement1.addEventListener("click", incorrect);
        btnElement2.addEventListener("click", Answer5);
        questionValue += 1;
      };   
      const Answer5 = () => {
        const questionCardID = document.getElementById("questions");
        bodyElement.removeChild(questionCardID);
    
        const endGameContainer = endGameCard();
        return endGameContainer;
        questionValue += 1;
      };
      
      const incorrect = () => {
        timerValue -= 10;
        if (timerValue === 0) {
          clearInterval(timer);
        }
        if (incorrect) {
          alert("Incorrect! Guess again!");
        }
      };

    btnElement1.addEventListener("click", incorrect);
    btnElement2.addEventListener("click", Answer1);
    btnElement3.addEventListener("click", incorrect);
    btnElement4.addEventListener("click", incorrect);

    return questionCardDiv;
};
const endGameCard = () => {
    const endGameDiv = document.createElement("div");
    endGameDiv.setAttribute("id", "end-game");
  
    const h2EndGame = document.createElement("h2");
    h2EndGame.textContent = "Congratulations!";
  
    const enterName = document.createElement("input");
    enterName.setAttribute("id", "player-name");
    enterName.setAttribute("placeholder", "Enter your Name");
  
    const lineBreak = document.createElement("p");
  
    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("id", "submit-btn");
    submitBtn.textContent = "Submit Score";
    submitBtn.addEventListener("click", submitScore);
  
    endGameDiv.append(h2EndGame, enterName, lineBreak, submitBtn);
  
    return endGameDiv;
  };
    
let submitScore = (event) => {
    event.preventDefault();
    const name = document.querySelector("#player-name").value;
    const score = timerValue;
  
    const finalScore = [name, score];
  
    const highScore = getHighScores();
    highScore.push(finalScore);
    localStorage.setItem("highScores", JSON.stringify(highScore));
  
    location.href ="https://KingArthur0877.github.io/homework_4/high-score.html"
    };    

const constructGameOver = () => {
        const gameOverDiv = document.createElement("div");
        gameOverDiv.setAttribute("id", "game-over");
      
        const h2GameOverElement = document.createElement("h2");
        h2GameOverElement.textContent = "GAME OVER";
      
        const btnElementTryAgain = document.createElement("button");
        btnElementTryAgain.setAttribute("id", "try-again");
        btnElementTryAgain.textContent = "Try Again";
      
        gameOverDiv.append(h2GameOverElement, btnElementTryAgain);
        btnElementTryAgain.addEventListener("click", tryAgain);
      
        return gameOverDiv;
      };

const startGame = () => {

    bodyElement.removeChild(introMain);
 
    startTimer();
  
  
    const questionsDiv = constructQuestion();
    bodyElement.appendChild(questionsDiv);
  };
  
  const tryAgain = () => {
    const gameOverID = document.getElementById("game-over");
  
    bodyElement.removeChild(gameOverID);
    bodyElement.appendChild(introMain);
    timerValue = 60;
    questionValue = 0;
  };

  startBtnElement.addEventListener("click", startGame);