# Using the Array Filter Method

## Learning Goals

* Practice using `filter()` to return matching results

## Introduction

We've all probably had the experience of filtering a selection of choices
online. When shopping for clothing, we might have selected a single size so that
we can consider only the search results we need. Or when ordering food online,
we could have customized our results to only show restaurants currently open or
offering delivery in our neighborhoods. Since it's such a common need for a
user, it's also a common function for a web programmer to run. Fortunately for
us, JavaScript provides a built-in `filter()` method.

## Use `filter()` to Return Matching Results

We have an array of drivers with various information. We need to write functions
using the `filter()` method so that PickMeUp Taxi service employees can easily
query the data. Run the tests to see what conditions need to be met by each
function _before_ you start writing JavaScript code.

You'll be writing three functions:

* `findMatching`- This function takes an array of drivers' names and a `string`
  as arguments, and returns the matching list of drivers. The function should be
  case insensitive.

* `fuzzyMatch` - This function takes an array of drivers' names and a `string`
  as arguments for querying the array, and returns all drivers whose names begin
  with the provided letters.

* `matchName` - This function takes an array of `driver` objects and a `string`
  as arguments. Each `driver` object has two properties: `name` and `hometown`.
  The function should return each element whose `name` property matches the
  provided `string` argument.

## Resources

* [MDN: Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
