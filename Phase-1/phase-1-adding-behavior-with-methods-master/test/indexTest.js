require ( './helpers.js' );

let cat, dog, bird, bird2;

describe("cat", () => {
  beforeEach(() => {
    cat = new Cat("Sasha", "female")
  })

  it("has a class of cat", () => {
    expect(new Cat()).to.be.an.instanceof(Cat);
  })
  it("cat.speak() returns '[name]' says meow!", () => {
    expect(cat.speak()).to.eq('Sasha says meow!')
  })
})
describe("dog", () => {
  beforeEach(() => {
    dog = new Dog("Rufio", "male")
  })

  it("has a class of dog", () => {
    expect(new Dog()).to.be.an.instanceof(Dog);
  })
  it("dog.speak() returns '[name] says woof!'", () => {
    expect(dog.speak()).to.eq('Rufio says woof!')
  })
})
describe("bird", () => {
  beforeEach(() => {
    bird = new Bird("Pablo", "male")
    bird2 = new Bird("Mable", "female")
  })
  
  it("has a class of Bird", () => {
    expect(new Bird()).to.be.an.instanceof(Bird);
  })
  it("bird.speak() returns 'It's me! [name], the parrot!'", () => {
    expect(bird.speak()).to.eq('It\'s me! Pablo, the parrot!')
  })
  it("bird2.speak() returns 'Squawk!'", () => {
    expect(bird2.speak()).to.eq('Mable says squawk!')
  })
})
