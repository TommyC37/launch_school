# PEDAC example

## PROBLEM

Given a string, write a function `palindromeSubstrings` which returns all the substrings from a given string which are palindromes. Consider palindrome words case sensitive.

## Test cases

```javascript
console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
should return: ["ili"]

console.log(palindromeSubstrings("abcddcbA"))
should return: ["bcddcb", "cddc", "dd"]

console.log(palindromeSubstrings("palindrome"))
should log: []

console.log(palindromeSubstrings(""))
should log: []
```

## Describing the problem

input: string\
output: array (of all palindromes)\
rules:

&nbsp;&nbsp; Explicit requirements

* return all of the substrings from the given string that are palindromes (a word that is the same forwards and backwards)
* Palindromes are case senstitive (Super != super)

&nbsp;&nbsp; Implicit requirements

* empty string returns empty array
* no palindromes returns empty array

## Additional Questions

1. Will inputs always be strings?
