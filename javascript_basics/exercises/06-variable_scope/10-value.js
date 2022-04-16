/*  What will the following code log to the console and why? Don't run it until
    you have tried to answer.
*/

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);


/* This will log the array with the firstName element changed to 'Jane.' This is
because const objects cannot have the object replaced, but their elements can be
changed.