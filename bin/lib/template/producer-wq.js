module.exports = (name) => {
    return `// if you want to use another channel, use\n` +
        `// const channel = require('quix/amqp/channel-manager').requestChannel('whatever');\n` +
        `const channel = require('quix/amqp/channel-manager').requestChannel();\n` +
        `\n` +
        `module.exports = (message) => {\n` +
        `\n` +
        `    let queue = '${name}';\n` +
        `\n` +
        `    channel.assertQueue(queue, {\n` +
        `        durable: true\n` +
        `    });\n` +
        `    channel.sendToQueue(queue, Buffer.from(message), {\n` +
        `        persistent: true\n` +
        `    });\n` +
        `\n` +
        `};`
};