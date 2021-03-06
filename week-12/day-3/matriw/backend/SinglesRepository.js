import { createRequire } from 'module';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const require = createRequire(import.meta.url);

export default class SinglesRepository {
    dataFile = './data/singles.json';

    getSingles() {
        return require(this.dataFile);
    }

    create(single) {
        try {
            const singles = require(this.dataFile);

            single.id = this.generateId(singles);

            singles.push(single);

            this.commitChanges(singles);

            return single;
        }
        catch(err) {
            return false;
        }
    }

    update(id, newData) {
        const singles = require(this.dataFile);
        const singleToBeUpdated = singles.find((single) => single.id === parseInt(id));

        for (let [key, value] of Object.entries(newData)) {
            singleToBeUpdated[key] = value;
        }

        try {
            this.commitChanges(singles);
            return singleToBeUpdated;
        } catch (e) {
            return false;
        }
    }

    delete(id) {
        let singles = require(this.dataFile);

        const singleToBeDeleted = singles.find((single) => single.id === parseInt(id));
        singles = singles.filter((single) => single.id !== parseInt(id));

        try {
            this.commitChanges(singles);
            return singleToBeDeleted;
        } catch (e) {
            return false;
        }

    }

    commitChanges(singles) {
        fs.writeFileSync(path.join(__dirname, this.dataFile), JSON.stringify(singles, null, '\t'));
    }

    generateId(singles) {
        let lastId = parseInt(singles[singles.length - 1].id);
        return lastId + 1;
    }
}