var args = process.argv;

// Welcome
console.log('\nWelcome to Rock, Paper, Scissors!');

// Variable declarations
const READLINE = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
let continuePlaying;
let playerChoice;
let computerChoice;
let result;
let sessionOutcomes = {
  playerWins: 0,
  computerWins: 0,
  draws: 0
};

// Function declarations
function prompt(msg) {
  console.log(`=> ${msg}`);
}

function userChoose() {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  return READLINE.question().toLowerCase();
}

function randomChoice() {
  let randIndex = Math.floor(Math.random() * (VALID_CHOICES.length));
  return VALID_CHOICES[randIndex];
}

function winLoseOrDraw(playerChoice, computerChoice) {
  // Returns array in the form of [outcome, console_message]
  // E.g. ['win', 'You win!']
  if (playerChoice === computerChoice) {
    return ['draw', "It's a draw!"];
  } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')) {
    return ['win', 'You win!'];
  } else {
    return ['lose', 'Drats! You lost :('];
  }
}

function displayScoreboard() {
  console.log('\n');
  prompt('~SCOREBOARD~');
  prompt(`Player wins: ${sessionOutcomes.playerWins}`);
  prompt(`Computer wins: ${sessionOutcomes.computerWins}`);
  prompt(`Draws: ${sessionOutcomes.draws}`);
  console.log('\n');
}

function updateScoreboard(result) {
  if (result === 'win') {
    sessionOutcomes.playerWins += 1;
  } else if (result === 'lose') {
    sessionOutcomes.computerWins += 1;
  } else {
    sessionOutcomes.draws += 1;
  }
}

// If a numeric argument was passed into the program,
// use the number to execute n number of speed rounds
if (args.length === 2) {
  console.log("Pssst...if you pass an integer as an argument when running rps.js from the terminal, we'll play that number of speed rounds for you :)");
  console.log("e.g. If you run `node rps.js 12`, we'll run 12 rounds automatically for you.\n");
} else if (isNaN(args[2])) {
  console.log('\n');
  prompt(`The argument "${args[2]}" is uninterpretable. No speed rounds played. Starting normal game.\n`);
} else {
  console.log('\n');
  prompt('SPEED ROUND!');
  for (let round = args[2]; round > 0; round--) {
    playerChoice = randomChoice();
    computerChoice = randomChoice();
    result = winLoseOrDraw(playerChoice, computerChoice);
    updateScoreboard(result[0]);
  }
  prompt(`Speed rounds played: ${sessionOutcomes.playerWins + sessionOutcomes.computerWins + sessionOutcomes.draws}`);
  displayScoreboard();
}

// Play regular game
do {
  playerChoice = userChoose();

  while (!VALID_CHOICES.includes(playerChoice)) {
    prompt('Invalid Choice!');
    playerChoice = userChoose();
  }

  computerChoice = randomChoice();

  prompt(`You chose ${playerChoice}. Computer chose ${computerChoice}.`);
  result = winLoseOrDraw(playerChoice, computerChoice);
  updateScoreboard(result[0]);
  prompt(result[1]);

  displayScoreboard();

  prompt('Would you like to continue playing? Enter 1 for yes or 0 for no.');
  continuePlaying = Number(READLINE.question());

  while (![1, 0].includes(continuePlaying)) {
    prompt('Invalid response!');
    prompt('Would you like to continue playing? Enter 1 for yes or 0 for no.');
    continuePlaying = Number(READLINE.question());
  }

} while (continuePlaying === 1);