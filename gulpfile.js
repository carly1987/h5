var gulp = require('gulp');
var contentIncluder = require('gulp-construct');
gulp.task('construct',function() {
    gulp.src("html/elephant/**.html")
      .pipe(contentIncluder({
          includerReg:/<!\-\-include\s+"([^"]+)"\-\->/g,
          type: 'htm'
      }))
      .pipe(gulp.dest('./build'));
});