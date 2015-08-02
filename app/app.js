function init() {
  // This is a work-around akin to Google's suggestion of using gapi with Angular:
  // https://cloud.google.com/solutions/angularjs-cloud-endpoints-recipe-for-building-modern-web-applications?hl=en
  window.initGapi();
}

angular.module('app', [
  'ngMaterial'
])

.run(function($window, Google) {
  $window.initGapi = Google.initGoogleApi;
})

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('teal')
    .warnPalette('amber');
})

;
