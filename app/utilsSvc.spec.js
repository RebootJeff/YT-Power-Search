describe('Utils Service', function() {
  'use strict';

  var Utils;

  beforeEach(module('app'));
  beforeEach(inject(function(_Utils_) {
    Utils = _Utils_;
  }));

  describe('numberifyObjVals method', function() {
    it('should convert an object\'s values into numbers', function() {
      var obj = { a: '1', b: '2', c: '3' };
      var result = Utils.numberifyObjVals(obj);
      expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });
  });

});
