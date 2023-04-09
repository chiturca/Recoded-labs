# Introduction to CSS Lab

## Learning Goals

- Import a CSS file in our HTML
- Implement CSS declarations

## Introduction

HTML's role in our websites is to provide structure, content, and link resources
(e.g. CSS files). Its role in describing the style ("presentation") of content
is minimal. HTML's ability to style is pretty much limited to "pretty good"
defaults.

In order to further customize the style, appearance, and interactive behavior of
our websites, we turn to Cascading Style Sheets, or CSS. In this lab, we will
work on implementing CSS declarations in our HTML.

## Writing HTML vs. Writing CSS

|             | HTML | CSS |
| ----------- | ---- | --- |
| Deals with: | Content layer                                             | Presentation layer                                               |
| Concerns:   | Structure, hierarchy & meaning                            | Aesthetic & display                                              |
| Questions:  | - Should the order of items within a list matter?         | - Should the layout of the text be in a single or double column? |
|             | - Should we wrap a list of links inside a navigation tag? | - Should we use a different font color for the header?           |
|             | - Is this the most important header in the HTML document? | - How should the content appear on a desktop vs. a mobile device?  |

## Getting Started

Fork and clone this lesson into your local environment. Navigate into its
directory in the terminal, then run `code .` to open the files in Visual Studio
Code.

## Import a CSS File in Our HTML

First things first: we need to make sure our HTML is loading our style sheet.

We have two options:

1. Write CSS rules inside of a `<style>` tag ("internal CSS"), which tells HTML
   "Hey, I want to define some CSS styling here."
2. Write CSS rules in an external file that is specified with the `<link>` tag
   ("external CSS").

In our case, we want to provide a link to our style sheet, instead of writing
all of our CSS code directly in the `<style>` tag. This allows us to only have
to write styles for the entire site once, instead of repeating every `<style>`
element on every page. A common workflow is to see developers work on CSS inside
of the `<style>` tag until their styling is done. At that point they move it to
their external file and remove the `<style>` element from the HTML page. Feel
free to try it out!

In `index.html`, provide a `<link>` tag which correctly sources the CSS file
located in this directory. The `<link>` tag will link to our file with an `href`
attribute, like so:

```html
<link rel="stylesheet" href="relative path to CSS file" />
```

The `href` attribute should point to the file `style.css` which is located in
this directory using a _relative path_. The `rel` attribute is used to note that
the file which is being linked has a **rel**ation of being a "stylesheet."

Now, what is a relative path? You could write `href="style.css"` and the content
of `style.css` would change your `index.html` file. But we want to teach you to
require external resources (like CSS or JavaScript) by using _relative paths_.
Relative paths make it _crystal clear_ which file is being used. Relative paths
start with `./` which means "from the directory I am currently in." So, when we
use `link` to associate with a style sheet and we write `href="./style.css"`
we're saying: "From the directory in which I, the `index.html` file live, look
for a file called `style.css` and use it. This pattern will help you and other
developers remove any possible confusion.

```html
<link rel="stylesheet" href="relative path to CSS file" />
```

Links to style sheets should go at the end of the `<head>` section! Make sure
you provide a _relative_ path to the style sheet. Hint: Open `index.html` in the
browser. You can test whether your link is working or not by the color of your
headline. If it's red, it's working! If it's black, keep going - you'll get it.

## Implement CSS Declarations

Now, we are going to create some CSS declarations and add styling to our
document! First, open `index.html` in the browser to get a good idea of what
[our un-styled page][un-styled] page looks like.

What we would really like is [something a little more jazzed up][styled]! Let's
work towards that. Set the following _properties_ to specific _values_. Make
sure to, after each update, look at `index.html` in the browser to see how it
has changed:

- Set the `background` of the `<body>` element (whole document) to `#00b3e6`
  (light blue)
- Set the `<div>` elements:
  - `width` to `700px`
  - `margin` to `auto` (centers our element)
  - `font-family` to `"Helvetica Neue"`
  - `background` to `white`
  - `padding` to `30px` (creates an invisible space around the element)
- Set the element with the id of `#main-header` to a `font-size` of `22px`
- Set the elements with the class of `.perspective-questions` to a `font-style`
  of `italic`

Run `learn test` to test your work.

## Conclusion

CSS allows us to easily separate our 'styling' logic into separate files that
follow the 'cascading' rule set. This enables us to keep our HTML clean and
simple to read, without sacrificing the customization that we have come to
expect on websites.

## Resources

- [W3 Introduction to CSS](https://www.w3schools.com/Css/css_intro.asp)

[un-styled]:
  https://curriculum-content.s3.amazonaws.com/web-development/unstyled-codepen.jpeg
[styled]:
  https://curriculum-content.s3.amazonaws.com/web-development/styled-intro-to-css.png
