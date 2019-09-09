const Inputter = require('inputter');

const dh = require('../../data-handler');
const generateSocketIOAuthenticator = require('../lib/template/socket-io-authenticator');

const createFile = require('../lib/create-file');
const camelCaseToDash = require('../lib/camel-case-to-dash');

let authenticatorNameLengthValidator = {
    validate: (data) => {
        return data.length >= 0;
    },
    message: 'You should input Authenticator name: (Foo/FooAuthenticator)'
};


let inputter = new Inputter();

inputter
    .hint('Input the SocketIOAuthenticator name: (Foo/FooSocketIOAuthenticator)')
    .input([authenticatorNameLengthValidator])
    .hint('Input the namespace of the authenticator: (default to /)')
    .input()
    .hint('Input the timeout of this authenticator: (default to 1000)')
    .input()
    .end()
    .then((data) => {

        let authenticatorName = data[0];
        let chunk = authenticatorName.split('SocketIOAuthenticator');
        authenticatorName = chunk[0][0].toUpperCase() + chunk[0].substr(1, chunk[0].length - 1);

        let namespace = data[1];
        if(namespace.length === 0) {
            namespace = '/';
        }
        if(namespace[0] !== '/') {
            namespace = '/' + namespace;
        }

        let timeout = dh.integer(data[2], 1000);
        if(timeout <= 0) {
            timeout = 0;
        }

        createFile(
            `src/socket.io/authenticator/${camelCaseToDash(authenticatorName)}.js`,
            generateSocketIOAuthenticator(authenticatorName, namespace, timeout)
        );

    });

