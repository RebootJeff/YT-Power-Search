angular.module('app')
.directive('ypsPreSearchInputs', function() {
  return {
    restrict: 'E',
    scope: {
      ngModel: '='
    },
    templateUrl: 'app/components/searchForm/preSearchInputs.html',
    controller: 'PreSearchCtrl',
    controllerAs: 'preSearch'
  };
})

.controller('PreSearchCtrl', function($scope, Globalization) {
  'use strict';
  var preSearch = this;

  preSearch.regions = Globalization.regions;
  preSearch.languages = Globalization.languages;
  preSearch.durations = [
    { display: 'Any (default)', value: 'any'},
    { display: 'Long (> 20 min)', value: 'long'},
    { display: 'Medium (4-20 min)', value: 'medium'},
    { display: 'Short (< 4 min)', value: 'short'}
  ];
  preSearch.safeSearches = [
    { display: 'None', value: 'none'},
    { display: 'Moderate (default)', value: 'moderate'},
    { display: 'Strict', value: 'strict'}
  ];

  function createFilterFor(query, key) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(item) {
      return (item[key].indexOf(lowercaseQuery) === 0);
    };
  }

  preSearch.filterAutoComplete = function(searchText, key, items) {
    var results = searchText ? items.filter(createFilterFor(searchText, key)) : items;
    return results;
  };
})

;
