describe('Search Service', function() {
  'use strict';

  var Search;

  beforeEach(module('app'));
  beforeEach(inject(function(_Search_) {
    Search = _Search_;
  }));

  describe('_getLikePercentage method', function() {
    it('should calculate the percentage of likes from a statistics object', function() {
      var statistics = {
        likeCount: 1,
        dislikeCount: 1
      };
      var result = Search._getLikePercentage(statistics);
      expect(result).toBe(50);

      statistics = {
        likeCount: 1,
        dislikeCount: 0
      };
      result = Search._getLikePercentage(statistics);
      expect(result).toBe(100);
    });

    it('should output 0 for a video without any likes or dislikes', function() {
      var statistics = {
        likeCount: 0,
        dislikeCount: 0
      };
      var result = Search._getLikePercentage(statistics);
      expect(result).toBe(0);
    });
  });

});
