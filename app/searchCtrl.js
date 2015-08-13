angular.module('app')
.controller('SearchCtrl', function(Search) {
  'use strict';
  var ctrl = this;
  ctrl.loading = false;
  ctrl.resultsOrderReverse = false;
  ctrl.resultsOrderProp = 'relevanceRank';

  // TODO: Add proper filtering abilities
  ctrl.resultsFilterPredicate = function(searchResult) {
    return true;
  };

  ctrl.submit = function() {
    var searchConfig = {
      keywords: ctrl.keywords
    };

    ctrl.results = [];
    ctrl.loading = true;

    Search.getVideos(searchConfig)
      .then(function(results) {
        ctrl.results = results;
      })
      .finally(function() {
        ctrl.loading = false;
      });
  };
});
