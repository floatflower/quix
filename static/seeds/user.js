const bcrypt = require('bcrypt');
const moment = require('moment');

exports.seed = function(knex) {

    return knex('user').del()
        .then(() => {

            return knex('user')
                .insert([
                    {
                        id: 1,
                        username: 'user1',
                        password: bcrypt.hashSync('12345', 12),
                        deleted: false,
                        create_at: moment().format('YYYY-MM-DD HH:mm:ss')
                    }, {
                        id: 2,
                        username: 'user2',
                        password: bcrypt.hashSync('12345', 12),
                        deleted: false,
                        create_at: moment().format('YYYY-MM-DD HH:mm:ss')
                    }
                ])

        });

};
