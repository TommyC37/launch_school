/* The following code will not log anything to the consle because the function
    returns before the console.log method is invoked.
*/

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');