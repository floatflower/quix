module.exports = (queueName) => {
    return `// if you want to use another channel, use\n` +
        `// const channel = require('quix/amqp/channel-manager').requestChannel('whatever');\n` +
        `const channel = require('quix/amqp/channel-manager').requestChannel();\n` +
        `\n` +
        `module.exports = () => {\n` +
        `\n` +
        `    let queue = '${queueName}';\n` +
        `\n` +
        `    channel.assertQueue(queue, {\n` +
        `        durable: true\n` +
        `    });\n` +
        `    channel.prefetch(1);\n` +
        `    channel.consume(queue, function(msg) {\n` +
        `\n` +
        `        // ack after job is done!\n` +
        `        channel.ack(msg);\n` +
        `    }, {\n` +
        `        // manual acknowledgment mode,\n` +
        `        // see https://www.rabbitmq.com/confirms.html for details\n` +
        `        noAck: false\n` +
        `    });\n` +
        `\n` +
        `};`
};