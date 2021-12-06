import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import Path from './path.js';

/**
 * @param {Array} src
 * @param {string} fileName
 */
export default (src, fileName) => {
    return gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(concat(fileName))
        .pipe(gulp.dest(Path.bundle()))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(sourcemaps.write('.', {includeContent: false}))
        .pipe(gulp.dest(Path.bundle()));
};
