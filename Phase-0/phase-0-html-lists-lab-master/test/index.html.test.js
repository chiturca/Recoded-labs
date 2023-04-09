const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe("the <ul> tag", () => {
  it("exists in the document", () => {
    // find the first <ul> in the HTML file
    const ul = document.querySelector("ul");
    const hint = "The document should have a <ul> element";

    expect(ul, hint).to.exist;
  });

  it("has three child <li> tags with the correct content", () => {
    // find all direct child <li> elements in the <ul>
    const ul = document.querySelector("ul");

    const hint = "The <ul> should have three <li> elements nested inside";
    expect(ul.children, hint).to.have.lengthOf(3);

    // check the values of each <li> element
    const [firstLi, secondLi, thirdLi] = ul.children;

    expect(firstLi).to.have.tagName("li");
    expect(firstLi).to.contain.text("2 slices of bread");

    expect(secondLi).to.have.tagName("li");
    expect(secondLi).to.contain.text("4 slices of cheese");

    expect(thirdLi).to.have.tagName("li");
    expect(thirdLi).to.contain.text("1 tbsp of butter");
  });

  it("contains a nested <ul> tag within a <li>", () => {
    // find a <ul> nested inside a <li> nested inside a <ul>
    const ul = document.querySelector("ul");
    const hint = `
      The <ul> must contain another <ul> nested *inside* a <li>:
      <ul>
        <li>
          4 slices of cheese
          <ul></ul>
        </li>
      </ul>
    `;

    expect(ul, hint).to.have.descendant("li > ul");
  });

  it("contains three <li> nested within the nested <ul> with the correct content", () => {
    const ul = document.querySelector("ul");
    const hint = `
      The *nested* <ul> must contain three nested <li>:
      <ul>
        <li>
          4 slices of cheese
          <ul>
            <li>cheddar</li>
            <li>mozzarella</li>
            <li>pepper jack</li>
          </ul>
        </li>
      </ul>
    `;

    expect(ul, hint).to.have.descendants("li > ul > li").and.have.length(3);
  });
});
describe("the <ol> tag", () => {
  it("exists in the document", () => {
    // find the first <ol> in the HTML file
    const ol = document.querySelector("ol");
    const hint = "The document should have a <ol> element";

    expect(ol, hint).to.exist;
  });

  it("has five child <li> tags with the correct content", () => {
    // find all direct child <li> elements in the <ul>
    const ol = document.querySelector("ol");
    const hint1 = "The <ol> should have five <li> elements";
    expect(ol, hint1).to.have.descendants("li").and.have.length(5);

    // Check the content of each <li>
    const [first, second, third, fourth, fifth] = ol.querySelectorAll("li");

    expect(first).to.contain.text("Spread butter on bread and frying pan");
    expect(second).contain.text("Place bread in frying pan and fry");
    expect(third).contain.text("Add cheese on top of bread");
    expect(fourth).contain.text("Cover with second slice of bread");
    expect(fifth).contain.text("Turn over and fry for 2 minutes");
  });
});
