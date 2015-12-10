var gulp = require('gulp');
var typescript = require('gulp-tsc');

var jshint = require('gulp-jshint');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var path = require('path');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var strip = require('gulp-strip-comments');






gulp.task('compile', function () {
	return gulp.src(['public/ts/**/*.ts'])
		.pipe(typescript())
		.pipe(gulp.dest('public/ts_Compiled_Js'))
});





gulp.task('scripts', function () {
	return gulp.src(['public/ts_Compiled_Js/**/*.js'])
  				  .pipe(concat('scripts.min.js')).
					  				  pipe(strip())
	//	.pipe(uglify())
		.pipe(gulp.dest('public/js'))
		.pipe(browserSync.reload({ stream: true }));


});


gulp.task('cs',['compile','scripts'])
