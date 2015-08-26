angular.module('app')
.service('LoadingDialog', function($mdDialog, $timeout) {
  var svc = this;

  svc.show = function() {
    $mdDialog.show({
      templateUrl: 'app/components/loadingDialog/loadingDialog.html',
      escapeToClose: false,
      hasBackdrop: true
    });
  };

  svc.hide = function(x) {
    // delay makes for less jarring loading gif UX
    return $timeout($mdDialog.hide, 800)
      .then(function() {
        return x;
      });
  };

});
