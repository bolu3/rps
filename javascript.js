function computerPlay() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  return computerChoice;
}

playerSelection = "roCK";

function playRound(playerSel, computerPlay) {
  const a = playerSel.toUpperCase();
  console.log(a);
}

computerPlay();
playRound(playerSelection, computerPlay());
