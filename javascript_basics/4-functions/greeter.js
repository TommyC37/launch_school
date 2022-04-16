function getName(whichName = 'name') {
  return rlSync.question(`What is your ${whichName}? `);
}

let rlSync = require('readline-sync');
let firstName = getName('first name');
let lastName = getName('last name');
console.log(`Hello, ${firstName} ${lastName}!`);