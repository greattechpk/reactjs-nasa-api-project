//dependencies
const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const changed = require('gulp-changed');
const browserSync = require('browser-sync').create();


//////////////
//SCSS/CSS
//////////////

 const SCSS_SRC = './src/Assets/scss/**/*.scss';
 const SCSS_DEST = './src/Assets/css';

function style(){
    return gulp.src(SCSS_SRC)

    .pipe(sass().on('error',sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(changed(SCSS_DEST))

    .pipe(gulp.dest(SCSS_DEST))
}

// function watch(){
//     browserSync.init({
//         server: {
//             baseDIR:'./',
//             index: "./public/index.html"
//         }
//     });
//     gulp.watch(SCSS_SRC, style).on('change',browserSync.reload);
//     gulp.watch('./public/*.html').on('change',browserSync.reload);
//     gulp.watch('./src/*.js').on('change',browserSync.reload);
// }

exports.style = style;
exports.watch = watch;

