angular.module('app')
.service('Google', function($q) {
  'use strict';
  var svc = this;

  // Key can only be used by "referrers" specified in Google Developers Console
  var API_KEY = 'AIzaSyAzOveAND1b1HR9cIoGCawEThKQpU8NB5U';

  var initDone = $q.defer();

  function getGapiClient() {
    return initDone.promise;
  }

  svc.initGoogleApi = function() {
    gapi.client.setApiKey(API_KEY);
    gapi.client.load('youtube', 'v3')
      .then(function() {
        initDone.resolve(gapi.client);
      });
  };

  svc.searchYouTubeVideos = function(options) {
    var defaults = {
      part: 'snippet',
      q: 'batman',
      order: 'relevance',
      type: 'video',
      regionCode: 'us',
      relevanceLanguage: 'en',
      maxResults: 50
    };
    var searchParams = angular.extend(defaults, options);

    return getGapiClient().then(function(gapiClient) {
      return gapiClient.youtube.search.list(searchParams);
    });
  };

  svc.getYouTubeVideo = function(id) {
    var detailParams = {
      part: 'contentDetails',
      id: id,
      maxResults: 50
    };

    return getGapiClient().then(function(gapiClient) {
      return gapiClient.youtube.videos.list(detailParams);
    });
  };

  svc.getYouTubeVideos = function(ids, params) {
    // TODO: Use gapiClient's batch request feature
  };


});
