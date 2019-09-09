const colors = require('colors');
const generateRepository = require('./lib/generate-repository');

const createFile = require('./lib/create-file');
const snakeCaseToCamelCase = require('./lib/snake-case-to-camel-case');
const camelCaseToDash = require('./lib/camel-case-to-dash');

console.log('Input the table name: (table_name)'.green);
process.stdin.on('data', function(input){
    let name = input.toString().toLowerCase();
    name = name[name.length - 1] === '\n' ? name.substr(0, name.length - 1) : name;
    let repositoryName = snakeCaseToCamelCase(name);

    createFile(
        `src/repository/${camelCaseToDash(repositoryName)}.js`,
        generateRepository(repositoryName, name)
    ).then(() => process.exit());
});