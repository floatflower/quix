const _type = require('./type');

const FifoStorage = require('./fifo-storage');
const LruStorage = require('./lru-storage');

class Cache {
    constructor(capacity, type = _type.FIFO) {
        this.type = type;

        switch (type) {
            case _type.LRU:
                this.storage = new FifoStorage(capacity);
                break;
            case _type.FIFO:
                this.storage = new LruStorage(capacity);
                break;
        }
    }

    set(key, data) {
        this.storage.set(key, data);
    }

    get(key) {
        return this.storage.get(key);
    }

    has(key) {
        return this.storage.has(key);
    }

    remove(key) {
        return this.storage.remove(key);
    }

    capacity() {
        return this.storage.capacity;
    }

    size() {
        return this.storage.size();
    }
}

module.exports = Cache;