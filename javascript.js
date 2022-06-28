function computerPlay() {
  choices = ["Rock", "Paper", "Scissors"];
  computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
}

computerPlay();
