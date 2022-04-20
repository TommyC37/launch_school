// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation

const READLINE = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(msg) {
  console.log(`\n=> ${msg}`);
}

function errorPrompt(msg) {
  console.log(`${MESSAGES.error} ${msg}`);
}

function getLanguage() {
  let selection = "";
  while (selection === "") {
    selection = READLINE.question(prompt(MESSAGES.language_query));
    switch (selection) {
      case "1":
        selection = "english";
        break;
      case "2":
        selection = "spanish";
        break;
      default:
        prompt(MESSAGES.language_error);
        selection = "";
    }
  }
  return selection;
}

let language = getLanguage();

MESSAGES[language].welcome_img.forEach(elem => {
  console.log(elem);
});

prompt(MESSAGES[language].welcome_msg);

let continuePlaying = true;

while (continuePlaying) {

  let number1;
  do {
    number1 = Number(READLINE.question(prompt(MESSAGES[language].first_num)));
    if (isNaN(number1)) {
      errorPrompt(MESSAGES[language].invalid_num);
    }
  } while (isNaN(number1));

  let number2;
  do {
    number2 = Number(READLINE.question(prompt(MESSAGES[language].second_num)));
    if (isNaN(number2)) {
      console.log(errorPrompt(MESSAGES[language].invalid_num));
    }
  } while (isNaN(number2));

  let result;
  let operation = '';

  while (operation === '') {
    operation = READLINE.question(prompt(MESSAGES[language].operation));
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
        console.log(errorPrompt(MESSAGES[language].operation_error));
    }
  }

  console.log(`\n${number1} ${operation} ${number2} = ${result}`);

  while (true) {
    continuePlaying = Number(
      READLINE.question(prompt(MESSAGES[language].continue))
    );
    if (continuePlaying === 1 || continuePlaying === 0) {
      break;
    } else if (continuePlaying === 2) {
      language = getLanguage();
      break;
    } else {
      errorPrompt(MESSAGES[language].continue_error);
    }
  }

}