var gulp = require('gulp');
var typescript = require('gulp-tsc');

var jshint = require('gulp-jshint');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var path = require('path');

var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var strip = require('gulp-strip-comments');
var order = require('gulp-order');
var gulpIgnore = require('gulp-ignore');
var gulpif = require('gulp-if');
var streamqueue = require('streamqueue');

var declare = require('gulp-declare');
var concat = require('gulp-concat');



var d = {

	src: 'public/ts/**/*.ts',
	ts_Compiled_Js: 'public/ts_Compiled_Js/**/*.js',
	minifiedJs: 'public/js/',
	ts_Compiled: "public/ts/"
}

var jsExt = '/**/*.js';

// 
// var fileOrderPath = [
// 	d.ts_Compiled_Js + '1app_module' + jsExt,
// 	d.ts_Compiled_Js + 'app_controller' + jsExt
// ];



gulp.task('compile', function () {
	
	gulp.src([d.src])

		.pipe(typescript())
		// .pipe(declare({
		// 	namespace: 'App',
		// 	noRedeclare: false // Avoid duplicate declarations 
		// 	//,processName: declare.processNameByPath
		// }))
		.pipe(strip())

		.pipe(concat('scripts.min.js'))

		.pipe(gulp.dest(d.minifiedJs))
		.pipe(browserSync.reload({ stream: true }))


});


gulp.task('models', function() {
  // Define each model as a property of a namespace according to its filename
  gulp.src(['public/ts/**/*.ts'])		.pipe(typescript())		.pipe(strip())
	// .pipe(declare({
	//   namespace:'myApp',
	//   noRedeclare: false // Avoid duplicate declarations
	// }))
	.pipe(concat('models.js')) // Combine into a single file
	.pipe(gulp.dest('public/build/js/'));
});




gulp.task('cs', ['compile', 'scripts'])
