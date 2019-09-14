const Storage = require('./storage');

class FIFOStorage extends Storage
{
    constructor(size) {
        super(size);
        this.queue = [];
    }

    set(key, value) {
        if(!this.storage.has(key)) {
            if(this.storage.size >= this.capacity) {
                this.storage.delete(this.queue[0]);
                this.queue.unshift();
                this.queue.push(key);
            }
            else {
                this.queue.push(key);
            }
        }

        this.storage.set(key, value);
    }

    get(key) {
        if(this.storage.has(key)) {
            return this.storage.get(key);
        }
        return null;
    }

    remove(key) {
        if(this.storage.has(key)) {
            return this.storage.delete(key);
        }
        return null;
    }
}

module.exports = FIFOStorage;