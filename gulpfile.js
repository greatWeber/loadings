
let less = require('gulp-less');
let autoprefixer = require('gulp-autoprefixer');
let csslint = require('gulp-csslint');

let gulp = require('gulp');

let changed = require('gulp-changed');
let plumber = require('gulp-plumber');

let fs = require('fs');

let path = require('path');

const lessSrc = path.join(__dirname, '/packages/assets/style/*.less');

const lessDist = path.join(__dirname, '/lib/style');

//编译less
gulp.task('less', () => {
  gulp.src(lessSrc)
      .pipe(changed(lessDist))
      .pipe(plumber())
      .pipe(less())
      .pipe(autoprefixer()) //补全前缀
      .pipe(csslint()) //检查语法错误
      // .pipe(cssformat({ indent: 1, hasSpace: true })) //有bug, 会把@font-face删除
      // .pipe(csscomb())//格式化css(不管用)
      .pipe(gulp.dest(lessDist));
});
