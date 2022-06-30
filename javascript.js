function computerPlay() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

playerSelection = "roCK";

function playRound(playerSel, computerPlay) {
  const PS = playerSel.toUpperCase();
  console.log(PS, computerPlay);
  if (PS == computerPlay) {
    console.log("It's a Tie!!");
  } else if (PS == "ROCK") {
    if (computerPlay == "SCISSORS") {
      console.log("You win!!");
    } else {
      console.log("You lose!!");
    }
  } else if (PS == "SCISSORS") {
    if (computerPlay == "ROCK") {
      console.log("You lose!!");
    } else {
      console.log("You win!!");
    }
  } else {
    if (PS == "PAPER") {
      if (computerPlay == "ROCK") {
        console.log("You win!!");
      } else {
        console.log("You lose!!");
      }
    }
  }
}

playRound(playerSelection, computerPlay());
