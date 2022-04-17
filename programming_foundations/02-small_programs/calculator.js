// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation

const readline = require('readline-sync');

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

console.log('\n\n*BEEP BOOP* Welcome to the calcul8r!');

let number1;
do {
  number1 = Number(readline.question('\nWhat is the first number?\n'));
  if (isNaN(number1)) {
    console.log('\n~~ERROR!~~\nThat is not a valid number.');
  }
} while (isNaN(number1));

let number2;
do {
  number2 = Number(readline.question('\nWhat is the second number?\n'));
  if (isNaN(number2)) {
    console.log('\n~~ERROR!~~\nThat is not a valid number.');
  }
} while (isNaN(number2));

let result;
let operation = '';

while (operation === '') {
  operation = readline.question('\nWhat operation would you like to perform?\n');
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
      console.log("\n~~ERROR!~~\nPlease choose from the following operations: + - * /\n");
  }
}

console.log(`${number1} ${operation} ${number2} = ${result}`);