const Inputter = require('inputter');

const createFile = require('../lib/create-file');
const snakeCaseToCamelCase = require('../lib/snake-case-to-camel-case');
const camelCaseToDash = require('../lib/camel-case-to-dash');

const generatePublishSubscribeProducer = require('../lib/template/producer-ps');

let lengthValidator = {
    validate: (data) => {
        return data.length >= 0;
    },
    message: 'You should input the exchange name you want to consume message from.'
};

let inputter = new Inputter();

inputter
    .hint("Input the exchange name you want to produce message to: (exchange_name)")
    .input([lengthValidator])
    .end()
    .then((data) => {
        let exchangeName = data[0];
        createFile(
            `src/amqp/producer/${camelCaseToDash(snakeCaseToCamelCase(exchangeName))}.js`,
            generatePublishSubscribeProducer(exchangeName)
        );
    });