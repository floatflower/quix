const fileLoader = require('../file-loader');
const path = require('path');
const bus = require('../bus');

class EventHandlerLoader
{
    constructor()
    {
        this.handlers = new Map();
        this.listening = new Map();
    }

    load() {
        let projectDir = process.cwd();

        fileLoader(`${projectDir}/src/event-handler`).map((file) => {
            if (path.basename(file).match(/^[a-zA-Z0-9\-]+.js$/)) {

                let handler = new (require(file))();
                this.handlers.set(path.basename(file, '.js'), handler);
                this.listening.set(path.basename(file, '.js'), true);
                bus.on(handler.event, handler.handle);

            }
        })
    }

    startListenEvent(handlerName) {
        if(this.handlers.has(handlerName) && this.listening.get(handlerName)) {
            let handler = this.handlers.get(handlerName);
            bus.on(handler.event, handler.handle);
        }
    }

    stopListenEvent(handlerName) {
        if(this.handlers.has(handlerName) && !this.listening.get(handlerName)) {
            let handler = this.handlers.get(handlerName);
            bus.removeListener(handlerName, handler.handle);
        }
    }

}

const eventHandlerLoader = new EventHandlerLoader();

module.exports = eventHandlerLoader;