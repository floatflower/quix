exports.up = function (knex) {

    return knex.schema.createTable('user_auth_token', (table) => {

        table
            .string('auth_token', 64)
            .primary()
            .notNullable()
            .collate('utf8mb4_unicode_ci');

        table
            .integer('user_id')
            .unsigned()
            .references('id')
            .inTable('user')
            .notNullable()
            .collate('utf8mb4_unicode_ci')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        table
            .dateTime('create_at')
            .notNullable()
            .collate('utf8mb4_unicode_ci');

        table
            .dateTime('expire_at')
            .notNullable()
            .collate('utf8mb4_unicode_ci');

    });

};

exports.down = function(knex) {
    return knex.schema.dropTable('user_auth_token');
};