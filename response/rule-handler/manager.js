const floatHandler = require('./float');
const integerHandler = require('./integer');
const stringHandler = require('./string');
const booleanHandler = require('./boolean');
const datetimeHandler = require('./datetime');

class HandlerManager
{
    constructor() {
        this.handlers = new Map();
        this.register('float', floatHandler);
        this.register('integer', integerHandler);
        this.register('string', stringHandler);
        this.register('boolean', booleanHandler);
        this.register('datetime', datetimeHandler);
    }

    register(name, handler) {
        this.handlers.set(name, handler);
    }

    getHandler(handlerName) {
        if(this.handlers.has(handlerName)) {
            return this.handlers.get(handlerName);
        }
        else return null;
    }
}

const handlerManager = new HandlerManager();

module.exports = handlerManager;