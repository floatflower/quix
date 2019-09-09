const Inputter = require('inputter');

const createFile = require('../lib/create-file');
const snakeCaseToCamelCase = require('../lib/snake-case-to-camel-case');
const camelCaseToDash = require('../lib/camel-case-to-dash');

const generateWorkerQueueProducer = require('../lib/template/producer-wq');

let lengthValidator = {
    validate: (data) => {
        return data.length >= 0;
    },
    message: 'You should input the queue name you want to produce message to.'
};


const inputter = new Inputter();

inputter
    .hint('Input the queue name you want to produce message to: (queue_name)')
    .input([lengthValidator])
    .end()
    .then((data) => {
        let queueName = data[0];
        createFile(
            `src/amqp/producer/${camelCaseToDash(snakeCaseToCamelCase(queueName))}.js`,
            generateWorkerQueueProducer(queueName)
        );
    });
