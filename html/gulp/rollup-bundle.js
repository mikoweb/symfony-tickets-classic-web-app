import Path from './path.js';
import {rollup} from 'rollup';
import {terser} from "rollup-plugin-terser";
import nodeResolve from './node-resolve.js';
import commonjs from 'rollup-plugin-commonjs';
import getGlobals from './global-modules.js';

/**
 * @param {string} inputPath
 * @param {string} distFileName
 * @param {Object} [resolveOptions]
 * @param {Object} [commonjsOptions]
 *
 * @return {Promise}
 */
export default (inputPath, distFileName, resolveOptions = {}, commonjsOptions = {}) => {
    return new Promise((resolve, reject) => {
        rollup({
            input: inputPath,
            external: Object.keys(getGlobals()),
            plugins: [
                nodeResolve(Object.assign({
                    browser: true
                }, resolveOptions)),
                commonjs(Object.assign({}, commonjsOptions)),
            ],
        }).then((bundle) => {
            resolve(Promise.all([
                bundle.write({
                    file: Path.bundle('/' + distFileName),
                    format: 'iife',
                    sourcemap: true,
                    globals: getGlobals(),
                }),
                bundle.write({
                    file: Path.bundle('/' + distFileName.replace('.js', '.min.js')),
                    format: 'iife',
                    sourcemap: true,
                    globals: getGlobals(),
                    plugins: [terser()]
                })
            ]));
        }).catch((e) => {
            reject(e);
        });
    });
};
