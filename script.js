let currentRound = 1;
let currentHumanScore = 0, currentComputerScore = 0;

let scoreTitle = document.querySelector("#score-title");
scoreTitle.innerHTML = `Round ${currentRound}`;

let humanScoreEl = document.querySelector("#human-score");
let computerScoreEl = document.querySelector("#computer-score");

updateScore(currentHumanScore, currentComputerScore);

function getComputerChoice() {
  const choice = Math.random();

  if(choice <= 0.33) return "rock";
  else if(choice > 0.33 && choice < 0.66) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  return prompt("Select rock, paper or scissors:\n> ").toLowerCase();
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  let humanWinMessage = `You win! ${humanChoice} beats ${computerChoice}!`;
  let computerWinMessage = `You lose! ${computerChoice} beats ${humanChoice}!`;
  let tieMessage = `Tie! You both chose ${humanChoice}`;

  if(humanChoice == computerChoice) {
    console.log(tieMessage);
  }
  else if(
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    updateScore(currentHumanScore + 1, currentComputerScore);
    console.log(humanWinMessage);
  }
  else {
    updateScore(currentHumanScore, currentComputerScore + 1);
    console.log(computerWinMessage);
  }
}

function updateScore(humanScore, computerScore) {
  currentHumanScore = humanScore;
  currentComputerScore = computerScore;

  humanScoreEl.innerHTML = currentHumanScore;
  computerScoreEl.innerHTML = currentComputerScore;

  checkVictory(currentHumanScore, "Human");
  checkVictory(currentComputerScore, "Computer");
}

function checkVictory(score, name) {
  if(score == 5) {
    alert(`${name} WON`);
    currentComputerScore = 0;
    currentHumanScore = 0;
  } 
}