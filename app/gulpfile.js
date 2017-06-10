var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var minifyCss = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var concat = require('gulp-concat');
var del = require('del');
var pump = require('pump');

//sass
gulp.task('sass', function () {
    pump([
        gulp.src('assets/css/**/*.scss'),
        sass().on('error', sass.logError),
        gulp.dest('assets/css')
    ]);
});

//CSS Minification
gulp.task('min-css', function () {
    pump([
        gulp.src('assets/css/global.css'),
        concat('global.min.css'),
        minifyCss(),
        gulp.dest('assets/css')
    ]);
});

//clean scripts
gulp.task('clean-scripts', function () {
    return del('app/app.min.js');
});

//Concat and minification scripts
var jsFiles = [
    'assets/lib/angular/angular.js',
     'app/scripts/app.js',
    'app/scripts/**/*.js'
];

gulp.task('scripts', function () {
    pump([
        gulp.src(jsFiles),
        concat('app.min.js'),
        gulp.dest('app'),
        uglify(),
        gulp.dest('app')
    ]);
});

//watchers
gulp.task('watch', function () {
    gulp.watch('assets/css/**/*.scss', ['sass']);
   // gulp.watch(['scripts/**/*.js', '!app/app.min.js', '!app/_references.js'], ['scripts']);
})