require('dotenv').config();

module.exports = ({
    dev: {
        client: 'sqlite3',
        connection: {
            filename: `./${process.env.DB_FILENAME}`
        }
    },
    test: {
        client: 'sqlite3',
        connection: {
            filename: `./${process.env.DB_FILENAME}`
        }
    },
    prod: {
        client: 'sqlite3',
        connection: {
            filename: `./${process.env.DB_FILENAME}`
        }
    },

});