function isNegZero(value) {
  return 1 / value === -Infinity;
}

let testVal1 = 0;
let testVal2 = -0;
let testVal3 = 335;
let testVal4 = "meow";

console.log(isNegZero(testVal1));
console.log(isNegZero(testVal2));
console.log(isNegZero(testVal3));
console.log(isNegZero(testVal4));