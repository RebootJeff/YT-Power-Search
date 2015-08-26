angular.module('app')
.controller('WarnWipToastCtrl', function($mdToast, $window) {
  var warnWipToast = this;

  warnWipToast.navigateToCode = function() {
    $window.location.href = 'https://github.com/rebootjeff/yt-power-search';
  };

  warnWipToast.stayOnPage = function() {
    var hurtFeelingsToast = $mdToast.simple()
      .content('Oh...ok... (º _ º ;)')
      .position('bottom left')
      .hideDelay(1000);
    $mdToast.show(hurtFeelingsToast);
  };
});
