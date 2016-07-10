const gulp = require('gulp');
const connect = require('gulp-connect');
const babel = require('gulp-babel');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
 const webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      host:'localhost',
      port:8081,
      livereload: true,
      open: true
    }));
});

gulp.task('js',()=>{
	browserify('./app/js/index.js')
	.transform(babelify,{presets: ['es2015']})
	.bundle()
	.pipe(source('all.js'))
	.pipe(gulp.dest('app/js/transp'))
});


gulp.watch(['app/js/*.js'], function(event) {
    gulp.run('js');
});

gulp.task('default',['js','webserver'],()=>{

});