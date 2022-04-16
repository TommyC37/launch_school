/* Determine what the following code snippet logs. First solve it in your head
or on paper and only then run it in your JavaScript console to check the result.
*/

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

/* This logs true because brakingForce is greater than accleration AND
acceleration is greater than 0 (making the full statement true).*/

/*
Bonus question: do we need parentheses in the boolean expression or could we
also have written the following?
*/

let isMoving2 = brakingForce < acceleration && speed > 0 || acceleration > 0;

/* Bonus Answer
We do not need the parentheses due to the operator precdence. It will solve the 
>/< statements first and then resolve the &&/|| statements.

CORRECTION: We DO need parentheses because && has a higher precedence than ||
(therefore it will first compare brakingForce > acceleration to speed > 0)
*/

