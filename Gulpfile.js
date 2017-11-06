const gulp = require('gulp');
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

gulp.task('sass', () => gulp.src('scss/**/*.s[ac]ss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css')));

gulp.task('lint', () => gulp.src('scss/**/*.s[ac]ss')
  .pipe(sassLint())
  .pipe(sassLint.failOnError()));

gulp.task('prod', () => gulp.src('scss/**/*.s[ac]ss')
  .pipe(sass().on('error', sass.logError))
  .pipe(rename('readable.css'))
  .pipe(gulp.dest('./css/'))
  .pipe(cssmin())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('./css/')));

gulp.task('watch', () => gulp.watch('scss/**/*.s[ac]ss', ['lint', 'sass']));
gulp.task('default', ['lint', 'prod']);
