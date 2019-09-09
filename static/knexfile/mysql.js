require("dotenv").config();

let db_connection = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

module.exports = {
    dev: {
        client: "mysql2",
        connection: db_connection,
        pool: { min: 0, max: 10 },
        seeds: {
            directory: "./src/seeds/dev"
        },
        migrations: {
            tableName: "migrations",
            directory: './src/migrations'
        }
    },
    prod: {
        client: "mysql2",
        connection: db_connection,
        pool: { min: 0, max: 100 },
        seeds: {
            directory: "./src/seeds/prod"
        },
        migrations: {
            tableName: "migrations",
            directory: './src/migrations'
        }
    },
    test: {
        client: "mysql2",
        connection: db_connection,
        pool: { min: 0, max: 100 },
        seeds: {
            directory: "./src/seeds/dev"
        },
        migrations: {
            tableName: "migrations",
            directory: './src/migrations'
        }
    }
};
