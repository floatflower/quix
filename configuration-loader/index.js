class ConfigurationLoader
{
    constructor() {
        this.namespaces = new Map();
    }
    set(namespace, key, value) {
        if(!this.namespaces.has(namespace)) {
            this.namespaces.set(namespace, new Map())
        }

        this.namespaces.get(namespace).set(key, value);
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