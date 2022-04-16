/*  The followiong code logs [1, 4, 3]. This is because array1 and array2 are 
    both pointing to the same location in memory. Therefore, reassigning a value
    for an array element at that location will mutate both arrays.
*/

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);