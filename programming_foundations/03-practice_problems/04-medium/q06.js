// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// This will log false because you can't check for equality with NaN
// You can check for NaN with Number.IsNaN()