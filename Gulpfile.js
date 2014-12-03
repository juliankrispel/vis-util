var gulp = require('gulp');
var package = require('./package.json');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var wrap = require('gulp-wrap');

gulp.task('default', function(){
    gulp.watch('src/**/*.js', ['build']);
});

gulp.task('build', function() {
    gulp.src('src/*.js')
        .pipe(concat(package.name + '.js'))
        .pipe(wrap({src: 'gulp-wrap-templates/global.js'}))
        .pipe(gulp.dest('./dist'))
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('./dist'));


    gulp.src('src/*.js')
        .pipe(concat(package.name + '.js'))
        .pipe(wrap({src: 'gulp-wrap-templates/angular-wrap.js'}))
        .pipe(rename({extname: '.angular.js'}))
        .pipe(gulp.dest('./dist'))
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('./dist'));

    return gulp.src('src/*.js')
        .pipe(concat(package.name + '.js'))
        .pipe(wrap({src: 'gulp-wrap-templates/amd.js'}))
        .pipe(rename({extname: '.amd.js'}))
        .pipe(gulp.dest('./dist'))
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('./dist'));

});
