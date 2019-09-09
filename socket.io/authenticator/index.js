class SocketIOAuthenticator {

    constructor(namespace = '/', timeout = 1000) {
        this.namespace = namespace;
        this.timeout = timeout;
    }

    /**
     * @abstract
     * @param socket
     * @param data
     * @param callback
     */
    authenticate(socket, data, callback) {}

    /**
     * @abstract
     * @param socket
     * @param data
     */
    postAuthenticator(socket, data) {}
}

exports.module = SocketIOAuthenticator;