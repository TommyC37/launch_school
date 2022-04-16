/* When the following code runs, you'll get an error. This is because the code
    attempts to assign a new value to NAME, which is not possible because it's 
    a constant.
*/

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

/* Correction: the code run up until it tried to reassign the constant variable.
    At that point, a TypeError occurred, preventing the code from continuing.
*/