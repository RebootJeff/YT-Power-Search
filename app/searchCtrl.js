angular.module('app')
.controller('SearchCtrl', function(Search, $mdToast, $q, $timeout) {
  'use strict';
  var ctrl = this;

  $mdToast.show(
    $mdToast.simple()
    .content('Please keep in mind that this app is in pre-pre-beta :)')
    .action('ok')
    .position('bottom left')
    .hideDelay(10000)
  ).then(function() {
    $mdToast.show({
      templateUrl: 'app/components/warnWipToast.html',
      controller: 'WarnWipToastCtrl',
      controllerAs: 'warnWipToast',
      position: 'bottom left',
      hideDelay: 10000
    });
  });

  ctrl.loading = false;

  ctrl.resultsOrderReverse = false;
  ctrl.resultsOrderProp = 'relevanceRank';

  ctrl.showPrepControls = false;
  ctrl.showFunnelControls = false;
  ctrl.prepControlsButtonMessage = 'Prep the Power';
  ctrl.funnelControlsButtonMessage = 'Funnel the Power';

  ctrl.prep = {
    selectedRegion: {},
    selectedLanguage: {}
  };

  ctrl.togglePrepControls = function() {
    ctrl.showPrepControls = !ctrl.showPrepControls;
    if(ctrl.showPrepControls) {
      ctrl.prepControlsButtonMessage = 'Hide Prep Options';
    } else {
      ctrl.prepControlsButtonMessage = 'Prep the Power';
    }
  };

  ctrl.toggleFunnelControls = function() {
    ctrl.showFunnelControls = !ctrl.showFunnelControls;
    if(ctrl.showFunnelControls) {
      ctrl.funnelControlsButtonMessage = 'Hide Funnel Options';
    } else {
      ctrl.funnelControlsButtonMessage = 'Funnel the Power';
    }
  };

  // TODO: Add real filtering abilities
  ctrl.resultsFilterPredicate = function(searchResult) {
    return true;
  };

  function bindSearchResults(results) {
    ctrl.results = results;
  }

  function finishLoading(x) {
    return $q(function(resolve) {
      // delay makes for less jarring loading gif UX
      $timeout(function() {
        ctrl.loading = false;
        resolve();
      }, 800);
    }).then(function() {
      return x;
    });
  }

  ctrl.submit = function() {
    var selectedRegion = ctrl.prep.selectedRegion || { alpha2: 'us' };
    var selectedLanguage = ctrl.prep.selectedLanguage || { alpha2: 'en' };

    var searchConfig = {
      keywords: ctrl.keywords,
      regionCode: selectedRegion.alpha2,
      relevanceLanguage: selectedLanguage.alpha2
    };

    ctrl.results = [];
    ctrl.loading = true;

    Search.getVideos(searchConfig)
      .then(finishLoading)
      .then(bindSearchResults);
  };
});
