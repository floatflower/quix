class EventDispatcher {

    constructor() {
        this.handlers = new Map();
    }

    register(handler) {
        this.handlers.set(handler.event, handler);
    }

    dispatch(event, message) {
        if(this.handlers.has(event)) {
            this.handlers.get(event).handle(message);
        }
        // ignore message if event is not be listened.
    }
}

const singletonDispatcher = new EventDispatcher();

module.exports = singletonDispatcher;