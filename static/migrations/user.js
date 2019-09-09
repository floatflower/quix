exports.up = function (knex) {

    return knex.schema.createTable('user', (table) => {

        table
            .increments('id')
            .unsigned()
            .primary()
            .notNullable()
            .collate('utf8mb4_unicode_ci');

        table
            .string('username', 128)
            .unique()
            .notNullable()
            .collate('utf8mb4_unicode_ci');

        table
            .string('email', 256)
            .unique()
            .notNullable()
            .collate('utf8mb4_unicode_ci');

        table
            .string('password', 128)
            .notNullable()
            .collate('utf8mb4_unicode_ci')
            .collate('utf8mb4_unicode_ci');

        table
            .boolean('deleted')
            .notNullable()
            .defaultTo(false)
            .collate('utf8mb4_unicode_ci');

        table
            .dateTime('delete_at')
            .collate('utf8mb4_unicode_ci');

        table
            .dateTime('create_at')
            .notNullable()
            .collate('utf8mb4_unicode_ci');

    })

};

exports.down = function(knex) {
    return knex.schema.dropTable('user');
};