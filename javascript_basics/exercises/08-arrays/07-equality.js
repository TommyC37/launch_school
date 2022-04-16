/* Predict the output of the code below. When you run the code, do you see what
you expected? Why or why not?
*/

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

/* The code will return false. When I run the code, I saw what I expected. The
answer is false because the strict equality operator checks to see if these
arrays are the exact same thing. Since they occupy two different locations in
memory, they are NOT the same thing (even though their values are the same).
*/