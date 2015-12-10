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
var order = require('gulp-order');
var gulpIgnore = require('gulp-ignore');
var gulpif = require('gulp-if');
var streamqueue = require('streamqueue');
var declare = require('gulp-declare');



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
	return gulp.src([d.src])
		.pipe(typescript({

			"module": "amd"


		})).pipe(strip())
		.pipe(gulp.dest('public/ts_Compiled_Js')).pipe(concat('scripts.min.js'))
		.pipe(declare({
			namespace: 'App',
			noRedeclare: true // Avoid duplicate declarations 
		}))
	//.pipe(uglify())
		.pipe(gulp.dest(d.minifiedJs))
		.pipe(browserSync.reload({ stream: true }))


});


var compressing = false;



gulp.task('scripts', function () {


	//	gulp.src('./public/js/app_module/*.js'),
				

	gulp.src('public/ts_Compiled_Js/**/*.js')
		.pipe(concat('scripts.min.js'))
		.pipe(declare({
			namespace: 'App',
			noRedeclare: true // Avoid duplicate declarations 
		}))
	//.pipe(uglify())
		.pipe(gulp.dest(d.minifiedJs))
		.pipe(browserSync.reload({ stream: true }))


	//  streamqueue({ objectMode: true },
	// 			
	// 			
	// 		
	// 			
	// 	)
	
	
	
	//pipe.pipe(order([fileOrderPath]));
	

	

	// pipe.pipe(function () {
	// 	return gulpif(compressing, uglify());
	// })




});


gulp.task('cs', ['compile', 'scripts'])
