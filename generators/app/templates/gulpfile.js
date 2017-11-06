const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const webpack = require('webpack-stream');
const reload = browserSync.reload;

const config = require('./app.config');

gulp.task('build:styles', function() {
  var plugins = [
    autoprefixer({browsers: ['last 2 version']}),
    cssnano()
  ];
  return gulp.src(config.scss.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.scss.dest))
    .pipe(plumber.stop())
    .pipe(reload({
      stream: true
    }))
});

gulp.task('build:scripts', function() {
  return gulp.src('./app/js/index.js')
    .pipe(plumber())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./app/js'))
    .pipe(plumber.stop())
    .pipe(reload({
      stream: true
    }))
});

gulp.task('build',['build:styles','build:scripts']);

function watch() {
  gulp.watch(config.scss.src,['build:styles']);
  gulp.watch(config.html.src, reload);
  gulp.watch(config.js.src, ['build:scripts']);
}

gulp.task('serve', ['build'], function() {
  browserSync.init({
    port: 9000,
    server: {
     baseDir: config.distDir
    }
  })
  watch();
});

gulp.task('default',['serve']);
