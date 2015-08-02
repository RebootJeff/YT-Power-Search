angular.module('app').service('Search', function(Google) {
  'use strict';
  var svc = this;

  svc.getVideos = function(config) {
    var params = {
      part: 'snippet',
      q: config.keywords,
      maxResults: 50
    };

    return Google.getYouTubeApi()
      .then(function(api) {
        return api.search.list(params);
      })
      .then(function(response) {
        console.log(response.result.items);
        return response.result.items;
      });
  };

});
