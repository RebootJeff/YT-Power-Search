angular.module('app')
.directive('ypsPreSearchInputs', function() {
  return {
    restrict: 'E',
    scope: {
      ngModel: '='
    },
    templateUrl: 'app/components/preSearchInputs.html',
    controller: 'PreSearchCtrl',
    controllerAs: 'preSearch'
  };
})

.controller('PreSearchCtrl', function($scope, Globalization) {
  'use strict';
  var preSearch = this;

  preSearch.selectedRegion = $scope.ngModel.selectedRegion;
  preSearch.selectedLanguage = $scope.ngModel.selectedLanguage;
  preSearch.regions = Globalization.regions;
  preSearch.languages = Globalization.languages;

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
