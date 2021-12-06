import resolve from 'rollup-plugin-node-resolve';
import getGlobals from './global-modules.js';

const nodeResolve = (options = {}) => {
    const parent = resolve(options);
    const globals = getGlobals();

    return {
        name: parent.name,
        resolveId(importee, importer) {
            if (globals.hasOwnProperty(importee)) {
                return new Promise((accept) => {
                    accept();
                });
            } else {
                return parent.resolveId(importee, importer);
            }
        }
    };
};

export default nodeResolve;
