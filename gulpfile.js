var gulp = require('gulp')
var webserver = require('gulp-webserver')
var sass = require('gulp-sass')
var browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')
var minify = require('gulp-minify-css')
var concat = require('gulp-concat')

gulp.task('server', function() {
  gulp.src('./build')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      fallback: 'index.html',
      livereload: true
    }))
})

gulp.task('sass', function() {
  gulp.src('./src/sass/styles.scss')
  .pipe(sass().on('error', sass.logError))
    .pipe(minify())
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('./build/css/'))
})

gulp.task('watch', function() {
  gulp.watch(['./src/sass/*.scss', './src/sass/**/*.scss'], ['sass'])
})

gulp.task('default', ['server', 'watch'])
