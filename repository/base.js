const validation = require('../validation');

class Base {

    constructor(knex, table) {
        this.knex = knex;
        this.table = table;
    }

    findBy(criteria = {}, orderBy = {}, limit, offset) {

        return new Promise((resolve, reject) => {

            let q = this.knex(this.table)
                .select();

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

            if(limit !== 'undefined') q.limit(limit);
            if(offset !== 'undefined') q.offset(offset);

            // TODO: Handle Error
            return q.then(resolve, reject);

        })

    };

    findOneBy(criteria = {}, orderBy = {}) {

        return new Promise((resolve, reject) => {

            let q = this.knex(this.table)
                .select();

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

            // TODO: Handle Error
            return q.then((results) => {

                if(results.length === 0) resolve(null);
                else resolve(results[0]);

            }, reject)

        })

    }


    count(criteria = {}, countKey = 'id') {

        return new Promise((resolve, reject) => {

            let q = this.knex(this.table)
                .count(`${countKey} as c`);

            if(!validation.isEmptyObject(criteria)) {
                Object.keys(criteria).forEach((key) => {

                    q.andWhere(key, '=', criteria[key]);

                });
            }

            // TODO: Handle Error
            return q.then((results) => {

                resolve(results[0].c);

            }, reject)

        })
    };

    remove(criteria = {}) {

        return new Promise((resolve, reject) => {

            let q = this.knex(this.table);

            if(!validation.isEmptyObject(criteria)) {
                Object.keys(criteria).forEach((key) => {

                    q.andWhere(key, '=', criteria[key]);

                });
            }

            // TODO: Handle Error
            return q.del().then(resolve, reject);

        })

    }

}

module.exports = Base;
