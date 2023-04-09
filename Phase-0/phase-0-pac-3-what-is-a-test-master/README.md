# Testing With Javascript

## Learning Goals

- Learn about testing in JavaScript

## Introduction

Many of the labs you will complete in this program use tests. Passing the tests
verifies that the code you write behaves as desired and produces the expected
results. But writing tests is also a way to provide specifics about exactly how
the code should function. In a common development strategy known as [test-driven
development][tdd] (or TDD), programmers _first_ write the test for a specific
function of the code _then_ write the code to make the tests pass. TDD is
considered the most reliable methodology for delivering quality code.

What this means is that the results of running the tests will be an important
tool in figuring out how to get those tests passing. Code testing can feel like
an abstract concept at first, but it's worth starting to learn how they work.
When you're having difficulty passing a test, being able to read and understand
the test output — and the tests themselves — can be an invaluable skill.

## Getting Started

The lesson is set up as a code-along, so you'll first need to fork and
clone it to your local environment.

**Quick Review:**

**1.** click the **Fork** icon in the upper right of this page. This will bring
you to GitHub. If you are prompted to choose where to fork, choose your personal
GitHub account.

**2.** Once your fork is created, click the **Code** button in GitHub, make sure
**SSH** is selected, and copy the provided git URL info.

![clone-repo](https://curriculum-content.s3.amazonaws.com/phase-0/completing-assignments/clone-repo.gif)

Then, in your terminal:

**3.** Make sure you're in `Development/code` (or wherever you're storing your
code for the course) and clone the repo to your local machine with `git clone`
followed by the git URL you copied.

```console
$ git clone git@github.com:learn-co-curriculum/phase-0-pac-3-what-is-a-test.git
```

**4.** The previous command will create a folder in the location you're
currently in containing your fork of this lab's repository. `cd` into the
repository that you just cloned down in the terminal, then run `code .` to open
the files in Visual Studio Code.

```console
$ cd phase-0-pac-3-what-is-a-test
$ code .
```

Open up `index.js` in your code editor. You are going to see mostly familiar
things:

```javascript
const name = "Joe";
const height = 74;
const message = `${name} is ${height} inches tall`;

module.exports = { name, height, message };
```

This should all look familiar except for that last line. You don't need to worry
about it for now — just know that line of code makes the variables available to
the test file.

Take a look at the `message` variable:

```js
const message = `${name} is ${height} inches tall`;
```

We can use `console.log` to take a look at the value of the `message` variable.
To do that, first type `console.log(message);` on the last line of `index.js`
and save the file. Next, navigate to the terminal, and type the following
command in the command line and hit enter (be sure you're still in the lab's
directory):

```console
$ node index.js
```

The `node` command _executes_ the code in whatever file you specify (in this
case, `index.js`). You should see `"Joe is 74 inches tall"` logged in the
terminal.

> **Top Tip**: `console.log` is one of the debugging tools you can use as you're
> writing your code. Logging a variable and executing the code will allow you to
> verify that the value of the variable is what you're expecting.

In the line of code above, we are using _string interpolation_ to inject the
values of the `name` and `height` variables into the message. Recall that, for
this to work, you have to wrap the entire string in backticks and wrap the
variables themselves in `${}`. If you'd like a refresher, try leaving out the
`${}`s or switching to a different type of quotes and run your code again to see
what the value of `message` is. The backticks and the `${}` tell Javascript to
grab the _value_ inside the variable, not just that variable name.

### The Tests

We have our code, now let's take a look at the tests. They are located in the
`test` folder inside a file named `index-test.js`. In this lesson we'll get
familiar with the tests, and then run them in the next lesson.

```javascript
const { name, height, message } = require("../index.js");

/*
describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Susan"', () => {
      expect(name).toEqual('Susan')
    })
  })


  describe('Height', () => {
    it('is less than 40', () => {
      expect(height).toBeLessThan(40)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(message).toInclude(name)
      expect(message).toInclude(height)
    })
  })
})
*/
```

In the first line, we're enabling the tests to access the variables in
`index.js`. You don't need to worry about exactly how this works at this point —
just know that the `module.exports` and `require` keywords allow us to access
variables written in the `index.js` file from within the test file.

The next thing to notice is that the test code itself is commented out using the
`/*` and `*/` block commenting syntax. This is because, as mentioned above, we
don't actually want to run the tests yet. We will run the tests in the lab that
follows this lesson; in the version of the files provided for the lab, you'll see
that the `/*` and `*/` have been removed.

Next, note that the test code consists of three individual tests (each starting
with `describe`) nested inside a block for the tests as a whole (also starting
with `describe`).

The first grouping is testing our `name` variable:

```javascript
describe("Name", () => {
  it('returns "Susan"', () => {
    expect(name).toEqual("Susan");
  });
});
```

Take a look at the line that begins with `expect`. If we read it out loud, we
get "Expect `name` to equal Susan". That's exactly what it's saying! If we
continue down to the Height section you'll see this code:

```javascript
describe("Height", () => {
  it("is less than 40", () => {
    expect(height).toBeLessThan(40);
  });
});
```

Again, reading the line starting with `expect` out loud, we get "Expect `height`
to be less than 40." Again, this is just what the test is checking. Let's look
at the final one:

```javascript
describe("Message", () => {
  it("gives the name and height", () => {
    expect(message).toInclude(name);
    expect(message).toInclude(height);
  });
});
```

This one has two `expect` statements. If you read them out as English you'll
discover that the tests expect the value of `index.message` to include both
`index.name` and `index.height`.

OK Great. You now understand what the tests are saying. In the next lesson we
are going to cover how to run them, and then you will solve the lab!

## Submitting the Assignment

To register completion of this lesson, submit the URL for your forked copy of
the repo in Canvas. Even though you didn't need to write any code for this
lesson, you'll need to submit a link in order for this lesson to be marked as
complete in Canvas.

1. Go to your repository in GitHub and copy the URL. Note, this should be copied
   from the browser's address bar, and should start with https://github.com/
2. Go to the assignment in Canvas and click Submit Assignment (or Start
   Assignment)
3. Paste in your GitHub URL as your submission

[tdd]: https://en.wikipedia.org/wiki/Test-driven_development
