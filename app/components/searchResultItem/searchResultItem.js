angular.module('app')
.directive('ypsSearchResultItem', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/searchResultItem/searchResultItem.html'
  };
});
