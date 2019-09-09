const Inputter = require('inputter');

const generateSocketIOHandler = require('../lib/template/socket-io-handler');

const createFile = require('../lib/create-file');
const camelCaseToDash = require('../lib/camel-case-to-dash');

let handlerNameLengthValidator = {
    validate: (data) => {
        return data.length >= 0;
    },
    message: 'You should input SocketIOHandler name: (Foo/FooSocketIOHandler)'
};

let eventNameLengthValidator = {
    validate: (data) => {
        return data.length >= 0;
    },
    message: 'You should input event you want to listen to.'
};


let inputter = new Inputter();

inputter
    .hint("Input the SocketIOHandler name: (Foo/FooSocketIOHandler)")
    .input([handlerNameLengthValidator])
    .hint('Input the event you want to listen to:')
    .input([eventNameLengthValidator])
    .hint('Input the namespace of the socketIOHandler: (default to /)')
    .input()
    .end()
    .then((data) => {

        let handlerName = data[0];

        let chunk = handlerName.split('SocketIOHandler');
        handlerName = chunk[0][0].toUpperCase() + chunk[0].substr(1, chunk[0].length - 1);

        let eventName = data[1];

        let namespace = data[2];
        if(namespace.length === 0) {
            namespace = '/';
        }
        if(namespace[0] !== '/') {
            namespace = '/' + namespace;
        }

        createFile(
            `src/socket.io/handler/${camelCaseToDash(chunk[0])}.js`,
            generateSocketIOHandler(handlerName, eventName, namespace)
        );
    });