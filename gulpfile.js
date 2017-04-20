var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function () {
  return gulp.src('./blog/static/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./blog/static/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./blog/static/sass/*.scss', ['sass']);
});

gulp.task('jshint', function() {
  return gulp.src('./blog/static/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['sass', 'sass:watch']);





