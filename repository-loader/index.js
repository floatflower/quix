const path = require('path');

const fileLoader = require('../file-loader');

class RepositoryLoader
{
    constructor() {
        this.repositoryConstructors = new Map();
    }

    load() {

        let projectDir = `${process.cwd()}/src/repository`;

        fileLoader(projectDir).map((file) => {
            if(path.basename(file).match(/^[a-zA-Z0-9\-]+.js$/)) {
                let repository = require(file);
                this.repositoryConstructors.set(path.basename(file, '.js'), repository);
            }
        })

    }

    get(name) {
        if(this.repositoryConstructors.has(name)) {
            return new (this.repositoryConstructors.get(name))();
        }
        return null;
    }
}

const repositoryLoader = new RepositoryLoader();

module.exports = repositoryLoader;