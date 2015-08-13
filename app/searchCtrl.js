angular.module('app')
.controller('SearchCtrl', function(Search, Globalization) {
  'use strict';
  var ctrl = this;
  ctrl.loading = false;
  ctrl.resultsOrderReverse = false;
  ctrl.resultsOrderProp = 'relevanceRank';

  // TODO: Add proper filtering abilities
  ctrl.resultsFilterPredicate = function(searchResult) {
    return true;
  };

  ctrl.regions = Globalization.regions;
  ctrl.languages = Globalization.languages;

  function createFilterFor(query, key) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(item) {
      return (item[key].indexOf(lowercaseQuery) === 0);
    };
  }

  ctrl.filterAutoComplete = function(searchText, key, items) {
    var results = searchText ? items.filter(createFilterFor(searchText, key)) : items;
    return results;
  };

  ctrl.submit = function() {
    ctrl.selectedRegion = ctrl.selectedRegion || { code: 'us' };
    ctrl.selectedLanguage = ctrl.selectedLanguage || { alpha2: 'en' };

    var searchConfig = {
      keywords: ctrl.keywords,
      regionCode: ctrl.selectedRegion.code,
      relevanceLanguage: ctrl.selectedLanguage.alpha2
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
