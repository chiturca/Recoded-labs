# Introduction to Functions in JavaScript

## Learning Goals

- Writing and calling JavaScript functions
- Understand `arguments` and `parameters`
- Learn what a return value is in JavaScript

## Introduction

In this lesson, we'll introduce functions and cover how to create and execute
them. There are no tests, but be sure to follow along with the examples.

## Getting Started

To start, fork and clone this lesson into your local environment. Since this
lesson doesn't have a "Fork" button, you'll need to click the GitHub "octocat"
button at the top of the page to open the lesson's repo in GitHub, then click
the fork button in the upper right corner.

![Fork Button](http://readme-pics.s3.amazonaws.com/fork_button.jpg)

Once the lesson has been forked, clone it to your local environment, navigate
into the lesson directory in the terminal, then run `code .` to open the files
in Visual Studio Code. (If you are using a different text editor, the command
will be different.) You will be writing your code in the `index.js` file, and
running it by entering `node index.js` in the terminal. Remember that you need
to save the file before running the command.

## Writing and Calling JavaScript Functions

So far, our programs have consisted of writing individual lines of code directly
into a REPL. This is a great way to test out JavaScript functionality and to get
a feel for how it handles different values and operations, but it's not super
extensible. What if, for example, we wanted to log `"Hello, world!"` a bunch of
times? We could write the statement out repeatedly:

```js
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
```

But that quickly gets tiresome, and it's easy to see how even small programs
would come to rival _War and Peace_ in length.

The good news is, there's a better way! We can use a function!

Functions are ways of giving instructions to the JavaScript interpreter that can
be reused over and over again by _calling_ the function. Functions are the basic
building blocks of programming in many languages (although they aren't always
called _functions_), serving both to store the instructions for how to perform a
certain task, and to help organize the code in our programs. By using functions
— and giving them meaningful names — we can make our code easier to
read, debug and maintain.

In JavaScript, functions are written with the `function` keyword:

```js
function doNothing() {}
```

As you can see, when we declare a function, we start with the `function`
keyword, followed by a name for the function (in this case, `doNothing`),
followed by a pair of parentheses. Next comes a pair of curly braces, which
contains the code to be executed when the function is called. In this case, the
function, as its name implies, doesn't do much. Copy the function into
`index.js` and then execute it by running `node index.js` in the terminal.

...

Anything happen? No? Good! This isn't surprising because even though we declared
the function, we didn't give it any instructions. (Conventionally, a function
that does nothing is called a "noop" (pronounced "no op") — sometimes they
come in handy!)

Let's declare another function and this time give it something to do. As
mentioned above, we put the code that we want to be executed when our function
is called inside the curly braces — this is called the _function body_.

```js
function sayHello() {
  console.log("Hello!");
}
```

Here we have a function called `sayHello`; its body reads
`console.log('Hello!');`. Add this function to `index.js` and then execute it
again.

What happened this time? Still nothing? That's because the code above is just
the _function declaration_. So far, all we have done is _define_ the function.
In order to actually execute the code in the function body, we have to _call_
it. To call the function, we simply type the name of the function followed by
`()`.

Add the following to `index.js`, after the function declaration:

```js
sayHello();
```

Now when you execute the code, you should see `Hello!` printed in the
terminal!

> Note: We've just learned that, in order for the code in a function to be
> executed, the function must be called. Any time you're trying out code, either
> in a REPL or in your local environment, you'll need to add the function call,
> as we did above, before executing the code. For **labs**, however, you will
> generally _not_ need to do this yourself. The tests will take care of it for
> you.

### Saying hello

Let's write a function to say hello to Guadalupe — be sure to follow along!

```js
function sayHelloToGuadalupe() {
  console.log("Hello, Guadalupe!");
}
```

Run this code and see what you get. Don't forget to include the function call!

Now what if we want to say hello to Liz? Well, we could write another function
and add it to `index.js`:

```js
function sayHelloToLiz() {
  console.log("Hello, Liz!");
}
```

When we can call it, we should see `Hello, Liz!` written out in the terminal.

Okay, now we're going to say hello to Samip — you know the drill!

```js
function sayHelloToSamip() {
  console.log("Hello, Samip!");
}
```

Now let's call all three!

```js
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();
```

We can stack all three of these calls in `index.js` and, when we execute the
code, we should see all three messages output in the terminal.

While these functions are undoubtedly useful, they're only useful if we only
talk to Guadalupe, Liz, and Samip. Every time we want to greet someone new (or
use a greeting other than "Hello," for that matter), we need to define a new
function.

What if there was some way to take what's similar about these functions —
the fact that they all call `console.log()` with "Hello," a name, and an
exclamation point — and substitute what's different (the name) as we go?

Turns out, we can! We can use something called an _argument_ to pass information
to a function.

## Understand `arguments` and `parameters`

Arguments give us a way to pass information into a function to make our
functions more flexible. We pass the argument at the time that we **call** the
function, by including it inside the parentheses after the name of the function:

```js
function doSomething(thing) {
  console.log(thing);
}

doSomething("anything"); // passing the argument 'anything' into our function
```

Try this out with a few different arguments. You'll see that whatever value we
pass in when we _call_ the function is what the function logs. Pretty cool,
right?

We can easily extend this to our "say hello to" example; by using an argument,
we no longer need a separate function for each person we want to say hello to:

```js
function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
sayHelloTo("Jane"); // "Hello, Jane!"
sayHelloTo("R2-D2"); // "Hello, R2-D2!"
sayHelloTo(1); // "Hello, 1!"

// ^ Note that in the above, JavaScript coerces the number 1 to the string "1"
```

In the example above, you may have noticed that there's also something inside
the parentheses in the function _declaration_: `function sayHelloTo(firstName)`.
This is called the **parameter**, in this case `firstName`. A **parameter** is a
placeholder that stores whatever value gets passed in as an **argument**. For
example, when we run the function call `sayHelloTo('Guadalupe')`, the value of the
argument, 'Guadalupe', gets stored in the parameter `firstName`. Then, inside the
function body, we access that value by using the parameter name, interpolate it
into the string, and log the string to the terminal.

Essentially, the arguments are the actual values that we pass to the function,
and the parameters are the named references where we store those passed-in
values. An argument can be any JavaScript expression — any piece of
JavaScript code that evaluates to a value — from something as simple as
`5` or `'Avi'` to something as complex as an entire function.

Defining a parameter in our function declaration ensures that the argument gets
stored as a local, function-level variable that's available anywhere in the
function body. We access the value simply by using the name of the parameter
that it's stored in.

Note that we can only access parameters within the body of the function. Try
adding `console.log(firstName)` to the end of the `index.js` and running the
code. You should see a `ReferenceError` telling you that `firstName` is not
defined. This relates to a very important concept in JavaScript, _variable
scope_.

### Variable Scope

Variables in JavaScript exist within a particular **scope**. For example, if a
variable is defined in a function — whether it's defined as a parameter or
inside the body of the function — it can only be accessed inside that
function.

Variables can also be declared in the _global scope_, i.e., outside of any
function. These variables will be accessible (and can potentially be
overwritten) everywhere within the program. As a general rule, it is best to
avoid global variables as much as possible because they can lead to bugs that
can be difficult to track down. Using local variables instead makes it easier to
keep track of the values of your variables and makes your code easier to debug
and maintain.

The topic of scope in JavaScript is quite complex. You will learn more about it,
and its implications, later in the course.

### Saying something new

What if we want our function to say something other than "Hello"? Well, we can
move the greeting to a parameter as well:

```js
function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}
```

Add the above to your `index.js` file along with the function call
`say("Goodbye", "Julio");`. When you run the code you should see "Goodbye,
Julio!" written out to the terminal.

### Order of Arguments

What if we reversed the order of our arguments? Try this function call:

```js
say("Julio", "hello");
```

You should now see "Julio, hello!" in the terminal. It looks like the name is
now stored in the `greeting` parameter and the greeting is stored in the `name`
variable. We can verify that by adding a couple more `console.log()`s:

```js
function say(greeting, firstName) {
  console.log("firstName: ", firstName);
  console.log("greeting: ", greeting);
  console.log(`${greeting}, ${firstName}!`);
}
```

When you run this using the function call above, you should see this:

```txt
firstName:  hello
greeting:  Julio
Julio, hello!
```

You've just illustrated an important point: **the parameter names only have
meaning to us, the programmer; JavaScript assigns values to parameters based
solely on the order of the arguments that are passed.**

## Return Values in JavaScript

These functions we've been coding are pretty cool, but they don't actually do a
whole lot — mostly they just print things to the terminal. We've seen how
we can make them a little bit more dynamic with arguments, but how do we make
them do something for us? For example, we might want to create a function
`add()` that allows us to add together two numbers. Enter the following in
`index.js`:

```js
function add(x, y) {
  return x + y;
}
```

When we return inside a function, we're giving that value back to the world
outside the function. Let's add the function call `add(1, 2)` and run the code.
Wait — nothing happened! What's going on here? Well, our function is
_returning_ the value of the sum `x + y` but we can't see that because we aren't
doing anything with it. So let's use our handy developer tool, `console.log()`,
to see what it's returning. Rerun the code after modifying your function call as
follows:

```js
console.log(add(1, 2));
```

See that? We got `3` back! What if we pass 80 and 9000 as our arguments instead?
Whoa! We got 9080!

Let's unpack what's happening here. We're _calling_ our `add()` function,
passing in two numbers as the arguments. The function is _returning_ the value
of the sum of the two arguments, and we're _logging_ that result in the terminal
so we can see it. The difference between this and what we were doing before
— having the _function itself_ log something to the terminal — may
seem subtle, but it's actually quite important. Let's look at another example.
Be sure to follow along.

Let's rewrite our `say()` function from above so that now instead of
`console.log()`-ing what it says, it returns it.

```js
function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
}
```

Now when we call `console.log(say("Hello", "Liz"));` we'll see
`Hello, Liz!`, just as we did before. But what if we try logging the result of
calling the _original_ version of the function:

```js
function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}
```

Now `console.log(say("Hello", "Liz"));` will result in the following:

```txt
Hello, Liz!
undefined
```

The first line comes from the `console.log()` inside the function body, and the
second line comes from logging the result of the function call. What this shows
us is that this version of our function **does not have a return value**! This
is because a `console.log()` doesn't return anything — it just writes
something out for the developer to see. **In JavaScript, in order to have our
function return a value, we need to use the `return` keyword.**

We can also see this if we go back to our `add()` function, and remove the
`return` keyword:

```js
function add(x, y) {
  x + y;
}
```

Now if you call the function and log the results:

```js
console.log(add(1, 2));
```

you'll see that the function has no return value. Our function is doing the
addition but we can't do anything with the result, which makes it pretty
useless. Be sure to add the `return` keyword back in.

Setting up your function to return a value means that value is available to be
used elsewhere in your program. So how might we use the return value of our
`add()` function? Let's say we're creating a simple calculator function. A
high-level outline of how it could work might be:

1. the calculator function asks the user to enter two numbers they want to be
   added together,
2. the values are stored into variables (`num1` and `num2`, perhaps),
3. the function then calls the `add()` function, passing `num1` and `num2` as
   arguments,
4. the `add()` function _returns_ the sum
5. the calculator function returns a message to the user telling them what the
   sum is.

Note what's happening in step 3: our calculator function is **calling** our add
function. This is an important thing to know about functions: they can be called
by other functions! Eventually we'll want our calculator to do more than just
add. Rather than build one very long function that contains code for adding,
subtracting, multiplying, etc., we can _encapsulate_ the code for each operator
into its own function and call them.

The code that calls the `add()` function and creates the message might look
something like this:

```js
const sum = add(num1, num2);
const message = `The sum of your numbers is: ${sum}.`;
```

Or, equivalently:

```js
const message = `The sum of your numbers is: ${add(num1, num2)}.`;
```

The `message` could then be written out to the screen.

### One Last Point About `return`

There's one additional thing it's important to know about `return`. If we wanted
to both `return` _and_ log a string in our `say()` function, we might try
writing:

```js
function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
  console.log("I was called!");
}
```

Let's call the function and log the result:

```js
console.log(say("Howdy", "partner"));
```

When you run that code, the return value is logged, but the `console.log()`
inside the function body does not execute!

This is because `return` **ends the execution inside the function**. Nothing
after the line with the `return` will be executed.

> **Top Tip:** Take a look at the above code in `index.js`. Depending on which
> text editor you're using, you may see that the line with the `console.log()`
> is "grayed out." This is the text editor giving you a hint that that line of
> code is unreachable.

To both log and return like we want to, we can switch the order around:

```js
function say(greeting, firstName) {
  console.log("I was called!");
  return `${greeting}, ${firstName}!`;
}
```

Now if we rerun the code, we should see the output of both `console.log()`s.

## Your turn!

Try rewriting some of the functions that we've written in this lesson to get
used to the difference between `return`-ing and printing (`console.log()`-ing)
to the terminal. Try writing a function of your own that returns something.

## Resources

- [MDN - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
