var args = process.argv;
const FS = require('fs');
const DATA = './rps_data.json';
const ALL_TIME_RESULTS = './rps_all_time_results.json';
const DATA_FILE = require(DATA);
var allTimeResultsLocal = JSON.parse(FS.readFileSync(ALL_TIME_RESULTS));
const READLINE = require('readline-sync');

// Welcome
console.log(DATA_FILE.messages.welcome);

// Variable declarations
let continuePlaying;
let playerChoice;
let computerChoice;
let result;
let sessionMatch = 1;
let sessionRound = 1;
let sessionScore = {
  playerRoundWins: 0,
  computerRoundWins: 0,
  roundDraws: 0
};

// Function declarations
function prompt(msg) {
  console.log(`=> ${msg}`);
}

function userChoose() {
  prompt(`Choose one: ${DATA_FILE.valid_choices.join(', ')}`);
  let response = READLINE.question().toLowerCase();
  if (response in DATA_FILE.valid_shorthand_choices) {
    return DATA_FILE.valid_shorthand_choices[response];
  } else {
    return response;
  }
}

function randomChoice() {
  let randIndex = Math.floor(Math.random() * (DATA_FILE.valid_choices.length));
  return DATA_FILE.valid_choices[randIndex];
}

function winLoseOrDraw(playerChoice, computerChoice) {
  // Returns array in the form of [outcome, console_message]
  // E.g. ['win', 'You win!']
  if (playerChoice === computerChoice) {
    return ['draw', "It's a draw!"];
  } else if (DATA_FILE.winning_combos[playerChoice].includes(computerChoice)) {
    return ['win', 'You win!'];
  } else {
    return ['lose', 'Drats! You lost :('];
  }
}

function displayScoreboard(scoreboardTitle) {
  console.log('\n');
  prompt(`~${scoreboardTitle} SCOREBOARD~`);
  prompt(`Player wins: ${sessionScore.playerRoundWins}`);
  prompt(`Computer wins: ${sessionScore.computerRoundWins}`);
  prompt(`Draws: ${sessionScore.roundDraws}`);
  console.log('\n');
}

function displayAllTimeMatchResults() {
  console.log('\n');
  prompt('~ALL TIME MATCH RESULTS~');
  prompt(`Player wins: ${allTimeResultsLocal.player_match_wins}`);
  prompt(`Computer wins: ${allTimeResultsLocal.computer_match_wins}`);
  console.log('\n');
}

function updateScoreboard(result) {
  if (result === 'new match') {
    sessionScore.playerRoundWins = 0;
    sessionScore.computerRoundWins = 0;
    sessionScore.roundDraws = 0;
  } else if (result === 'win') {
    sessionScore.playerRoundWins += 1;
  } else if (result === 'lose') {
    sessionScore.computerRoundWins += 1;
  } else {
    sessionScore.roundDraws += 1;
  }
}

function matchWon() {
  if (sessionScore.computerRoundWins === 5) {
    allTimeResultsLocal.computer_match_wins += 1;
    prompt('Computer wins match!');
  } else if (sessionScore.playerRoundWins === 5) {
    allTimeResultsLocal.player_match_wins += 1;
  }

  FS.writeFile(ALL_TIME_RESULTS,
    JSON.stringify(allTimeResultsLocal, null, 2), finished);
  function finished(err) {
    if (err) throw err;
    prompt('All time match results updated.');
  }

  updateScoreboard('new match');
  sessionMatch += 1;
  sessionRound = 1;
  displayAllTimeMatchResults();
  prompt('\nNEW MATCH\n');
}

displayAllTimeMatchResults();

// Speed round: if a numeric argument was passed into the program,
// use the argument value to execute n number of speed rounds
if (args.length === 2) {
  console.log(DATA_FILE.messages.speed_round_hint);
} else if (isNaN(args[2])) {
  console.log('\n');
  prompt(`The argument "${args[2]}" is uninterpretable. No speed rounds played. Starting normal game.\n`);
} else {
  console.log('\n');
  prompt(DATA_FILE.messages.speed_round_start);
  for (let round = args[2]; round > 0; round--) {
    playerChoice = randomChoice();
    computerChoice = randomChoice();
    result = winLoseOrDraw(playerChoice, computerChoice);
    updateScoreboard(result[0]);
  }
  prompt(`Speed rounds played: ${sessionScore.playerRoundWins + sessionScore.computerRoundWins + sessionScore.roundDraws}`);
  displayScoreboard('SPEED ROUND');
  updateScoreboard('new match');
}

// Play regular game
do {
  prompt(`Match ${sessionMatch}, Round ${sessionRound}`);
  playerChoice = userChoose();

  while (!(DATA_FILE.valid_choices.includes(playerChoice))) {
    prompt('Invalid Choice!');
    playerChoice = userChoose();
  }

  computerChoice = randomChoice();

  prompt(`You chose ${playerChoice}. Computer chose ${computerChoice}.`);
  result = winLoseOrDraw(playerChoice, computerChoice);
  updateScoreboard(result[0]);
  prompt(result[1]);

  displayScoreboard(`MATCH ${sessionMatch}`);

  if (sessionScore.playerRoundWins === 5 ||
      sessionScore.computerRoundWins === 5) {
    matchWon();
  } else {
    sessionRound += 1;
  }

  prompt(DATA_FILE.messages.continue_message);
  continuePlaying = Number(READLINE.question());

  while (![1, 0].includes(continuePlaying)) {
    prompt('Invalid response!');
    prompt(DATA_FILE.messages.continue_message);
    continuePlaying = Number(READLINE.question());
  }

} while (continuePlaying === 1);
