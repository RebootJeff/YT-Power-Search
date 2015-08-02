angular.module('app')
.directive('searchResultItem', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/searchResultItem.html'
  };
});
