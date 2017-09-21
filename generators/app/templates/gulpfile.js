const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const runSequence = require('run-sequence');
const reload = browserSync.reload;

const config = {
    src : {
      scss: "app/styles/**/*.scss"
    },

    dest: {
      css: "app/styles"
    }
};

gulp.task('styles', function() {
  var plugins = [
    autoprefixer({browsers: ['last 2 version']}),
    cssnano()
  ];
  return gulp.src(config.src.scss)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest.css))
    .pipe(plumber.stop())
    .pipe(reload({
      stream: true
    }))
});


gulp.task('serve', () => {
  runSequence(['build'], () => {
    browserSync.init({
      notify: false,
      port: 9000,
      server: {
        baseDir: ['app']
      }
    });

    gulp.watch([
      'app/*.html',
      'app/images/**/*',
      'app/fonts/**/*'
    ]).on('change', reload);

    gulp.watch(config.src.scss, ['styles']);
  });
});

gulp.task('build',['styles']);
