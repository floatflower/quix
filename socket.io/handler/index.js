class SocketIOHandler {

    constructor(event, namespace = '/') {
        this.namespace = namespace;

        // use 'connect' or 'disconnect',
        // can also handle Connect or Disconnect event.
        // when listening 'connect' or 'disconnect' event,
        // the message parameter at handle() function will be null.
        // to put it differently,
        // just tell you which socket connected ot disconnected.
        this.event = event;
    }

    /**
     * @abstract
     * @param socket
     * @param message
     */
    handle(socket, message) {}
}

module.exports = SocketIOHandler;