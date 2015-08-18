'use strict';

var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var KarmaServer = require('karma').Server;

gulp.task('clean-scripts', function() {
  del('./main.js');
});

gulp.task('build-scripts', ['clean-scripts'], function() {
  return gulp.src('./app/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('test-once', function (done) {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('test-continuously', function (done) {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, done).start();
});

gulp.task('watch', function() {
  gulp.watch('./app/**/*.js', ['build-scripts']);
});

gulp.task('default', ['build-scripts', 'watch', 'test-continuously']);
