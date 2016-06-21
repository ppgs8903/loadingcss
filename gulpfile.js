/**
 * Created by jasontao on 2016/6/21.
 */
var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('build:less', function () {
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'));
});

gulp.task('default', function(){
    gulp.run('build:less');

    gulp.watch('src/**/*.less', ['build:less']);
});