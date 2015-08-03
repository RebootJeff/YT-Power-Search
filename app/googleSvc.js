angular.module('app')
.service('Google', function($q) {
  'use strict';
  var svc = this;

  // Key can only be used by "referrers" specified in Google Developers Console
  var API_KEY = 'AIzaSyAzOveAND1b1HR9cIoGCawEThKQpU8NB5U';

  var initDone = $q.defer();

  svc.searchYouTubeVideos = function(params) {
    return initDone.promise.then(function(gapiClient) {
      return gapiClient.youtube.search.list(params);
    });
  };

  svc.initGoogleApi = function() {
    gapi.client.setApiKey(API_KEY);
    gapi.client.load('youtube', 'v3')
      .then(function() {
        initDone.resolve(gapi.client);
      });
  };

});
