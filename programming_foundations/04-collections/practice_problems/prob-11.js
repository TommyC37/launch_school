// Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";

statementArr = statement.split('').filter(char => char != ' ');
letterFreq = {};

statementArr.forEach(element => {
  if (letterFreq[element]) {
    letterFreq[element] += 1;
  } else {
    letterFreq[element] = 1;
  }
});

console.log(letterFreq);

/*
Launch school solution:

let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  result[char] = result[char] || 0;
  result[char] += 1;
});

console.log(result);

*/