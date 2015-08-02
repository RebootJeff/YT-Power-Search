angular.module('app').service('Search', function(Google) {
  'use strict';
  var svc = this;

  function deserializeSearchResult(item) {
    return {
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      channel: item.snippet.channelTitle,
      thumbnailUrl: item.snippet.thumbnails.default.url,
      id: item.id.videoId
    };
  }

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
        return response.result.items.map(deserializeSearchResult);
      });
  };

});
