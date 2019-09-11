class RepositoryLoader
{
    constructor() {
        this.repositoryConstructors = new Map();
    }

    set(name, cons) {
        this.repositoryConstructors.set(name, cons);
    }

    get(name) {
        if(this.repositoryConstructors.has(name)) {
            return new this.repositoryConstructors.get(name);
        }
        return null;
    }
}

const repositoryLoader = new RepositoryLoader();

module.exports = repositoryLoader;