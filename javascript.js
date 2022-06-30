function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    playerSell = prompt("Rock, Paper, Scissors?");
    [playerScore, computerScore] = playRound(
      playerSell,
      computerPlay(),
      playerScore,
      computerScore
    );

    console.log("You: " + playerScore + "    Computer: " + computerScore);
  }
}

function computerPlay() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

playerSelection = "roCK";

function playRound(playerSel, computerPlay, pScore, cScore) {
  const PS = playerSel.toUpperCase();
  console.log(PS, computerPlay);
  if (PS == computerPlay) {
    console.log("It's a Tie!!");
  } else if (PS == "ROCK") {
    if (computerPlay == "SCISSORS") {
      console.log("You win!!");
      pScore++;
    } else {
      console.log("You lose!!");
      cScore++;
    }
  } else if (PS == "SCISSORS") {
    if (computerPlay == "ROCK") {
      console.log("You lose!!");
      cScore++;
    } else {
      console.log("You win!!");
      pScore++;
    }
  } else {
    if (PS == "PAPER") {
      if (computerPlay == "ROCK") {
        console.log("You win!!");
        pScore++;
      } else {
        console.log("You lose!!");
        cScore++;
      }
    }
  }
  return [pScore, cScore];
}

game();
