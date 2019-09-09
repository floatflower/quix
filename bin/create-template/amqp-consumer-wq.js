const Inputter = require('inputter');

const createFile = require('../lib/create-file');
const snakeCaseToCamelCase = require('../lib/snake-case-to-camel-case');
const camelCaseToDash = require('../lib/camel-case-to-dash');

const generateWorkerQueueConsumer = require('../lib/template/consumer-wq');

let lengthValidator = {
    validate: (data) => {
        return data.length >= 0;
    },
    message: 'You should input the queue name you want to consume message from.'
};

let inputter = new Inputter();

inputter
    .hint("Input the queue name you want to consume message from: (queue_name)")
    .input([lengthValidator])
    .end()
    .then((data) => {
        let queueName = data[0];

        createFile(
            `src/amqp/consumer/${camelCaseToDash(snakeCaseToCamelCase(queueName))}.js`,
            generateWorkerQueueConsumer(queueName)
        )
    });