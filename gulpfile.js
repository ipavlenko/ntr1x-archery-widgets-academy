var gulp = require('gulp');
var concat = require('gulp-concat');
var cleancss = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

gulp.task('scripts', function(cb) {
    gulp.src(['src/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('widgets.js'))
        .pipe(babel())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js/'))
        .on('end', cb)
})

gulp.task('styles', function(cb) {
    gulp.src(['src/**/*.css'])
        .pipe(sourcemaps.init())
        .pipe(cleancss())
        .pipe(concat('widgets.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css/'))
        .on('end', cb)
    ;
})

gulp.task('templates', function(cb) {
    gulp.src(['src/**/*.htm'])
        .pipe(sourcemaps.init())
        .pipe(concat('widgets.htm'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/htm/'))
        .on('end', cb)
    ;
})

gulp.task('default', [
    'scripts',
    'styles',
    'templates',
])

gulp.task('watch', function() {

    gulp.start('default');

    gulp.watch('src/**/*.js', [ 'scripts' ])
    gulp.watch('src/**/*.css', [ 'styles' ])
    gulp.watch('src/**/*.htm', [ 'templates' ])
})
