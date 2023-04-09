var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

describe('basic math functions', function () {
  it("'add()' is a valid function", function() {
    expect(add).toExist
  })

  it("'subtract()' is a valid function", function() {
    expect(subtract).toExist
  })

  it("'multiply()' is a valid function", function() {
    expect(multiply).toExist
  })

  it("'divide()' is a valid function", function() {
    expect(divide).toExist
  })

  it('add(a, b) adds two numbers and returns the result', function() {
    expect(add(a, b)).toEqual(a + b)
  })
  
  it('subtract(a, b) subtracts b from a and returns the result', function() {
    expect(subtract(a, b)).toEqual(a - b)
  })
  
  it('multiply(a, b) multiplies two numbers and returns the result', function() {
    expect(multiply(a, b)).toEqual(a * b)
  })
  
  it('divide(a, b) divides a by b and returns the result', function() {
    expect(divide(a, b)).toEqual(a / b)
  })
  
  it('increment(n) increments n and returns the result', function() {
    expect(increment(a)).toEqual(a + 1)
  })
  
  it('decrement(n) decrements n and returns the result', function() {
    expect(decrement(a)).toEqual(a - 1)
  })
})




describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })

  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})

describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})
