var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');


gulp.task('sass', function() {
  return gulp.src('./blog/static/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./blog/static/css'));
});
 
gulp.task('sass:watch', function() {
  gulp.watch('./blog/static/sass/*.scss', ['sass']);
});

gulp.task('js-concat', function() {
  return gulp.src([
      './blog/static/js/modules/base.js', 
      './blog/static/js/modules/scrollevent.js', 
      './blog/static/js/modules/animations.js',
      './blog/static/js/modules/init.js' 
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./blog/static/js'));
})

gulp.task('js:watch', function () {
  gulp.watch('./blog/static/js/modules/*.js', ['js-concat']);
});


gulp.task('default', ['js-concat', 'sass', 'sass:watch', 'js:watch']);





