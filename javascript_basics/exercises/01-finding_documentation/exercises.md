<!-- Heading -->
# Question 1
### What is an excellent resource for JavaScript documentation?
>MDN is a great resource for JS documentation. It's not perfect, since anyone can contribute or make changes to the documentation, but it is generally quite reliable and thourough.
#  Question 2
### Find out whether JavaScript has a method to lowercase a `string`, for example converting `'Aloha, World!'` into `'aloha, world!'`.
> Yes, JS has a method called `toLowerCase()` that will make each letter of the string lowercase.
# Question 3
### Is there a method to capitalize a string, for example turning `'mountain'` into `'Mountain'`?
>There is not a native method to accomplish this. One wonky work around that works on a single word is:<br><br>
`str.charAt(0).toUpperCase() + str.slice(1)`<br><br>
This approach concatenates the first letter (which is converted to uppercase with the `charAt()` method) with a slice of the remaining characters in a string.<br> <br>
Another potential work around for a proper sentence would be to target any character that occurs after a space.
# Question 4
### Locate the documentation for the Array built-in object on MDN. How can we access the element 'and' in the array ['fish', 'and', 'chips']?
> The documentation for how to access an array element can be found <a src ="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#access_an_array_item_by_its_index">here</a>. <br> <br>
To acces the element `'and'` in the array, you would type `arr[1]`.<br> <br>
**Correction:** A more specific answer is that you must either type out the array before appending the bracket with the index of the element, or you can assign the array to a variable, and use the brack notation with the variable. <br> <br>
Example:<br>
>>// Method 1<br>
['fish', 'and', 'chips'][1];<br><br>
//Method 2<br>
let arr = ['fish', 'and', 'chips'];
arr[1];
# Question 5
### What happens if we take the array ['fish', 'and', 'chips'] and try to access the element at index position 10? Try this in your JavaScript console.
>It returns undefined.
# Question 6
### What are the return values of the statements on lines 3 to 5? Refer to the MDN documentation about the Array object for help.
Example:
> `let trees = ['birch', 'pine', 'sequoia', 'palm tree'];`
<br><br>
`trees[trees.length - 1];`<br>
`trees.pop();`<br>
`trees[trees.length - 1];`<br>

Answer:
>The return values are:<br>
>1. Line 3: `'palm tree'`
>2. Line 4: ~`['birch', 'pine', 'sequoia'];`~ I was incorrect, it returns `'palm tree'` since that was the element that was "popped."
>3. Line 5: `'sequoia'`
# Question 7
### Look up the MDN documentation for the `typeof` operator. What is its return value? Determine what the following statements will return:
Example:
>typeof 23.5; // will return `'number'`<br>
typeof 'Call me Ishmael.'; // will return `'string'`<br>
typeof false; // will return `'boolean'`<br>
typeof 0; // will return `'number'`<br>
typeof null; // ~will return `'null'`~ I was incorrect, this returns `'object'`<br>
typeof undefined; // will return `'undefined'`<br>

Answer:
> `'typeof'` returns a string indicating the type of the unevaluated operand. See comments above for what the above statements return.

# Question 8
### Consider the following code snippet...
>let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";<br><br>
let words = tweet.split(' ');<br>
let isValid = tweet.length < 140;

Whaat will the following statements return?
>typeof tweet; // `'string'`<br>
typeof words; // `'object'`<br>
typeof isValid; // `'boolean'`
# Question 9
### Given the following tweet...
>let tweet = 'Starting to get the hang of it... #javascript #launchschool';

What will the following statements evaluate to?
>tweet.split(' '); // ['Starting', 'to', 'get', 'the', 'hang', 'of', 'it...', '#javascript', '#launchschool'] <br>
tweet.split(' ').reverse(); // ['#launchschool', '#javascript', 'it...', 'of', 'hang', 'the', 'get', 'to', 'Starting'] <br>
tweet.split(' ').reverse().join(' '); // ['#launchschool #javascript it... of hang the get to Starting'] <br>
# Question 10
### In your JavaScript console, execute the following two lines of code to check whether their return values differ and if so, how. Take a look at the MDN documentation on equality comparisons to read about how == and === differ.
Example:
>'8' == 8;<br>
'8' === 8;

Answer:
>The two lines of code differ. The first line (with the `"=="` opearter) returns true, while the second returns false. This is because the second line uses the strict equality operator. Since one is a string and one is a number, they are not equivalent in the strict sense.