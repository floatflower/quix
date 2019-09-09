module.exports = (tableName) => {

    return `exports.up = function (knex) {\n` +
        `\n` +
        `    return knex.schema.createTable('${tableName}', (table) => {\n` +
        `\n` +
        `        table\n` +
        `            .increments('id')\n` +
        `            .unsigned()\n` +
        `            .primary()\n` +
        `            .notNullable()\n` +
        `            .collate('utf8mb4_unicode_ci');\n` +
        `\n` +
        `        table\n` +
        `            .dateTime('create_at')\n` +
        `            .notNullable()\n` +
        `            .collate('utf8mb4_unicode_ci');\n` +
        `\n` +
        `    })\n` +
        `\n` +
        `};\n` +
        `\n` +
        `exports.down = function(knex) {\n` +
        `    return knex.schema.dropTable('${tableName}');\n` +
        `};`

};