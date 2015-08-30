angular.module('app')
.controller('SearchCtrl', function(WarnWipToast, Search, LoadingDialog) {
  'use strict';
  var ctrl = this;

  WarnWipToast.show();

  ctrl.resultsOrderReverse = false;
  ctrl.resultsOrderProp = 'relevanceRank';

  ctrl.showPrepControls = false;
  ctrl.showFunnelControls = false;
  ctrl.prepControlsButtonMessage = 'Prep the Power';
  ctrl.funnelControlsButtonMessage = 'Funnel the Power';

  ctrl.prep = {};

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

  var searchWithLoadingDialog = function(searchConfig) {
    LoadingDialog.show();

    return Search.getVideos(searchConfig)
      .then(bindSearchResults)
      .then(LoadingDialog.hide);
  };

  ctrl.submit = function() {
    var selectedRegion = ctrl.prep.selectedRegion || { alpha2: 'US' };
    var selectedLanguage = ctrl.prep.selectedLanguage || { alpha2: 'en' };

    var searchConfig = {
      keywords: ctrl.keywords,
      regionCode: selectedRegion.alpha2,
      relevanceLanguage: selectedLanguage.alpha2,
      safeSearch: ctrl.prep.selectedSafeSearch,
      videoDefinition: ctrl.prep.selectedDefinition,
      videoDimension: ctrl.prep.selectedDimension,
      videoDuration: ctrl.prep.selectedDuration,
      videoEmbeddable: ctrl.prep.selectedEmbeddable,
      videoLicense: ctrl.prep.selectedLicense,
      videoType: ctrl.prep.selectedType
    };

    ctrl.results = [];
    searchWithLoadingDialog(searchConfig);
  };

});
