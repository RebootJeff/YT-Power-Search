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

  // defaults
  $scope.ngModel.selectedDefinition = 'any';
  $scope.ngModel.selectedDimension = 'any';
  $scope.ngModel.selectedDuration = 'any';
  $scope.ngModel.selectedLicense = 'any';
  $scope.ngModel.selectedSafeSearch = 'none';
  $scope.ngModel.selectedType = 'any';
  $scope.ngModel.selectedEmbeddable = 'any';

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
