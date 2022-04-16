function evenOrOdd (num) {
  num % 2 ? console.log('odd') : console.log('even');
}

let rlSync = require('readline-sync');
evenOrOdd(rlSync.question('Enter a number: '));