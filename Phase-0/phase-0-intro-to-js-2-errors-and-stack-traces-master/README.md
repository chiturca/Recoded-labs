# Errors and Stack Traces

## Learning Goals

* Recognize common JavaScript errors.
* Read a stack trace to discern where an error originated.

## Introduction

No one writes perfect code the first time. Or the second time. Or the third time.

We all make mistakes. One of the biggest advantages an experienced programmer
has is knowing how to quickly troubleshoot and fix errors they encounter. You
**will** reach this point — it's just a matter of practice. To get
started, let's look at some of the common types of error messages you'll
encounter when writing JavaScript code.

## `Uncaught ReferenceError: _____ is not defined`

This is one of the simplest and most common errors, and it's pretty explicitly
telling us what went wrong. We tried to reference a variable or function that
doesn't exist in the current scope. For example:

```js
myVar;
// ERROR: Uncaught ReferenceError: myVar is not defined
```

It can also arise if you forget to put quotation marks around a string:

```js
Hello, world;
// ERROR: Uncaught ReferenceError: Hello is not defined
```

If you meant to declare the variable in the current scope and simply forgot,
declaring the variable should solve the issue:

```js
const myVar = 'Hello, world!';

myVar;
// => "Hello, world!"
```

## `Uncaught TypeError: _____ is not a function`

This one usually indicates that you tried to invoke something that isn't
actually a function. For example:

```js
const myVar = 'Hello, world!';

myVar();
// ERROR: Uncaught TypeError: myVar is not a function
```

A common variant of this error that you'll run into later in the course is
`Uncaught TypeError: undefined is not a function`. The JavaScript engine is
telling us that we tried to invoke `undefined`, which is obviously not
invocable. This happens when we've tried to store a function in a variable but
the variable is undefined for some reason.

> **Aside:** Wait? We can store functions in variables? Yes we can! In
> JavaScript, functions are objects, which means we can do anything with them
> that we can do with any other object: assign it properties, store it in a
> variable, pass it as an argument, etc.

## `Uncaught SyntaxError: missing ) after argument list`

When you see this error, it means you tried to invoke a function but forgot the
closing parenthesis:

```js
console.log('Hello,', 'world!';
// ERROR: Uncaught SyntaxError: missing ) after argument list

function myAdder (num1, num2) {
  return num1 + num2;
}

myAdder(10, 4;
// ERROR: Uncaught SyntaxError: missing ) after argument list
```

## `Uncaught TypeError: Assignment to constant variable.`

You're probably familiar with this one by now — it means we accidentally
tried to assign a new value to a variable declared with the `const` keyword,
which prevents reassignment. However, sometimes you rightfully feel that you
didn't try to reassign anything, and it boils down to a small typo:

```js
const snackSelection = 'Pretzels';

if (snackSelection = 'Pretzels') {
  console.log("That'll be $1, please!");
}
// ERROR: Uncaught TypeError: Assignment to constant variable.
```

In this case, we accidentally used the _assignment operator_, a single `=` sign,
instead of a comparison operator, such as the _strict equality operator_
(`===`).

This is just a selection of some of the many types of errors you might encounter
while writing JavaScript code. The main point is to use the information you're
given. The JavaScript engine isn't trying to trick you — on the contrary,
it's trying to **help** you debug.

## Stack traces

One of the really neat pieces of information provided with the error messages is
what's called a _stack trace_. Let's take a look at an example. Fork and clone
this lesson into your local environment. Navigate into its directory in the
terminal, then run `code .` to open the files in Visual Studio Code. Finally,
execute the code in `errors.js` by running `node errors.js`. You should see
something like this:

![assignment to constant variable](https://curriculum-content.s3.amazonaws.com/phase-0/errors-and-stack-traces/type-error.png)

Whoa — there's a lot going on there! Let's break it down a bit.

Near the top, you'll see JavaScript showing us the exact piece of code that's
throwing the error. It's even pointing to the exact character it thinks is the
problem! (Warning: JavaScript isn't always right.) Below that is the error
itself: `TypeError: Assignment to constant variable.`. Hopefully you recognize
what's causing the error and how to fix it.

Under the identification of the error is the stack trace. For this example, most
of the information we're seeing in the stack trace is related to what's going on
under the hood in Node.js and, therefore, isn't especially helpful for debugging
(we'll look at a more helpful example shortly). But let's look at a couple of
things before we move on.

First, you'll see `at Object.<anonymous>` followed by the file path for the
`errors.js` file. The `at Object.<anonymous>` is under-the-hood info: basically,
it means that an object is being created by Node when our code runs and that
object is not assigned a name. But the file path does contain some helpful
information. Notice that it ends with `errors.js:5:20`. Those numbers at the end
are telling us that JavaScript thinks the error is on line 5 of our file, at
character 20.

Let's go ahead and fix our error and run `node errors.js` again. Now you should
see something like this:

![third is not defined](https://curriculum-content.s3.amazonaws.com/phase-0/errors-and-stack-traces/reference-error.png)

Looks like we're making some progress! First you'll see the message that was
logged by the `if` statement, so we know it's now working. This is followed by
the information about the current error: the code that's throwing the error and
the error itself. The next three lines give us the stack trace. Note that it's
identifying three lines of code: `17`, `13`, and `20`. Let's take a look at
those lines:

```js
function first() {
  second(); // Line 13
}

function second() {
  third(); // Line 17
}

first(); // Line 20
```

Now that we're dealing with a series of function invocations, we can really see
the power of the stack trace: it traces the error up through the stack of
function calls that led to it. Let's read it backwards and reconstruct the
events that led to the error:

1. The JavaScript engine reaches line `20` and invokes `first()`.
2. Inside `first()`: the engine reaches line `13` and invokes `second()`.
3. Inside `second()`: the engine reaches line `17` and sees the identifier `third`.
4. The engine can't find a declared variable or function with that name so it
   throws an error inside `second()`.

To fix the `third is not defined` error, let's first try declaring `third` as
the simplest thing we know, a variable:

```js
function first() {
  second();
}

function second() {
  third();
}

const third = 'Declaring a new variable.';

first();
```

Remember what we learned earlier in the section on common JavaScript errors. If
our understanding is correct, this should fix the `third is not defined` error
and, in its place, throw a new error. Can you guess what the new error will be?

![third is not a function](https://curriculum-content.s3.amazonaws.com/phase-0/errors-and-stack-traces/type-error-2.png)

Did you correctly deduce what the new error would be?

The new error is telling us that `third is not a function`. It may have been
pretty easy to figure out that our initial solution would just result in another
error, but intentionally breaking your code and seeing whether it breaks in the
exact way you predicted is a great technique for improving your debugging and
general JavaScript skills. The more you understand the errors and their causes,
the easier debugging will become.

We'll fix this by declaring `third()` as a function instead of a simple
variable:

```js
function first() {
  second();
}

function second() {
  third();
}

function third() {
  console.log("Now I'm a function!");
}

first();
```

When we save the file and run the code again, all of the errors should be gone
and we should see our two messages logged to the terminal.

## Conclusion

Arguably the biggest difference between being a novice and an expert developer
is how comfortable you feel with reading and debugging error messages.
JavaScript — and, indeed, every programming language — is designed
**by** programmers **for** programmers. The language doesn't intentionally make
things more difficult for you. On the contrary, every time you write code that
results in some sort of error, JavaScript goes out of its way to provide you
with the information you need to find and fix the error. When you see one of
those error messages pop up, don't freak out! It's the JavaScript engine
starting a friendly dialog with you: "Hey, I tried to do what you asked of me,
but I ran into a problem. Here's where the problem occurred, and here's what
happened."

As you become more comfortable diagnosing and solving error messages, you'll
become a faster, better programmer, and writing JavaScript code will become more
and more enjoyable!

## Resources

* [MDN — Errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)
  * [`Uncaught ReferenceError: _____ is not defined`][x is not defined]
  * [`Uncaught TypeError: _____ is not a function`][x is not a function]
  * [`Uncaught SyntaxError: missing ) after argument list`][missing paren]
  * [`Uncaught TypeError: Assignment to constant variable.`][assignment to constant]

[x is not defined]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined
[x is not a function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_function
[missing paren]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list
[assignment to constant]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment
