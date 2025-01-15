function getComputerChoice() {
  const choice = Math.random();

  if(choice <= 0.33) return "rock";
  else if(choice > 0.33 && choice < 0.66) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  return prompt("Select rock, paper or scissors:\n> ").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  let humanWinMessage = `You win! ${humanChoice} beats ${computerChoice}!`;
  let computerWinMessage = `You lose! ${computerChoice} beats ${humanChoice}!`;
  let tieMessage = `Tie! You both chose ${humanChoice}`;

  if(humanChoice == computerChoice) {
    return tieMessage;
  }
  else if(humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    return humanWinMessage;
  }
  else if(humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    return humanWinMessage;
  }
  else if(humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    return humanWinMessage;
  }
  else {
    computerScore++;
    return computerWinMessage;
  }
}

function playGame(rounds) {

  for(let i = 1; i <= rounds; i++) {
    const roundResult = playRound(getHumanChoice(), getComputerChoice());
    console.log(`Round ${i}\n> ${roundResult}`);
  }

  if(humanScore > computerScore) {
    console.log(`\nFinal Score\nHuman: ${humanScore}\nComputer: ${computerScore}\n-- You Win! --`);
  } else if(humanScore === computerScore) {
    console.log(`\nFinal Score\nHuman: ${humanScore}\nComputer: ${computerScore}\n-- Tie! --`);
  } else {
      console.log(`\nFinal Score\nHuman: ${humanScore}\nComputer: ${computerScore}\n-- You Lose! --`);
  }
}

let humanScore = 0, computerScore = 0;
playGame(5);