// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// This will return different results. The second function will return nothing since
// the opening curly brace for the object is on a different line (making the object unreachable)