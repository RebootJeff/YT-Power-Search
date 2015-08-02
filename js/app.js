function init() {
  // This is a work-around akin to Google's suggestion of using gapi with Angular:
  // https://cloud.google.com/solutions/angularjs-cloud-endpoints-recipe-for-building-modern-web-applications?hl=en
  window.initGapi();
}

angular.module('app', [
  'ngMaterial'
]);

angular.module('app').run(function($window, Google) {
  $window.initGapi = Google.initYouTubeApi;
});

angular.module('app').controller('MainCtrl', function(Search) {
  'use strict';
  var ctrl = this;

  ctrl.submit = function() {
    var searchConfig = {
      keywords: ctrl.keywords
    };

    Search.getVideos(searchConfig)
      .then(function(results) {
        // TODO: update controller data
      });
  };
});
