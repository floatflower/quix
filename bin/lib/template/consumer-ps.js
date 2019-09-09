module.exports = (exchange) => {
    return `// if you want to use another channel, use\n` +
        `// const channel = require('quix/amqp/channel-manager').requestChannel('whatever');\n` +
        `const channel = require('quix/amqp/channel-manager').requestChannel();\n` +
        `\n` +
        `module.exports = () => {\n` +
        `\n` +
        `    let exchange = '${exchange}';\n` +
        `\n` +
        `    channel.assertExchange(exchange, 'fanout', {\n` +
        `        durable: false\n` +
        `    });\n` +
        `\n` +
        `    channel.assertQueue('', { exclusive: true }, (assertionError, q) => {\n` +
        `\n` +
        `        if (assertionError) {\n` +
        `            throw assertionError;\n` +
        `        }\n` +
        `        channel.bindQueue(q.queue, exchange, '');\n` +
        `\n` +
        `        channel.consume(q.queue, (message) => {\n` +
        `            if(message.content) {\n` +
        `                // do something here with this message.\n` +
        `            }\n` +
        `        }, {\n` +
        `            noAck: true\n` +
        `        });\n` +
        `\n` +
        `    });\n` +
        `\n` +
        `};`
}