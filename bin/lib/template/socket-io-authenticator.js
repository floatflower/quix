module.exports = (name, namespace, timeout) => {

    return `const SocketIOAuthenticator = require(\`quix/socket.io/authenticator\`);\n` +
        `\n` +
        `class ${name}SocketIOAuthenticator extends SocketIOAuthenticator\n` +
        `{\n` +
        `    constructor() {\n` +
        `        super('${namespace}', ${timeout});\n` +
        `    }\n` +
        `\n` +
        `    // override authentication function\n` +
        `    authenticate(socket, data, callback) {}\n` +
        `\n` +
        `    // override thie postAuthenticator function,\n` +
        `    // which will be executed after authenticate() was called.\n` +
        `    postAuthenticator(socket, data) {}\n` +
        `}\n` +
        `\n` +
        `module.exports = ${name}SocketIOAuthenticator;`

};