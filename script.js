let userChoice
let userScore = 0;
let cpuScore = 0;
let gameActive = true;

const message = document.getElementById('message');
const score = document.getElementById('scoreboard');
const result = document.getElementById('result');
const playAgain = document.getElementById('playagain');
const userPickElement = document.querySelector('.userpick');
const cpuPickElement = document.querySelector('.cpupick');

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
        userPickElement.innerHTML = "";
        cpuPickElement.innerHTML = "";
        enableButtons();
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
    userChoice = 'images/rock.svg';
    playGame();
});

const paper = document.getElementById("paper");
paper.addEventListener("click", function () {
    if (!gameActive) return;
    userChoice = 'images/hand-regular.svg';
    playGame();
});

const scissor = document.getElementById("scissor");
scissor.addEventListener("click", function () {
    if (!gameActive) return;
    userChoice = "images/scissor.svg";
    playGame();
});

function getCpuChoice() {
  const choices = ['images/rock.svg', 'images/hand-regular.svg', 'images/scissor.svg'];
  const decide = Math.floor(Math.random() * 3);
  console.log(`datorn valde ${choices[decide]}`);
  return choices[decide];
}

function playGame() {
  let cpuChoice = getCpuChoice();

  if (!gameActive) return;

  const userImage = document.createElement('img');
  const cpuImage = document.createElement('img');

    userPickElement.innerHTML = "";
    cpuPickElement.innerHTML = "";

  userImage.src = userChoice;
  cpuImage.src = cpuChoice;

  if (userChoice === cpuChoice) {
    message.textContent = `It's a tie.`
    score.textContent = `You: ${userScore} CPU: ${cpuScore}`;
  } else if (
    (userChoice === "images/rock.svg" && cpuChoice === "images/scissor.svg") ||
    (userChoice === "images/scissor.svg" &&
      cpuChoice === "images/hand-regular.svg") ||
    (userChoice === "images/hand-regular.svg" &&
      cpuChoice === "images/rock.svg")
  ) {
    message.textContent = `You won the round!`;
    userScore++;
    score.textContent = `You: ${userScore} CPU: ${cpuScore}`;
  } else if (
    (userChoice === "images/rock.svg" &&
      cpuChoice === "images/hand-regular.svg") ||
    (userChoice === "images/scissor.svg" && cpuChoice === "images/rock.svg") ||
    (userChoice === "images/hand-regular.svg" && cpuChoice === "images/scissor.svg")
  ) {
    message.textContent = `CPU won the round!`;
    cpuScore++;
    score.textContent = `You: ${userScore} CPU: ${cpuScore}`;
  }

  userPickElement.classList.add('stylepick');
  cpuPickElement.classList.add('stylepick');
  userPickElement.textContent = 'Your pick:';
  userPickElement.appendChild(userImage);
  cpuPickElement.textContent = "CPU's pick:";
  cpuPickElement.appendChild(cpuImage);

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





