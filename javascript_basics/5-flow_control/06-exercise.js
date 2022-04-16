/* This will evaluate to "Not Empty." This is because an empty array is an
    object and will therefore evaluate as true.
*/

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);