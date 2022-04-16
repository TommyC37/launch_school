let rlSync = require('readline-sync');
let userInput = rlSync.question("Enter a number: ");
result = 1

for (iter = 2; iter <= userInput; iter++) {
  result *= iter;
}

console.log(result);