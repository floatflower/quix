class SocketIODispatcher {

    constructor() {
        this.socketIOsHandlers = new Map();
    }

    /**
     * @param handler
     */
    register(handler) {
        if(!this.socketIOsHandlers.has(handler.namespace)) {
            this.socketIOsHandlers.set(handler.namespace, new Map());
        }
        this.socketIOsHandlers.get(handler.namespace).set(handler.event, handler)
    }

    dispatch(namespace, event, socket, message) {

        if(this.socketIOsHandlers.has(namespace)
            && this.socketIOsHandlers.get(namespace).has(event)) {

            let handler = this.socketIOsHandlers.get(namespace).has(event);
            handler.handle(socket, message);

        }

        // ignore this message.
    }

}

const singletonDispatcher = new SocketIODispatcher();

module.exports = singletonDispatcher;