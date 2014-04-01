var gulp = require('gulp')
  , compass = require('gulp-compass')
  , concat = require('gulp-concat')
  , minifyCSS = require('gulp-minify-css');

var paths = {
  css: 'sass/*.scss',
  javascript: 'javascripts/*.js'
}

gulp.task('css', function () {
  gulp.src('./sass/*.scss')
    .pipe(compass({ css: './tmp/css' }))
    .on('error', function(err) {})
    .pipe(minifyCSS())
    .pipe(concat('iancmyers.min.css'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function () {
  gulp.watch(paths.css, ['css']);
});

gulp.task('default', ['css', 'watch']);