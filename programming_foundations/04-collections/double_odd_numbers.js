function doubleOddNumberIndex(numbers) {
  let doubledNumIndexes = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];

    if (counter % 2 === 1) {
      doubledNumIndexes.push(currentNumber * 2);
    } else {
      doubledNumIndexes.push(currentNumber);
    }
  }

  return doubledNumIndexes;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddNumberIndex(myNumbers));  // => [2, 4, 6, 14, 2, 6]

// not mutated
console.log(myNumbers);