describe('index.js', function () {
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

  afterEach(function () {
    expect(drivers, 'MAKE SURE YOUR ARRAY MANIPULATIONS ARE NON-DESTRUCTIVE').to.eql(['Antonia', 'Nuru', 'Amari', 'Mo']);
  });

  describe('returnFirstTwoDrivers()', function () {
    it('should return a new array containing the first two drivers from the passed-in array', function () {
      expect(returnFirstTwoDrivers(drivers)).to.eql(['Antonia', 'Nuru']);
    });
  });

  describe('returnLastTwoDrivers()', function () {
    it('should return an array of the last two drivers', function () {
      expect(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])).to.eql(['Amari', 'Mo']);
    });
  });

  describe('selectingDrivers', function () {
    it('has the `returnFirstTwoDrivers` function to as its first element', function () {
      expect(selectingDrivers[0]).to.eql(returnFirstTwoDrivers);
    });

    it('has the `returnLastTwoDrivers` function to as its last element', function () {
      expect(selectingDrivers[1]).to.eql(returnLastTwoDrivers);
    });

    it('allows us to invoke either function from the array', function () {
      expect(selectingDrivers[0](drivers)).to.eql(['Antonia', 'Nuru']);

      expect(selectingDrivers[1](drivers)).to.eql(['Amari', 'Mo']);
    });
  });

  describe('createFareMultiplier()', function () {
    it('returns a function', function () {
      const fareMultiplier = createFareMultiplier(2);

      expect(fareMultiplier).to.be.a('function');
    });

    it('should multiply a given value using the created multiplier', function () {
      const fareQuintupler = createFareMultiplier(5);

      expect(fareQuintupler(5)).to.eql(25);
    });
  });

  describe('fareDoubler()', function () {
    it('is a function', function () {
      expect(fareDoubler).to.be.a('function');
    });

    it('doubles fares', function () {
      expect(fareDoubler(10)).to.eql(20);
    });
  });

  describe('fareTripler()', function () {
    it('is a function', function () {
      expect(fareTripler).to.be.a('function');
    });

    it('triples fares', function() {
      expect(fareTripler(12)).to.eql(36);
    });
  });

  describe('selectDifferentDrivers(arrayOfDrivers, function)', function () {
    it('returns the first two drivers when passed returnFirstTwoDrivers() as the second argument', function () {
      expect(selectDifferentDrivers(drivers, returnFirstTwoDrivers)).to.eql(['Antonia', 'Nuru']);
    });

    it('returns the last two drivers when passed returnLastTwoDrivers() as the second argument', function () {
      expect(selectDifferentDrivers(drivers, returnLastTwoDrivers)).to.eql(['Amari', 'Mo']);
    });
  });
});
