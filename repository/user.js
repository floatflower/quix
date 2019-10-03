const Base = require('./base');
const validation = require('../validation');

class User extends Base
{
    constructor(knex, table) {
        super(knex, table);
    }

    findByLoginKey(value, key = ['username'], criteria = {}, orderBy = {}, limit, offset) {

        return new Promise((resolve, reject) => {

            if(key.length === 0) {
                return this.findBy(criteria, orderBy, limit, offset)
                    .then(resolve, reject);
            } else {

                let q = this.knex(this.table);

                q.where((builder) => {
                    key.map((k) => {
                        builder.orWhere(k, '=', value);
                    })
                });

                if(!validation.isEmptyObject(criteria)) {

                    Object.keys(criteria).forEach((key) => {
                        q.andWhere(key, '=', criteria[key]);
                    });

                }

                if(!validation.isEmptyObject(orderBy)) {
                    Object.keys(orderBy).forEach((key) => {

                        q.orderBy(key, orderBy[key]);

                    })
                }

                if(typeof limit !== 'undefined') q.limit(limit);
                if(typeof offset !== 'undefined') q.offset(offset);

                return q.then(resolve, reject);
            }

        })

    }
}

module.exports = User;
