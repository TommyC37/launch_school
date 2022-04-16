let testValue1 = 4;
let testValue2 = 'bug';
let testValue3 = undefined;
let testValue4 = [1, "two"];

function isNotANumber (value) {
  let test = [1 / value];
  return test.includes(NaN);
}

console.log(isNotANumber(testValue1));
console.log(isNotANumber(testValue2));
console.log(isNotANumber(testValue3));
console.log(isNotANumber(testValue4));


// A more elegant solution from the textbook:

function isNan (val) {
  return val !== val;
}

// This works because NaN does not equal NaN!