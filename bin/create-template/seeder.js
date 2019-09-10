const moment = require('moment');
const Inputter = require('inputter');

const createFile = require('../lib/create-file');
const generateSeeder = require('../lib/template/seeder');

let tableNameValidator = {
    validate: (data) => {
        let tableName = /^[^_]+[a-z0-9_]+[^_]+$/;
        return data.match(tableName);
    },
    message: 'The valid table name format is "table_name".'
};

let envValidator = {
    validate: (data) => {
        let validEnv = ['dev', 'prod', 'both'];
        return validEnv.includes(data);
    },
    message: 'Only "dev", "prod", "both" supported.'
};

let filenameValidator = {
    validate: (data) => {
        let filenameRegExp = /^[^-]+[a-z0-9\-]+[^-]+\.js$/;
        return data.match(filenameRegExp);
    },
    message: 'The valid filename format is "seeder-file.js".'
}

let inputter = new Inputter();
inputter
    .hint('Input the table name you want to seed.')
    .input([tableNameValidator])
    .hint('Input the environment you want to create: (dev/prod/both)')
    .input([envValidator])
    .hint('Input the seeder name: (create-some-table.js)')
    .input([filenameValidator])
    .end()
    .then((data) => {
        let tableName = data[0];
        let env = data[1];
        let filename = data[2];
        if(env === 'dev' || env === 'both') {
            createFile(`src/seeds/dev/${moment().format('YYYYMMDDHHmmss')}-${filename}`, generateSeeder(tableName))
        }
        if(env === 'prod' || env === 'both') {
            createFile(`src/seeds/prod/${moment().format('YYYYMMDDHHmmss')}-${filename}`, generateSeeder(tableName))
        }
    });