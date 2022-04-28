// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:

// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

munstersDescription = [...munstersDescription];

munstersDescription.forEach((elem, index) => {
  if (elem == elem.toUpperCase()) {
    munstersDescription[index] = elem.toLowerCase();
  } else {
    munstersDescription[index] = elem.toUpperCase();
  }
})

munstersDescription = munstersDescription.join('');

console.log(munstersDescription);

/*
Launch school solution:

munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");

*/