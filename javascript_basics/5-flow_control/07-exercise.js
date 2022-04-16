function allCaps(word) {
  return word.length > 10 ? word.toUpperCase() : word;
}

let rlSync = require('readline-sync');
let userInput = rlSync.question('Enter a word: ');
console.log(allCaps(userInput));