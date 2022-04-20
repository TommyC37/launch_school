# JS101 - Lesson 2

## Short-circuitng

The `&&` and `||` operators exhibit a behavior called **short-circuiting**. This means that JS will stop evaluating an expression if only one answer is possible.

For `&&`, if the first sub-expression is false, it will cease evaluating the expression and return false. Ex:

```javascript
false && undefined.length <br>
= false
```

Normally, `undefined.length` would raise an error. However, since the first sub-expression was false, the full expression cannot be true, so JS returned false before evaluating `undefined.length`.

```javascript
true || undefined.length
= true
```

Similarly, if the first sub-expression in an || or statement is true, JS will stop evaluating the expression since only one sub-expression needs to be true for the full expression to be true. In the case above, that means that the expression was short-circutied, and the `undefined.length` sub-expression was never evaluated (and therefore never raised an error).

There are instances where short-circuiting can be useful. For example, if you want to check a varianle's length, but you're unsure if it's been assigned a value, checking the length could result in an error being raised (if the variable is `null`). One way to get around this is:

```javascript
if (name && (name.length > 0)) {
  console.log(`Hi, ${name}!`);
} else {
  console.log("Hello, whoever you are.");
}
```

In the scenario above, if `name` is `null`, it won't raise an error, because name will evaluate to false and shortcircuit the expression before name.length is evaluated.

## Truthiness

Values that evaluate as false:

1. false
2. undefined
3. null
4. 0
5. ""
6. NaN

A good mnemonic device for memorizing the false values is "FUNZEN" (z=zero, e=empty string).

## Errors

1. ReferenceError - occurs when you attempt to use a variable or function that doesn't exist.
2. TypeError - occurs in a variety of ways. Some common ways include:
    - accessing a property on a value that does not have any properties such as null or undefined.
    - trying to call something that isn't a funciton
    - trying to reassign a const variable.

3. SyntaxError - almost always occurs immediately after loading a JavaScript program but before it runs.
