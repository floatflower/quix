module.exports = (name, event, namespace) => {

    return `const SocketIOHandler = require('quix/socket.io/handler');\n` +
        `\n` +
        `class ${name}SocketIOHandler extends SocketIOHandler {\n` +
        `\n` +
        `    constructor()\n` +
        `    {\n` +
        `        super('${event}', '${namespace}');\n` +
        `    }\n` +
        `\n` +
        `    // override this.\n` +
        `    handle(socket, message) {\n` +
        `\n` +
        `    }\n` +
        `\n` +
        `}\n` +
        `\n` +
        `module.exports = ${name}SocketIOHandler;`;

};