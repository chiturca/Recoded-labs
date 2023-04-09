# JavaScript Calculator Challenge Lab

## Learning Goals

- Practice doing math with JavaScript
- Practice writing functions that do things with numbers
- Practice parsing strings as numbers

## Introduction

In this lab, we're going to practice writing functions and manipulating numbers
in JavaScript. First, though, we need to review some basic math. In this lab,
we're going to learn about various arithmetic operators. What's an operator, you
say? It's a symbol that _operates_ on one or more (usually two) objects —
`+` is a good example. The `+` operator says "add what's to the left of `+` and
what's to the right of `+` together."

If you haven't already, fork and clone this lab into your local environment.
Navigate into its directory in the terminal, then run `code .` to open the files
in Visual Studio Code. (If you are using a different text editor, the command
will be different.)

As you read through this lesson, you're going to be adding your solutions to
`index.js`. You'll write a total of eight functions. Use the results of running
`learn test` to guide you towards the right function names and functionality.

## Basic Math

The most fundamental math operations work as one might expect in JavaScript: `+`
adds two numbers; `-` subtracts one number from another; `*` multiplies two
numbers; and `/` divides one number by another.

Give it a try: type each of the following math examples into the REPL console.
You can use the embedded console below or open [replit][] in a separate window
if you prefer.

```javascript
1 + 80; //=> 81
60 - 40; //=> 20
2 * 3.4; //=> 6.8
5.0 / 2.5; //=> 2
```

<iframe height="400px" width="100%" src="https://replit.com/@lizbur10/Sandbox?embed=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Go ahead and run `learn test` and take a look at the first failing test:

```console
  1) basic math functions
       'add()' is a valid function:
     ReferenceError: add is not defined
      at Context.<anonymous> (test/index-test.js:10:12)
      at processImmediate (node:internal/timers:464:21)
```

The description of the test, `'add()' is a valid function`, along with the error
message, `referenceError: add is not defined`, tells us that we need to define a
function `add()`. Go ahead and create the `add()` function in `index.js`. This
test is only looking for the function to exist, so we can leave the code block
empty for now:

```js
function add() {
  // we'll fill this in shortly
}
```

Once you've added the empty function, run `learn test` again; the first test
should be passing. Go ahead and get the next three tests passing as well before
moving on.

Once you have the first four tests passing, the first error you get should look
similar to this:

```js
  1) basic math functions
       add(a, b) adds two numbers and returns the result:
     Error: Expected undefined to equal 1078
      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
      at Context.<anonymous> (test/index-test.js:26:23)
      at processImmediate (node:internal/timers:464:21)
```

> Note: the test document is randomly creating numbers to pass as arguments to
> the functions in this lab, so the specific values you see in your errors will
> be different from what's shown in this lesson, and will be different each time
> you run the tests!

The tests have found our `add()` function, getting us past the first test, and
now we need to write the code inside the function to return what the test is
expecting. Let's break down the information from our error:

```js
add(a, b) adds two numbers and returns the result:
Error: Expected undefined to equal 1078
```

The first line tells us what our function needs to do, and the second line tells
us the specific error that is being thrown. Any time you see the error "Expected
undefined to equal" something, that means the test is expecting your function to
_return_ a value but it's currently not returning anything (`undefined`). Let's
see if we can just get that specific error cleared. We won't worry about exactly
_what_ we're returning just yet:

```js
function add() {
  return "something";
}
```

Running the tests now we get:

```console
  1) basic math functions
       add(a, b) adds two numbers and returns the result:
     Error: Expected 'something' to equal 853
      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
      at Context.<anonymous> (test/index-test.js:26:23)
      at processImmediate (node:internal/timers:464:21)
```

Great! So now our function is returning "something" instead of nothing! So the
next step is to look more closely at the test's description of the function to
figure out what should be returned:

```console
add(a, b) adds two numbers and returns the result
```

The `add(a, b)` tells us the test is trying to pass two _arguments_ to our
function, so let's get that set up:

```js
function add(a, b) {
  return "something";
}
```

The rest of the description tells us we need to add the two arguments together
and return that value:

```js
function add(a, b) {
  return a + b;
}
```

With this code, both tests for the `add()` function should now be passing!

### A Quick Note about Hard Coding

Think back to the errors we were getting above, e.g., `Expected undefined to
equal 1078`. One thing that might be tempting to do when addressing an error
like this is to explicitly return exactly what the test is looking for:

```js
function add(a, b) {
  return 1078;
}
```

This is what's known as **hard coding** and is virtually never what you should
do! If you think about it, it doesn't really make sense. We've created an
`add()` function that can take any two numbers as arguments but will always
return 1078. This makes it a pretty useless function. Instead, we want to create
functions that will return the correct answer for whatever argument or arguments
we pass in.

Go ahead and tackle the next three tests on your own. You should follow a
process very similar to what we did above. Once you have those passing, continue
to the next section.

## Math + Assignment

Recall that we can increment (`++`) and decrement (`--`) a number if it's
assigned to a variable. Don't forget to follow along in the REPL console.

```javascript
let number = 5;

number++; //=> 5... hmmmm

number; //=> 6 -- the number was incremented after it was evaluated

number--; //=> 6

number; //=> 5
```

We can also put the increment and decrement operators before the number, in
which case the number is evaluated _after_ the operator is executed:

```javascript
--number; //=> 4

number; //=> 4

++number; //=> 5

number; //=> 5
```

But generally, you will see them placed _after_ the number (and we recommend
that that's where you put them). If you're interested in the difference, take a
look at the [MDN documentation][].

And, while we're on the subject, you'll usually only want to use these
incrementors and decrementors when the shorthand makes what you're writing
easier to read (more on when _exactly_ in a later lesson). Instead, it's best to
use the basic arithmetic operators combined with `=`.

Follow along in the REPL console. You can pick up where we left off with the
previous examples. Start by setting `number` equal to 5.

- `+=` modifies the value to the operator's left by adding to it the value to
  the operator's right:

```javascript
number += 3; //=> 8
```

- `-=` modifies the value to the operator's left by subtracting from it the
  value to the operator's right:

```javascript
number -= 2; //=> 6
```

- `*=` modifies the value to the operator's left by multiplying it by the value
  to the operator's right:

```javascript
number *= 10; //=> 60
```

- `/=` modifies the value to the operator's left by dividing it by the value to
  the operator's right:

```javascript
number /= 5; //=> 12
```

Note that these methods modify the variable in place. So, if we have two
functions that depend on the same external variable, the order in which they are
called matters. Follow along in the console:

```javascript
//reset number
number = 10;

function add5() {
  return (number += 5);
}

function divideBy3() {
  return (number /= 3);
}

divideBy3(); //=> 3.3333333333333335

add5(); //=> 8.333333333333334

// reset number
number = 10;

add5(); //=> 15

divideBy3(); //=> 5
```

**Because these methods are more explicit, we prefer `+=` to `++` and `-=` to
`--` (usually).**

Okay, now we're ready to write solutions for the next two functions:
`increment(n)` and `decrement(n)`. As indicated by the tests, these methods
should take a number as an argument, increment/decrement the provided value by
one, and return the result.

## Parsing Numbers

Sometimes, we'll receive a number wrapped in quotes. We recognize it as a
number, but JavaScript will think it's a string. Luckily, JavaScript gives us
tools to turn these strings into proper numbers (that is, numbers that
JavaScript understands).

### `parseInt()`

The first such tool is the function `parseInt()`, which accepts two arguments:
the value to parse and the base of the value being parsed (called the _radix_).
_Usually_ you will want to work with base 10, so a typical call to `parseInt()`
looks like:

```javascript
parseInt("2", 10); //=> 2
```

What happens if we pass a representation of a non-integer to `parseInt()`? Let's
try it:

```javascript
parseInt("2.2222", 10);
```

If we enter the above in the REPL console, we will see that `parseInt()` forces
the parsed number to be an integer — which makes sense when we think about it,
right?

What happens, though, if we pass utter nonsense to `parseInt()`? Go ahead and
try it — something like:

```javascript
parseInt("nonsense!", 10);
```

What did it return? `NaN`? What is that?

`NaN` stands for "Not a Number" — pretty handy, right? This is the number (in
the JavaScript sense) that JavaScript returns when it can't determine a valid
value for a numeric operation.

**Note**: You may see `parseInt()` used without a radix specified. In most
cases, the radix will default to 10, **but not always**! To be safe, you should
**always specify a radix**.

### `parseFloat()`

Above, we saw that `parseInt()` lops off everything after the decimal point and
only returns integers. If we want to preserve decimals, we'll need to use
`parseFloat()`.

Unlike `parseInt()`, `parseFloat()` accepts only a single argument, the thing to
be parsed. We can use it like so:

```javascript
parseFloat("80.123999"); // 80.123999
```

You now have the information you need to write the final two functions,
`makeInt(string)` and `preserveDecimal(string)`. `makeInt(string)` should take
in a string, parse it into a base 10 integer and return it.
`preserveDecimal(string)` should take in a string, parse it into a float and
return it.

## Resources

- [MDN - parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

- [MDN - parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

[replit]: https://replit.com/languages/javascript
[MDN documentation]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment
