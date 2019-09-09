module.exports = (repositoryName, tableName, parent = 'Base') => {
    return `const knexConfig = require('../../knexfile');\n` +
    `const knex = require('knex')(knexConfig[process.env.NODE_ENV]);\n` +
    `const Repository = require('quix/repository');\n` +
    `\n` +
    `class ${repositoryName}Repository extends Repository.${parent}\n` +
    `{\n`+
    `    constructor() {\n` +
    `        super(knex, '${tableName}');\n` +
    `    }\n` +
    `\n` +
    `    // add something here\n` +
    `\n` +
    `    // or overwrite the functions from parent.\n` +
    `    // findBy(criteria = {}, orderBy = {}, config = {}) {};\n` +
    `    // findOneBy(criteria = {}, orderBy = {}, config = {}) {};\n` +
    `    // count(criteria = {}, config = {}) {};\n` +
    `    // remove(criteria = {}, config = {}) {}\n` +
    `}\n` +
    `\n` +
    `module.exports = ${repositoryName}Repository;\n`;
};

