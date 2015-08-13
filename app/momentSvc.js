angular.module('app')
.factory('Moment', function($window) {
  'use strict';

  // Why create an Angular factory just to pull in a globally scoped library?
  // Because using modules (and services/factories) allows for cleaner
  // management of dependencies (e.g., testing is easier).
  return $window.moment;
});
