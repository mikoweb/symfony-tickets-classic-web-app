import gulp from 'gulp';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';

/**
 * @param {string} src
 * @param {string} dest
 */
export default (src, dest) => {
    return gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(sourcemaps.write('.', {includeContent: false}))
        .pipe(gulp.dest(dest));
};
