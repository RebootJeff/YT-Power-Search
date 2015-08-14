angular.module('app')
.controller('SearchCtrl', function(Search, Globalization) {
  'use strict';
  var ctrl = this;

  ctrl.loading = false;

  ctrl.resultsOrderReverse = false;
  ctrl.resultsOrderProp = 'relevanceRank';

  ctrl.regions = Globalization.regions;
  ctrl.languages = Globalization.languages;

  ctrl.showPrepControls = false;
  ctrl.showFunnelControls = false;
  ctrl.prepControlsButtonMessage = 'Prep the Power';
  ctrl.funnelControlsButtonMessage = 'Funnel the Power';

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

  function createFilterFor(query, key) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(item) {
      return (item[key].indexOf(lowercaseQuery) === 0);
    };
  }

  ctrl.filterAutoComplete = function(searchText, key, items) {
    var results = searchText ? items.filter(createFilterFor(searchText, key)) : items;
    return results;
  };

  ctrl.submit = function() {
    ctrl.selectedRegion = ctrl.selectedRegion || { alpha2: 'us' };
    ctrl.selectedLanguage = ctrl.selectedLanguage || { alpha2: 'en' };

    var searchConfig = {
      keywords: ctrl.keywords,
      regionCode: ctrl.selectedRegion.alpha2,
      relevanceLanguage: ctrl.selectedLanguage.alpha2
    };

    ctrl.results = [];
    ctrl.loading = true;

    Search.getVideos(searchConfig)
      .then(function(results) {
        ctrl.results = results;
      })
      .finally(function() {
        ctrl.loading = false;
      });
  };
});
