let rlSync = require('readline-sync');
let userAge = Number(rlSync.question('How old are you? '));
console.log(`You are ${userAge} years old.`);
for (let decade = 10; decade <= 40; decade += 10) {
  console.log(`In ${decade} years, you will be ${userAge + decade} years old.`)
}