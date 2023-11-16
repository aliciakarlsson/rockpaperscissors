let userChoice = "";
let userScore = 0;
let cpuScore = 0;
let gameActive = true;

const message = document.getElementById('message');
const score = document.getElementById('scoreboard');
const result = document.getElementById('result');
const playAgain = document.getElementById('playagain');

playAgain.addEventListener('click', function(){
    resetGame();
})

function resetGame(){
        userChoice = "";
        userScore = 0;
        cpuScore = 0;
        gameActive = true;
        message.textContent = "";
        score.textContent = "";
        result.textContent = "";
        enableButtons(); //Aktiverar knappar
}

function disableButtons(){
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
}

function enableButtons(){
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
}

const rock = document.getElementById("rock");
rock.addEventListener("click", function () {
    if (!gameActive) return;
    userChoice = "rock";
    playGame();
});

const paper = document.getElementById("paper");
paper.addEventListener("click", function () {
    if (!gameActive) return;
    userChoice = "paper";
    playGame();
});

const scissor = document.getElementById("scissor");
scissor.addEventListener("click", function () {
    if (!gameActive) return;
    userChoice = "scissor";
    playGame();
});

function getCpuChoice() {
  const choices = ["rock", "paper", "scissor"];
  const decide = Math.floor(Math.random() * 3);
  console.log(`datorn valde ${choices[decide]}`);
  return choices[decide];
}

function playGame() {
  let cpuChoice = getCpuChoice();

  if (!gameActive) return;

  if (userChoice === cpuChoice) {
    message.textContent = `You chose ${userChoice}, CPU chose ${cpuChoice}. It's a tie.`
    score.textContent = `You: ${userScore} CPU: ${cpuScore}`;
  } else if (
    (userChoice === "rock" && cpuChoice === "scissor") ||
    (userChoice === "scissor" && cpuChoice === "paper") ||
    (userChoice === "paper" && cpuChoice === "rock")
  ) {
    message.textContent = `You chose ${userChoice}, CPU chose ${cpuChoice}. You won the round!`;
    userScore++;
    score.textContent = `You: ${userScore} CPU: ${cpuScore}`;
  } else if (
    (userChoice === "rock" && cpuChoice === "paper") ||
    (userChoice === "scissor" && cpuChoice === "rock") ||
    (userChoice === "paper" && cpuChoice === "scissor")
  ) {
    message.textContent = `You chose ${userChoice}, CPU chose ${cpuChoice}. CPU won the round!`;
    cpuScore++;
    score.textContent = `You: ${userScore} CPU: ${cpuScore}`;
  }

  if(userScore === 3){
    result.textContent = 'You won the game!';
    disableButtons();
    gameActive = false;
  } else if(cpuScore === 3){
    result.textContent = 'You lost the game.';
    disableButtons();
    gameActive = false;
  }

  
}





