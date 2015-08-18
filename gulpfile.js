'use strict';

var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');

gulp.task('clean-scripts', function() {
  del('./main.js');
});

gulp.task('build-scripts', ['clean-scripts'], function() {
  return gulp.src('./app/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('./app/**/*.js', ['build-scripts']);
});

gulp.task('default', ['build-scripts', 'watch']);
