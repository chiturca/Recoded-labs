describe("index.js", () => {
  it("exists", () => {
    expect(testVar).to.exist
    expect(testVar).to.deep.equal({}) //without .deep, {} does not equal {}
  })
})
