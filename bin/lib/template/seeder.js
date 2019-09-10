module.exports = (tableName) => {

    return `const bcrypt = require('bcrypt');\n` +
        `const moment = require('moment');\n` +
        `\n` +
        `exports.seed = function(knex) {\n` +
        `\n` +
        `    return knex('${tableName}').del()\n` +
        `        .then(() => {\n` +
        `\n` +
        `            return knex('user')\n` +
        `                .insert([\n` +
        `                    {\n` +
        `                        id: 1,\n` +
        `                        create_at: moment().format('YYYY-MM-DD HH:mm:ss')\n` +
        `                    }\n` +
        `                ])\n` +
        `\n` +
        `        });\n` +
        `\n` +
        `};\n`

};