angular.module('app')
.controller('SearchCtrl', function(Search) {
  'use strict';
  var ctrl = this;
  ctrl.loading = false;

  ctrl.submit = function() {
    var searchConfig = {
      keywords: ctrl.keywords
    };

    ctrl.results = [];
    ctrl.loading = true;

    Search.getVideos(searchConfig)
      .then(function(results) {
        console.log(results);
        ctrl.results = results;
      })
      .finally(function() {
        ctrl.loading = false;
      });
  };
});
