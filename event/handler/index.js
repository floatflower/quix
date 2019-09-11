class EventHandler {

    constructor(event) {
        this.event = event;
    }

    /**
     * @abstract
     * @param payload
     */
    handle(payload) {}

}

module.exports = EventHandler;