// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`\n=> ${msg}`);
}

function errorPrompt(msg) {
  console.log(`\n~~ERROR~~=> ${msg}\n`);
}

console.log(" _____________________");
console.log("|  _________________  |");
console.log("| |   *BEEP BOOP*   | |");
console.log("| |_________________| |");
console.log("|  ___ ___ ___   ___  |");
console.log("| | 7 | 8 | 9 | | + | |");
console.log("| |___|___|___| |___| |");
console.log("| | 4 | 5 | 6 | | - | |");
console.log("| |___|___|___| |___| |");
console.log("| | 1 | 2 | 3 | | x | |");
console.log("| |___|___|___| |___| |");
console.log("| | . | 0 | = | | / | |");
console.log("| |___|___|___| |___| |");
console.log("|_____________________|");

prompt('*BEEP BOOP* Welcome to the calcul8r!');

let continuePlaying = true;

while (continuePlaying) {

  let number1;
  do {
    number1 = Number(readline.question(prompt('What is the first number?')));
    if (isNaN(number1)) {
      errorPrompt('That is not a valid number.');
    }
  } while (isNaN(number1));

  let number2;
  do {
    number2 = Number(readline.question(prompt('What is the second number?')));
    if (isNaN(number2)) {
      console.log(errorPrompt('That is not a valid number.'));
    }
  } while (isNaN(number2));

  let result;
  let operation = '';

  while (operation === '') {
    operation = readline.question(prompt('What operation would you like to perform?'));
    switch (operation) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        result = number1 / number2;
        break;
      default:
        operation = '';
        console.log(errorPrompt("Please choose from the following operations: + - * /"));
    }
  }

  console.log(`\n${number1} ${operation} ${number2} = ${result}`);

  while (true) {
    continuePlaying = Number(readline.question(prompt('Would you like to continue playing?\nEnter 1 for yes. Enter 0 for no.')));
    if (continuePlaying === 1 || continuePlaying === 0) {
      break;
    } else {
      errorPrompt("Please enter 1 for yes or 0 for no.");
    }
  }

}