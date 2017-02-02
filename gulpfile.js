'use strict';

var gulp         = require('gulp'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    rename       = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync  = require('browser-sync').create();
var minifyCSS    = require('gulp-minify-css');
var order        = require("gulp-order");
var print        = require('gulp-print');
var htmlmin = require('gulp-htmlmin');
var sourcemaps = require('gulp-sourcemaps');


var DEST = 'release/';

gulp.task('scripts', function () {
    return gulp.src([
                        'src/js/**/*.js'
                    ])
               .pipe(order([
                               'jquery-1.11.0.min.js',
                               'bootstrap.min.js',
                               'bootstrap-hover-dropdown.js',
                               'bootstrapValidator.min.js',
                               'jquery.sticky.js',
                               'jquery.flexslider-min.js',
                               'overlay/modernizr.js',
                               'jquery.flexisel.js',
                               'jquery.prettyPhoto.js',
                               'jquery.mixitup.min.js',
                               'jquery.fitvids.js',
                               'jquery.easing.1.3.js',
                               'jquery.appear.js',
                               'effect.js',
                               'tweet/carousel.js',
                               'tweet/scripts.js',
                               'tweet/tweetie.min.js',
                               'custom.js',
                               'color-panel.js'
                           ]), {base: './src/js/'})
               .pipe(sourcemaps.init())
               .pipe(concat('bundle.js'))
               .pipe(gulp.dest(DEST + 'js'))
               .pipe(rename({suffix: '.min'}))
               .pipe(uglify())
               .pipe(sourcemaps.write('./'))
               .pipe(gulp.dest(DEST + 'js'))
               .pipe(browserSync.stream());
});

gulp.task('styles', function () {
    gulp.src('src/css/**/*.css')
        .pipe(order([
                        'flaticon.css',
                        'bootstrap.min.css',
                        'portfolio.css',
                        'animate.min.css',
                        'prettyPhoto.css',
                        'flexslider.css',
                        'tweet-carousel.css',
                        'style.css',
                        'responsive.css',
                        'color_panel.css',
                        'color-schemes/red.css'
                    ]), {base: './src/css/'})
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.css'))
        .pipe(autoprefixer('last 2 version', '> 5%'))
        .pipe(gulp.dest(DEST + '/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifyCSS())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(DEST + 'css'))
        .pipe(browserSync.stream());
});

gulp.task('html', function () {
    gulp.src('./src/**/*.html')
        .pipe(htmlmin({removeComments: true, collapseWhitespace:true, conservativeCollapse: true}))
        .pipe(gulp.dest(DEST))
        .pipe(browserSync.stream());
});

gulp.task('copyFiles', function () {
    gulp.src([
                 './src/**/*',
                 '!./src/**/*.{css,js,html}'
             ])
        .pipe(gulp.dest(DEST ));
});

gulp.task('build', ['styles', 'scripts', 'copyFiles', 'html'], function () {

});

gulp.task('browser-sync', function () {
    browserSync.init({
                         server   : {
                             baseDir: './'
                         },
                         startPath: './release/index.html'
                     });
});

gulp.task('watch', function () {
    // Watch .html files
    gulp.watch('src/*.html', browserSync.reload);
    // Watch .js files
    gulp.watch('src/js/**/*.js', ['scripts']);
    // Watch .css files
    gulp.watch('src/css/**/*.css', ['styles']);
});

gulp.task('serve', ['build', 'browser-sync', 'watch']);

// Default Task
gulp.task('default', ['build']);
