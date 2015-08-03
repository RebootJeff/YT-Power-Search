angular.module('app')
.service('Search', function(Google) {
  'use strict';
  var svc = this;

  function deserializeSearchResult(item) {
    return {
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: (new Date(item.snippet.publishedAt)).toString(),
      channelId: item.snippet.channelId,
      channelTitle: item.snippet.channelTitle,
      thumbnailUrl: item.snippet.thumbnails.default.url,
      videoId: item.id.videoId
    };
  }

  svc.getVideos = function(config) {
    var params = {
      part: 'snippet',
      q: config.keywords,
      type: 'video',
      maxResults: 50
    };

    return Google.searchYouTubeVideos(params)
      .then(function(response) {
        console.log('response:', response);
        return response.result.items.map(deserializeSearchResult);
      });
  };

});
