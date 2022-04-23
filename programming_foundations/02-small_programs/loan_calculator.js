console.log('\nWelcome to the loan calculator!\n');

const READLINE = require('readline-sync');
const FORMATTER = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

let loanAmount;
let apr;
let inputCheck;
let loanDuration;
let anotherCalc;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function isInvalidNumber (value) {
  if (isNaN(value)) {
    prompt('INVALID RESPONSE! Please enter a valid number.');
    return true;
  }
  return false;
}

function isNotOneOrZero (value) {
  if (value !== 1 && value !== 0) {
    prompt("INVALID RESPONSE! Please enter 1 for yes or 0 for no.");
    return true;
  }
  return false;
}

function getAPR() {
  do {
    prompt('Enter the APR (annual percentage rate) as a decimal.');
    prompt('(e.g. enter 0.05 for 5%)');
    apr = Number(READLINE.question());
  } while (isInvalidNumber(apr));
}

// Main program
do {

  // Get loan amount from user
  do {
    prompt('Enter the loan amount.');
    loanAmount = Number(READLINE.question());
  } while (isInvalidNumber(loanAmount));

  // Get APR from user
  getAPR();
  do {
    prompt(`You entered ${apr * 100}%. Is that correct (enter 1 for yes or 0 for no)?`);
    inputCheck = Number(READLINE.question());
    if (isNotOneOrZero(inputCheck)) {
      inputCheck = 0;
    } else if (inputCheck === 0) {
      getAPR();
    }
  } while (inputCheck === 0 || isNaN(apr));

  // Get loan duration from user
  do {
    loanDuration = Number(READLINE.question('Enter the duration of the loan in years: '));
  } while (isInvalidNumber(loanDuration));

  // Calculate monthly payments
  let months = loanDuration * 12;
  let monthlyInterestRate = apr / 12;
  let monthlyPayment = loanAmount *
                      (monthlyInterestRate /
                      (1 - Math.pow((1 + monthlyInterestRate), (-months))));

  console.log(`Your monthly payments will be ${FORMATTER.format(monthlyPayment)}`);

  prompt('Would you like to calculate another loan (enter 1 for yes or 0 for no)?');
  do {
    anotherCalc = Number(READLINE.question());
  } while (isNotOneOrZero(anotherCalc));
} while (anotherCalc === 1);