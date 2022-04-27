// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// Output will be: [{ first: 42 }, { second: "value2" }, 3, 4, 5]
// This is because the slice method makes a "shallow" copy of the array. This
// means that non-primitive elements of both arrays are pointing to the same memory
// location. Thus, a change to one non-primitive element in an array will affect
// the other array.