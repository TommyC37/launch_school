// How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function checkForExclamation(str) {
  return (str.charAt(str.length - 1) === "!");
}

console.log(checkForExclamation(str1));
console.log(checkForExclamation(str2));

/*
The more elegant solution (per Launch school) would be:
str1.endsWith("!");
*/