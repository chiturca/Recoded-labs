const { expect } = require("chai")

describe("index.js", () => {
  it("String: uses destructuring to declare five animal sounds", () => {
    expect(moo).to.exist
    expect(moo).to.equal("cow")
    expect(neigh).to.exist
    expect(neigh).to.equal("horse")
    expect(baa).to.exist
    expect(baa).to.equal("sheep")
    expect(oink).to.exist
    expect(oink).to.equal("pig")
    expect(cluck).to.exist
    expect(cluck).to.equal("chicken")
  })
  it("String: uses destructuring to declare the four traditional animal names", () => {
    expect(bessie).to.exist
    expect(bessie).to.equal("cow")
    expect(dolly).to.exist
    expect(dolly).to.equal("sheep")
    expect(babe).to.exist
    expect(babe).to.equal("pig")
    expect(little).to.exist
    expect(little).to.equal("chicken")
  })
  it("String: uses destructuring to declare the three traditional animal colors", () => {
    expect(blackAndWhite).to.exist
    expect(blackAndWhite).to.equal("cow")
    expect(black).to.exist
    expect(black).to.equal("sheep")
    expect(pink).to.exist
    expect(pink).to.equal("pig")
  })
  it("Array: uses destructuring to declare the seven traditional rainbow color variables using the color names", () => {
    expect(red).to.exist
    expect(red).to.equal("red")
    expect(orange).to.exist
    expect(orange).to.equal("orange")
    expect(yellow).to.exist
    expect(yellow).to.equal("yellow")
    expect(green).to.exist
    expect(green).to.equal("green")
    expect(blue).to.exist
    expect(blue).to.equal("blue")
    expect(indigo).to.exist
    expect(indigo).to.equal("indigo")
    expect(violet).to.exist
    expect(violet).to.equal("violet")
  })
  it("Array: uses destructuring to declare six rainbow color variables using initials", () => {
    expect(r).to.exist
    expect(r).to.equal("red")
    expect(o).to.exist
    expect(o).to.equal("orange")
    expect(y).to.exist
    expect(y).to.equal("yellow")
    expect(g).to.exist
    expect(g).to.equal("green")
    expect(b).to.exist
    expect(b).to.equal("blue")
    expect(v).to.exist
    expect(v).to.equal("violet")
  })
  it("Array: uses destructuring to declare Indigo using indg", () => {
    expect(indg).to.exist
    expect(indg).to.equal("indigo")
  })
  
  it("Object: uses destructuring to assign all appropriate variables using the keys as the variable names", () => {
    expect(muppetName).to.exist
    expect(muppetName).to.equal("Miss Piggy")
    expect(color).to.exist
    expect(color).to.equal("pink")
    expect(song).to.exist
    expect(song).to.equal("Never Before, Never Again")
    expect(job).to.exist
    expect(job).to.equal("Cast member of The Muppet Show")
    expect(partner).to.exist
    expect(partner).to.equal("Kermit")
  })
  
  it("Object: uses destructuring to assign songs 2 and 4, and Kermit's job and partner", () => {
    expect(song2).to.exist
    expect(song2).to.equal("Moving Right Along")
    expect(song4).to.exist
    expect(song4).to.equal("I Hope That Something Better Comes Along")
    expect(nestedJob).to.exist
    expect(nestedJob).to.equal("Host of The Muppet Show")
    expect(nestedPartner).to.exist
    expect(nestedPartner).to.equal("Miss Piggy")
  })
})
