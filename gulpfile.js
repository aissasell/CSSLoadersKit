var gulp = require('gulp')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var cssMin = require('gulp-css')

gulp.task('css', function () {
    gulp.src('./dist-dev/*.css')
    .pipe(concat('loaders.css'))
    .pipe(cssMin())
    .pipe(gulp.dest('./dist'))
})

gulp.task('default', ['css'])