const Inputter = require('inputter');
const generateRepository = require('../lib/generate-repository');

const createFile = require('../lib/create-file');
const snakeCaseToCamelCase = require('../lib/snake-case-to-camel-case');
const camelCaseToDash = require('../lib/camel-case-to-dash');

let tableNameValidator = {
    validate: (data) => {
        let tableName = /^[^_]+[a-z0-9_]+[^_]+$/;
        return data.match(tableName);
    },
    message: 'The valid table name format is "table_name".'
};

let inputter = new Inputter();

inputter
    .hint('Input the table name: (table_name)')
    .input([tableNameValidator])
    .end()
    .then((data) => {
        let tableName = data[0];
        let repositoryName = snakeCaseToCamelCase(tableName);
        createFile(
            `src/repository/${camelCaseToDash(repositoryName)}.js`,
            generateRepository(repositoryName, tableName)
        )
    });