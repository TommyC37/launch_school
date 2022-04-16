/* The final length values will be...
    array1: 3
    array2: 1
    array3: 1
    array4: 3
    array5: 1
*/

let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

console.log(array1.length);
console.log(array2.length);
console.log(array3.length);
console.log(array4.length);
console.log(array5.length);

/* Corrections
    array1: length is 4. Undefined DOES count as part of length
    array2: length is 5. Empty items count!
    array3: Negative and non-integer indices don't count for length, therefore
            the length is 0.
    array4: correct
    array5: 101! This is because the length is the highest index postion that 
            has a value plus 1.
*/