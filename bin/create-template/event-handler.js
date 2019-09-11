const Inputter = require('inputter');
const generateEventHandler = require('../lib/template/event-handler');

const createFile = require('../lib/create-file');
const camelCaseToDash = require('../lib/camel-case-to-dash');

let handlerNameLengthValidator = {
    validate: (data) => {
        return data.length >= 0;
    },
    message: 'You should input event handler name.'
};

let eventNameLengthValidator = {
    validate: (data) => {
        return data.length >= 0;
    },
    message: 'You should input event name you want to listen to.'
};

let inputter = new Inputter();

inputter
    .hint('Input the EventHandler name: (Foo/FooEventHandler)')
    .input([handlerNameLengthValidator])
    .hint('Input the event you want to listen to.')
    .input([eventNameLengthValidator])
    .end()
    .then((data) => {

        let handlerName = data[0];
        let chunk = handlerName.split('EventHandler');
        handlerName = chunk[0][0].toUpperCase() + chunk[0].substr(1, chunk[0].length - 1);

        let eventName = data[1];

        createFile(
            `src/event-handler/${camelCaseToDash(handlerName)}.js`,
            generateEventHandler(handlerName, eventName)
        )

    });