angular.module('app', [
  'ngMaterial'
]);

angular.module('app').controller('MainCtrl', function(Search) {
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
