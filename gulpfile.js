var gulp = require('gulp'),
	livereload = require('gulp-livereload');

gulp.task('less', require('./gulp/less'));
gulp.task('sass', require('./gulp/sass'));

gulp.task('watch', function () {

	livereload.listen();
	gulp.watch('less/**/*.less', ['less']);
	gulp.watch('sass/**/*.sass', ['sass']);
});
