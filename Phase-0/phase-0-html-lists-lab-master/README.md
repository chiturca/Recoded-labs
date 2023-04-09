# HTML Lists

## Learning Goals

- Recognize unordered and ordered HTML Lists
- Create unordered lists
- Identify the ordered list tag
- Create ordered lists

## Introduction

Many HTML tags behave in unique ways. Some apply automatic styling, like `p`
tags that create margins around text. Some, like the header tags, increase the
font size. Using these tags delineates our content. When reading HTML, using the
correct tags informs us of what the content's purpose is. If we see an `h1` tag,
we know that we're looking at a _big_ page header. In this lesson, we're going
to be looking at a few new tags that help us organize _lists_ of related
content.

## Getting Started

Fork and clone this lesson into your local environment. Navigate into its
directory in the terminal, then run `code .` to open the files in Visual Studio
Code.

## Recognize Unordered And Ordered HTML Lists

Let's say, for instance, we were building a personal website and wanted to list
out our favorite foods. We _could_ write this like so:

```html
<body>
  <p>Bahn Mi</p>
  <p>Grilled Cheese</p>
  <p>Baba Ghanoush</p>
  <p>Tomato soup</p>
  <p>Cheese and crackers</p>
  <p>Sushi</p>
</body>
```

The above would create a new line on the page for each food, but doesn't really
indicate that these things are related. Using the built in `ul`, `ol` and `li`
HTML tags however, we can group related list content together. We call such a
grouping a "list."

In HTML, we create lists using the `<ul>` tag, which stands for _unordered
list_, along with the `<li>` tag for each _list item_.

To make a list, we write out the opening and closing `<ul>` tags, and inside
them, we'll add `<li>` tags, each listing a single item. Going back to our
favorite foods example, if we wanted to convert it to a list, it would look like
this:

```html
<ul>
  <li>Bahn Mi</li>
  <li>Grilled Cheese</li>
  <li>Baba Ghanoush</li>
  <li>Tomato soup</li>
  <li>Za’atar Bread</li>
  <li>Sushi</li>
</ul>
```

Now, instead of just having each item show up on a new line, the content will
also be slightly indented and a bullet will appear next to each of them.

Lists are very flexible and we can even nest lists _inside_ of lists. Say we
wanted to break down our favorite foods by category. We may have multiple
categories and one or more items in _each_:

```html
<ul>
  <li>
    Sandwiches
    <ul>
      <li>Bahn Mi</li>
      <li>Grilled Cheese</li>
    </ul>
  </li>
  <li>
    Snacks
    <ul>
      <li>Baba Ghanoush</li>
      <li>Za’atar Bread</li>
    </ul>
  </li>
  <li>
    Soups
    <ul>
      <li>Tomato soup</li>
    </ul>
  </li>
  <li>
    Sushi
    <ul>
      <li>Sashimi</li>
      <li>Uramaki</li>
    </ul>
  </li>
</ul>
```

In this example, the nested lists will now be _further_ indented and instead of
a solid bullet, they will appear with hollow bullets, indicating a sub-list.
Adding a nested list one level deeper will make _square_ bullets appear,
allowing us to easily display related and nested content in a readable format.

## Create Unordered Lists

![recipe list](https://curriculum-content.s3.amazonaws.com/html_lists_lab.png)

The first part of this challenge is to make the first 2 tests pass by:

1. Creating an unordered list
2. Nesting each grilled cheese ingredient as a list item wrapped in `<li>` tags

Open `index.html` in your browser.

Let's say we wanted to list out the ingredients required for making a grilled
cheese sandwich. The ingredients are: `2 slices of bread`, `4 slices of cheese`,
`1 tbsp of butter`.

For the first part of this challenge, in `index.html`, create an unordered list
that displays these ingredients. Run `learn test` to see if you can pass the first
test. If you've done things correctly, you'll now be passing the first test, but
there are more tests to pass! We now need to turn our attention to the next
test.

Okay, now, let's say we wanted to make our grilled cheese a little more exciting
and add a couple of cheeses, `cheddar`, `mozzarella`, and `pepper jack`.

To pass the second test, **inside** the `li` with `4 slices of cheese`, add a
**nested** unordered list that lists out the three types of cheese.

After editing your `index.html` file, go back to the browser and refresh the
page you opened earlier. You should see something like this if you've set up
your lists correctly:

- 2 slices of bread
- 4 slices of cheese
  - cheddar
  - mozzarella
  - pepper jack
- 1 tbsp of butter

Run `learn test` again. If your first two tests are passing, great! It's time to
talk about another type of list!

## Identify the Ordered List Tag

Unordered lists are great for organizing related content where it doesn't matter
what goes first, like in our grilled cheese ingredients. In situations where we
_want_ items to be displayed in a specific, numbered order, we will want to use
the _ordered list_ tag, which is written as `<ol>` instead of `<ul>`. Both use
`<li>` tags inside, but this time, `<ol>` will display a numbered list instead
of bullets. If say, we wanted to write a _ranked_ list of favorite foods, it
might look like:

```html
<h3>Top 5 Favorite Foods</h3>
<ol>
  <li>Grilled Cheese</li>
  <li>Sushi</li>
  <li>Bahn Mi</li>
  <li>Tomato soup</li>
  <li>Baba Ghanoush</li>
</ol>
```

**Top Tip:** Feel free to test this out by adding it to `index.html`, saving and
refreshing the tab where the file is open. Now, `Grilled Cheese` will be
displayed as `1. Grilled Cheese` as the #1 food (where it belongs).

Once you've got a feel for how this ordered list looks in HTML and how it's
displayed in the browser, delete the example code from your `index.html` file so
you can create a new one from scratch for the next deliverable.

Nested ordered lists work the same as unordered, but instead of hollow and
square bullets, each nested list will still display numbers.

**Note:** To create a nested list, you _must_ provide the `ol` or `ul` wrapper.
Otherwise, an `li` inside another `li` will just be displayed as two items at
the same level.

## Create Ordered Lists

To complete the challenge write the necessary HTML to pass the final test:

- Create an ordered list with each step for creating grilled cheese as a list
  item wrapped in `<li>` tags

Okay, so we've got our grilled cheese ingredients, but what about the steps
required to make a grilled cheese? Steps to a recipe need to be in order,
otherwise we may end up with burnt cheese covered in bread and topped with a
square of butter. The steps to making a basic grilled cheese would be:
`Spread butter on bread and frying pan`, `Place bread in frying pan and fry`,
`Add cheese on top of bread`, `Cover with second slice of bread`,
`Turn over and fry for 2 minutes`.

After editing your `index.html` file, go back to the browser and refresh the
page you opened earlier. Your newly added list should look like this:

1. Spread butter on bread and frying pan
2. Place bread in frying pan and fry
3. Add cheese on top of bread
4. Cover with second slice of bread
5. Turn over and fry for 2 minutes

Once you've written an ordered list that displays these 5 steps correctly, run
`learn test` to see the tests pass.

## Conclusion

Lists in HTML are very useful for organizing related content, and are really the
only way to indicate that content is related with basic HTML. Using unordered
lists ends up being very useful for more than just listing favorite foods and
ingredients. It's possible, for instance, to use list elements to organize
navigation links. With styling, we make the content look however we want —
remove the bullets, make them line up horizontally — but in our HTML they will
still be organized and easy to read.
