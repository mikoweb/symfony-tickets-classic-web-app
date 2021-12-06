import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import gulpSass from 'gulp-sass';
import sass from 'sass';
import Path from './path.js';
import rename from 'gulp-rename';
import tildeImporter from 'node-sass-tilde-importer';
import PluginError from 'plugin-error';

export const logError = function logError(error) {
    const message = new PluginError('sass', error.messageFormatted).toString();
    process.stderr.write(`${message}\n`);
    this.emit('end');
};

/**
 * @param {string} src
 * @param {string} outFile
 */
export default (src, outFile) => {
    return gulp.src(src)
        .pipe(rename(outFile))
        .pipe(sourcemaps.init())
        .pipe(gulpSass(sass)({
            outputStyle: 'compressed',
            importer: tildeImporter,
        }).on('error', logError))
        .pipe(sourcemaps.write('.', {includeContent: false}))
        .pipe(gulp.dest(Path.bundle()));
};

