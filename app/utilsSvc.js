angular.module('app')
.service('Utils', function(R) {
  'use strict';
  var svc = this;

  var curriedParseInt = R.curry(parseInt);
  svc.numberifyObjVals = R.mapObj(curriedParseInt(R.__, 10));

});
