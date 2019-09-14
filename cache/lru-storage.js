const Storage = require('./storage');

class LRUStorage extends Storage
{
    constructor(size) {
        super(size);
        this.used = [];
    }

    set(key, value) {
        if(this.storage.size >= this.capacity) {
            if(!this.storage.has(key)) {
                this.storage.delete(this.used[0]);
                this.used.shift();
                this.used.push(key);
            } else {
                // no need to move storage
                this.used.splice(this.used.indexOf(key), 1);
                this.used.push(key);
            }
        } else {
            if(!this.storage.has(key)) {
                this.used.push(key);
            } else {
                this.used.splice(this.used.indexOf(key), 1);
                this.used.push(key);
            }
        }
        this.storage.set(key, value);
    }

    get(key) {
        if(this.storage.has(key)) {
            this.used.splice(this.used.indexOf(key), 1);
            this.used.push(key);
            return this.storage.get(key);
        }
        return null;
    }

    remove(key) {
        if(this.storage.has(key)) {
            this.storage.delete(key);
            this.used.splice(this.used.indexOf(key), 1);
        }
    }
}

module.exports = LRUStorage;