/**
 *  gulpfile.js
 *
 *
 */

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    minify = require('gulp-minify'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    tap = require('gulp-tap'),
    gutil = require('gulp-util'),
    autoprefixer = require('gulp-autoprefixer'),
    sassOptions = {
      errLogToConsole: true,
      sourceComments: true
    },
    paths = {
      output: {
        css:    './dist/css'
      }
    };

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/**
 *  Process SCSS files and create both
 *  minified and unminified versions
 *
 */
gulp.task('css', function () {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(tap(function(file, t) {
      var outputName = '';
      if (file.path.indexOf('main.scss') !== -1) {
        outputName = 'main.css';
      }
      return gulp.src('./src/scss/*.scss')
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.output.css))
        .pipe(cleanCSS())
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(gulp.dest(paths.output.css));
    }));
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/**
 *  Watch files
 *
 *
 */
gulp.task('watch', function () {
   gulp.watch('./src/scss/**/*', ['css']);
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// Development
gulp.task('default',[
  'css',
  'watch'
]);
