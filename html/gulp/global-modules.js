import {default as fsExtra} from 'fs-extra';
import fs from 'fs';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const importJSON = (filename) => {
    return JSON.parse(fs.readFileSync(filename));
}

const getGlobals = () => {
    if (fsExtra.pathExistsSync(__dirname + '/../globals.custom.json')) {
        return importJSON(__dirname + '/../globals.custom.json');
    } else {
        return importJSON(__dirname + '/../globals.default.json');
    }
};

export default getGlobals;
