// Starting with the string, show two different ways to put the expected "Four score and " in front of it.

let famousWords = "seven years ago...";
let wordsToInsert = "For score and ";

console.log(wordsToInsert + famousWords);
console.log(wordsToInsert.concat('', famousWords));