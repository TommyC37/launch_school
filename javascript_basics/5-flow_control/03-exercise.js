function evenOrOdd (num) {
  if (Number(num) || Number(num) === 0) {
    num % 2 ? console.log('odd') : console.log('even');
  } else {
    console.log('Error: please enter a number.');
  }
}

let rlSync = require('readline-sync');
evenOrOdd(rlSync.question('Enter a number: '));