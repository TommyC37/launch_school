/* Before running any code, determine what difference there will be in the
output of the two code snippets below (if any). */

// Snippet 1

let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // {prefix: 'Pacific'}

// Snippet 2

let ocean2 = {};
let prefix2 = 'Indian';

ocean2[prefix2] = 'Pacific';

console.log(ocean2); // {prefix: 'Pacific'}

/* The code will be the same.

CORRECTION: Bracket notation accepts expressions (including variables). This
means that when we declare `ocean2[prefix2] = 'Pacific'`, the bracket notation 
is passing prefix2 into the object as a key (with 'Pacific' as its value).
*/