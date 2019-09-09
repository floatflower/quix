module.exports = (exchangeName) => {
    return `// if you want to use another channel, use\n` +
        `// const channel = require('quix/amqp/channel-manager').requestChannel('whatever');\n` +
        `const channel = require('quix/amqp/channel-manager').requestChannel();\n` +
        `\n` +
        `module.exports = (message) => {\n` +
        `\n` +
        `    let exchange = '${exchangeName}';\n` +
        `\n` +
        `    channel.assertExchange(exchange, 'fanout', {\n` +
        `        durable: false\n` +
        `    });\n` +
        `    channel.publish(exchange, '', Buffer.from(message));\n` +
        `\n` +
        `};`
};