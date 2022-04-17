# Pseducode exercises

## Write pseudocode for the following exercises

### Write a function that returns the sum of two numbers

> START <br><br>
SET firstNum<br>
SET secondNum<br>
SET result = firstNum + secondNum<br><br>
PRINT result<br><br>
END

### Write a function that takes an array of strings, and returns a string that is all those strings concatenated together

>Start<br><br>
SET iterator = 0<br>
SET arr equal to an array of strings<br>
SET result = ""<br><br>
WHILE iterator < length of array<br>
&emsp; GET each string in the arr<br>
&emsp; Add string to result<br><br>
PRINT result<br><br>
END

### Write a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element.

For instance:

```javascript
everyOther([1,4,7,2,5]); // => [1,7,5]
```

>START <br><br>
SET iterator = 0<br>
SET result = []<br>
GET array<br><br>
FOR iterator in arr, WHILE iterator <= length of arr, iterator++<br>
&emsp;Append arr[iterator] to result<br><br>
PRINT result<br><br>
END

### Write  a function that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null

> START<br><br>
SET result = null<br>
SET letterToSearch = "x"<br>
SET iterator = 0<br>
SET counter = 0<br><br>
WHILE iterator < length of string
&emsp;SET letter = string[iterator]<br>
&emsp;IF letter == letterToSearch<br>
&emsp;&emsp;counter++<br>
&emsp;IF counter == 3<br>
&emsp;&emsp;result = iterator<br>
&emsp;&emsp;break<br>
&emsp;iterator++<br><br>
PRINT result<br><br>
END

### Write a function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes

For instance:

```javascript
merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]
```

You may assume that both array arguments have the same number of elements. 

> START <br>
SET arr1<br>
SET arr2<br>
SET result = []<br>
SET index = 0<br><br>
WHILE index < length of arr1 AND index < length of arr2<br>
&emsp;GET value x from arr1 at index<br>
&emsp;Append value x to result<br>
&emsp;GET value y from arr2 at index<br>
&emsp;Append value y to result<br><br>
PRINT result<br><br>
END