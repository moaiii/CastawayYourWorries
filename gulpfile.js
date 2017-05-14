var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');


gulp.task('sass', function() {
  return gulp.src('./static/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/css'));
});
 
gulp.task('sass:watch', function() {
  gulp.watch('./static/sass/*.scss', ['sass']);
});

gulp.task('js-concat', function() {
  return gulp.src([
      './static/js/modules/base.js', 
      './static/js/modules/about.js',
      './static/js/modules/scrollevent.js', 
      './static/js/modules/animations.js',
      './static/js/modules/init.js' 
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./static/js'));
})

gulp.task('js:watch', function () {
  gulp.watch('./static/js/modules/*.js', ['js-concat']);
});


gulp.task('default', ['js-concat', 'sass', 'sass:watch', 'js:watch']);





