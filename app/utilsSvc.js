angular.module('app')
.service('Utils', function(R) {
  'use strict';
  var svc = this;

  var curriedParseInt = R.curry(parseInt);

  svc.numberifyObjVals = R.mapObj(curriedParseInt(R.__, 10));

  // polyfill for Number.prototype.toLocaleString
  svc.getCommaSeparatedNumberString = function(num) {
    var str = num.toString();
    var result;

    if(Number.prototype.toLocaleString) {
      result = num.toLocaleString();
    } else {
      result = [];

      for(var i = 0; i < str.length; i++) {
        if(i % 3 === 0 && i !== 0) {
          result.unshift(',');
        }
        result.unshift(str[str.length - i - 1]);
      }

      result = result.join('');
    }

    return result;
  };

});
