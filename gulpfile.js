var gulp = require('gulp');
var gulpRubbish = require('./gulp-rubbish');

gulp.task('default', function () {
    gulp.src('test.css', { buffer: true }).pipe(gulpRubbish('assets', '*'));

    gulp.src('test.css', { buffer: true }).pipe(gulpRubbish('assets', 'jpg'));

});
