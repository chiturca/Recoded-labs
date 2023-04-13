require ( './helpers.js' );

const { expect } = require("chai");

describe("breakfast", () => {
  it("has a class of breakfast", () => {
    expect(new Breakfast()).to.be.an.instanceof(Breakfast);
  });
  it("creates a new breakfast with the correct parameters", () => {
    const bfast = new Breakfast("eggs", "juice");
    expect(bfast.food).to.equal("eggs");
    expect(bfast.drink).to.equal("juice");
  });
});

describe("lunch", () => {
  it("has a class of lunch", () => {
    expect(new Lunch()).to.be.an.instanceof(Lunch);
  });
  it("creates a new lunch with the correct parameters", () => {
    const newlunch = new Lunch(
      "side salad",
      "broccoli cheddar soup",
      "iced tea"
    );
    expect(newlunch.salad).to.equal("side salad");
    expect(newlunch.soup).to.equal("broccoli cheddar soup");
    expect(newlunch.drink).to.equal("iced tea");
  });
});

describe("dinner", () => {
  it("has a class of dinner", () => {
    expect(new Dinner()).to.be.an.instanceof(Dinner);
  });
  it("creates a new dinner with the correct parameters", () => {
    const newdinner = new Dinner(
      "balsamic salad",
      "consomme",
      "filet mignon",
      "cheesecake"
    );
    expect(newdinner.salad).to.equal("balsamic salad");
    expect(newdinner.soup).to.equal("consomme");
    expect(newdinner.entree).to.equal("filet mignon");
    // since #dessert is a private field, we can't test for its value! We'll trust that you added it ;)
  });
});
