/*
In the following code snippet, identify all of the style guide violations. Rewrite the code to fix the violations.

let ice_cream_taste = 'chocolate'
let ice_cream_density = 10

while(ice_cream_density > 0)
{
    console.log('Drip...');
    ice_cream_density -= 1;
}

console.log('The '+ ice_cream_taste +' ice cream melted.');

1. First two variable declarations are missing ';'
2. Variable names are a little confusing; "taste" and "density" are not intuitive terms
3. Curly brace for while look should be on same line as initliazing line
4. Since chocolate does not change, use const
5. Last line (console log) should use string literal
6. Use camel casing for variable names

*/

const iceCreamFlavor = 'chocolate';
let iceCreamQuantity = 10;

while(iceCreamQuantity > 0) {
  console.log('Drip...');
  iceCreamQuantity -= 1;
}

console.log(`The ${iceCreamFlavor}  ice cream melted.`);

/* Missed fixes: two spaces for indentation

/*