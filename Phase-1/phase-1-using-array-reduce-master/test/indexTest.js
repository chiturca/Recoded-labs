const sinon = require( 'sinon' )

describe('reducer', function() {
  describe('batteries', function() {
    it('should have a `totalBatteries` variable', function() {
      expect(totalBatteries).to.exist;
    });

    it('should have a number as a result', function() {
      expect(totalBatteries).to.be.a('number');
    });

    it('should have made the sum of all the assembled batteries', function() {
      expect(totalBatteries).to.eql(31);
    });
  });
});
