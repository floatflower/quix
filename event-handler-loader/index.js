const fileLoader = require('../file-loader');
const path = require('path');
const bus = require('../bus');
const colors = require('colors');

class EventHandlerLoader
{
    constructor()
    {
        this.handlers = new Map();
        this.listening = new Map();
    }

    load() {
        let projectDir = process.cwd();

        // if the event-handler filename is foo-bar
        // then the handler name will be foo-bar
        // but in plugin built-in event-handler
        // the event handler name will be plugin-name/event-handler-name
        // so when we need to reload() or unload()
        // use the system given handler name.
        fileLoader(`${projectDir}/src/event-handler`).map((file) => {
            if (path.basename(file).match(/^[a-zA-Z0-9\-]+.js$/)) {

                console.log(`[Info] EventHandler ${path.basename(file, '.js')} loaded`.yellow);

                let handler = new (require(file))();
                this.handlers.set(path.basename(file, '.js'), handler);
                this.listening.set(path.basename(file, '.js'), true);
                bus.on(handler.event, handler.handle);

            }
        })
    }

    reload(handlerName) {
        if(this.handlers.has(handlerName) && this.listening.get(handlerName)) {

            console.log(`[Info] EventHandler ${path.basename(file, '.js')} loaded`.yellow);

            let handler = this.handlers.get(handlerName);
            bus.on(handler.event, handler.handle);
        }
    }

    unload(handlerName) {
        if(this.handlers.has(handlerName) && !this.listening.get(handlerName)) {

            console.log(`[Info] EventHandler ${path.basename(file, '.js')} unloaded`.yellow);

            let handler = this.handlers.get(handlerName);
            bus.removeListener(handlerName, handler.handle);
        }
    }

}

const eventHandlerLoader = new EventHandlerLoader();

module.exports = eventHandlerLoader;