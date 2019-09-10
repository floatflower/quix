const Inputter = require('inputter');
const moment = require('moment');

const createFile = require('../lib/create-file');
const snakeCaseToCamelCase = require('../lib/snake-case-to-camel-case');
const camelCaseToDash = require('../lib/camel-case-to-dash');
const generateCreateTableMigration = require('../lib/template/create-table-migration');

let tableNameValidator = {
    validate: (data) => {
        let tableName = /^[^_]+[a-z0-9_]+[^_]+$/;
        return data.match(tableName);
    },
    message: 'The valid table name format is "table_name".'
};

let inputter = new Inputter();

inputter
    .hint('Input the table name you want to create: (table_name)')
    .input([tableNameValidator])
    .end()
    .then((data) => {

        let tableName = data[0];
        createFile(
            `src/migrations/${moment().format('YYYYMMDDHHmmss')}-create-${camelCaseToDash(snakeCaseToCamelCase(tableName))}.js`,
            generateCreateTableMigration(tableName)
        )

    });