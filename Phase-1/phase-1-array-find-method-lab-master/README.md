# Using the Array Find Method

## Learning Goals

* Practice using `find()` to isolate a specific result

## Introduction

We have learned that the `indexOf()` and `find()` methods can be used to locate
an element in an array, and that they return the **first** element for which the
condition is met. (If you instead want a list of _all_ elements that meet a
condition, you would use `Array.prototype.filter()` instead. We'll learn about
`filter()` in the next lesson.)

We've also learned that the `find()` method takes a _callback function_ as
its argument. This is a common pattern for the `Array` methods we'll be
learning about in this section — in fact, `indexOf()` is the only one that
_doesn't_ take a callback function as an argument. `find()` is one of two
`Array` methods that expects the callback function to return either `true` or
`false` (`filter()` is the other one).

In this lab, we'll practice using the `find()` method.

## Practice Using `find()` to Isolate a Specific Result

Let's create a function that uses the method `find()` to single out a specific
result in game record data for the Denver Broncos football team. We want to
find out if, at _any_ point in the team's existence, they've had a win in the
Superbowl. Our data looks like this:

```js
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]
```

Write a function called `superbowlWin()` in `index.js`:

* The function should receive 1 argument, an `Array` of JavaScript `Object`s
* Each object has two properties: `year` and `result`
* It should use `find()` to test each `Object` to see if the `result` is `"W"` —
  a win!
* It should return the `year` when the win occurred (if it occurred at all!)
* If no win is found, it should return, sadly, `undefined`

## Conclusion

`Array.prototype.find()` is a built-in function in JavaScript which is used to
get the value of the first element in the array that satisfies the provided
condition. With this, you can quickly check all the elements of the array and
return the first match.

## Resources

* [MDN: Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
