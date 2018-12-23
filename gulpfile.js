const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');



function styles() {
	return gulp.src('./src/**/*.css')
		.pipe(concat('all.css'))
		.pipe(autoprefixer({
		    browsers: ['last 2 versions'],
		    cascade: false
		}))
		.pipe(cleanCSS({
			level:2
		}))
		.pipe(gulp.dest('./build/css'));
}

function script(){
	return gulp.src('./src/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel({
		    presets: ['es2015']
		}))
		.pipe(concat('all.js'))
		.pipe(uglify({
			toplevel: true
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./build/js'));
}

gulp.task('styles', styles);
gulp.task('script', script);
