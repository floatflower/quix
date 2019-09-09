class EventHandler {

    constructor(event) {
        this.event = event;
    }

    /**
     * @abstract
     * @param payload
     * @param event
     */
    handle(payload, event) {}

}

module.exports = EventHandler;