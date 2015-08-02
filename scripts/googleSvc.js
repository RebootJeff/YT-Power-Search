angular.module('app').service('Google', function($q) {
  'use strict';
  var svc = this;

  // Key can only be used by "referrers" specified in Google Developers Console
  var API_KEY = 'AIzaSyAzOveAND1b1HR9cIoGCawEThKQpU8NB5U';

  var initDone = $q.defer();

  svc.getYouTubeApi = function() {
    return initDone.promise;
  };

  svc.initYouTubeApi = function() {
    gapi.client.setApiKey(API_KEY);
    gapi.client.load('youtube', 'v3')
      .then(function() {
        initDone.resolve(gapi.client.youtube);
      });
  };

});
