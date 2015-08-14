angular.module('app')
.directive('ypsSearchForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/searchForm/searchForm.html'
  };
});
