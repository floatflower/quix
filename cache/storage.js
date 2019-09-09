class Storage {

    constructor(capacity) {
        this.storage = new Map();
        this.capacity = capacity;
    }

    /**
     * @abstract
     * @param key
     * @param value
     */
    set(key, value) {}

    /**
     * @param key
     */
    has(key) {
        this.storage.has(key);
    }

    /**
     * @abstract
     * @param key
     */
    get(key) {}

    /**
     * @abstract
     * @param key
     */
    remove(key) {}

    size() {
        return this.storage.size;
    }
}

module.exports = Storage;