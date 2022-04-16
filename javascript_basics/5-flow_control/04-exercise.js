/* The following code will log "Proudct not found!" to the console. This is 
    because there are no break statements to stop it from going through all the
    cases.
*/

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/* Correction: it printed:
    Product2
    Product3
    Product not found!

    This is because it went to the first case, skipped it, got to the second
    case and printed Product2 because that case matched the serial argument.
    After that, since there was no break statement, the switch statement
    evaluated every subsequent case as true and executed whatever action it had
    set up.
*/