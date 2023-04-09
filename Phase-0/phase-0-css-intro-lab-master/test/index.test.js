const fs = require("fs");
const path = require("path");
const chai = require("chai");
const CSSOM = require("cssom");
const { validate } = require("csstree-validator");
chai.use(require("chai-dom"));
const { expect } = chai;

const cssFile = fs.readFileSync(
  path.resolve(__dirname, "../style.css"),
  "utf-8"
);

function findRule(rules, cssSelector) {
  return rules.find((r) => r.selectorText === cssSelector);
}

// Custom CSS Validation Helper
chai.use(function (chai, utils) {
  utils.addProperty(chai.Assertion.prototype, "validCss", function () {
    const validationErrors = validate(this._obj);
    const errorMessages = validationErrors
      .map((err) => `\tError on line ${err.line}: ${err.message.trim()}`)
      .join("\n");
    this.assert(
      validationErrors.length === 0,
      `Expected CSS not to have validation errors. The following validation errors were reported:\n${errorMessages}`,
      `Expected CSS to have validation errors. The following validation errors were reported:\n${errorMessages}`
    );
  });
});

describe("index.html", () => {
  it("contains a <link> tag", () => {
    const link = document.querySelector("link");
    const hint = "No <link> tag was found";
    expect(link, hint).to.exist;
  });

  it("correctly links to the style.css file with a relative path", () => {
    const link = document.querySelector("link");
    const hint1 =
      "Make sure you provide a rel attribute to identify the link as a stylesheet";
    expect(link, hint1).to.have.attribute("rel", "stylesheet");
    const hint2 =
      "Make sure you provide a relative path to style.css from index.html";
    expect(link, hint2).to.have.attribute("href", "./style.css");
  });
});

describe("index.css", () => {
  let css;
  before(() => {
    css = CSSOM.parse(cssFile);
  });

  it("contains valid CSS", () => {
    expect(cssFile).to.be.validCss;
  });

  it("has a rule for the <body> tag", () => {
    const rule = findRule(css.cssRules, "body");
    expect(rule, "Missing body rule").to.exist;
  });

  it("sets <body> background to #00b3e6", () => {
    const rule = findRule(css.cssRules, "body");
    const hint = "Missing background property for body";
    expect(rule.style["background"]|| rule.style["background-color"], hint).to.eq("#00b3e6");
  });

  it("has a rule for <div> tags", () => {
    const rule = findRule(css.cssRules, "div");
    expect(rule, "Missing div rule").to.exist;
  });

  it("sets <div> width to 700px", () => {
    const rule = findRule(css.cssRules, "div");
    const hint = "Missing width property for div";
    expect(rule.style["width"], hint).to.eq("700px");
  });

  it("sets <div> margin to auto", () => {
    const rule = findRule(css.cssRules, "div");
    const hint = "Missing margin property for div";
    expect(rule.style["margin"], hint).to.eq("auto");
  });

  it("sets <div> font-family to 'Helvetica Neue'", () => {
    const rule = findRule(css.cssRules, "div");
    const hint = "Missing font-family property for div";
    expect(rule.style["font-family"], hint).to.contain("Helvetica Neue");
  });

  it("sets <div> background to white", () => {
    const rule = findRule(css.cssRules, "div");
    const hint = "Missing background property for div";
    expect(rule.style["background"]|| rule.style["background-color"], hint).to.eq("white");
  });

  it("sets <div> padding to 30px", () => {
    const rule = findRule(css.cssRules, "div");
    const hint = "Missing padding property for div";
    expect(rule.style["padding"], hint).to.eq("30px");
  });

  it("has a rule for elements with an id of main-header", () => {
    const rule = findRule(css.cssRules, "#main-header");
    expect(rule, "Missing #main-header rule").to.exist;
  });

  it("sets #main-header font-size to 22px", () => {
    const rule = findRule(css.cssRules, "#main-header");
    const hint = "Missing font-size property for #main-header";
    expect(rule.style["font-size"], hint).to.eq("22px");
  });

  it("has a rule for elements with a class of perspective-questions", () => {
    const rule = findRule(css.cssRules, ".perspective-questions");
    expect(rule, "Missing .perspective-questions rule").to.exist;
  });

  it("sets .perspective-questions font-style to italic", () => {
    const rule = findRule(css.cssRules, ".perspective-questions");
    const hint = "Missing font-style property for .perspective-questions";
    expect(rule.style["font-style"], hint).to.eq("italic");
  });
});
