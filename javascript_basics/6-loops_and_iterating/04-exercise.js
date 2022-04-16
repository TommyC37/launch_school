/* The following code will not produce an error. It will log "undefined" to the
    console for each iteration, but since it increments i on each iterator, it
    will not run infinitely.
*/

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

/* Correction: I was wrong about the program logging "undefined" to the console.
    It logged numbers, but the numbers were off (instead of incrementing at the
    end of each iteration, it incremented at the console log)
*/