const path = require('path');

const fileLoader = require('../file-loader');

class ConfigurationLoader
{
    constructor() {
        this.namespaces = new Map();
    }

    load() {
        let projectDirectory = process.cwd();
        let configurationFiles = fileLoader(`${projectDirectory}/src/config`)

        configurationFiles.forEach(configFile => {

            const namespace = path.basename(configFile, 'js');
            const config = require(configFile);
            console.log(namespace, config);

        })
    }

    get(namespace, key) {

        if(!this.namespaces.has(namespace)) {
            return null;
        } else if(!this.namespaces.get(namespace).has(key)) {
            return null
        } else {
            return this.namespaces.get(namespace).get(key);
        }

    }
}

const configurationLoader = new ConfigurationLoader();

module.exports = configurationLoader;