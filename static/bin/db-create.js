require('dotenv').config();
var kenxFile = require('../knexfile');
var conn = {
    host     : kenxFile[process.env.NODE_ENV].connection.host,
    user     : kenxFile[process.env.NODE_ENV].connection.user,
    password : kenxFile[process.env.NODE_ENV].connection.password,
};

// connect without database selected
var knex = require('knex')({ client: 'mysql2', connection: conn});

knex.raw(`CREATE DATABASE ${kenxFile[process.env.NODE_ENV].connection.database};`)
    .then(function(){
        knex.destroy();

    }).finally(() => {
    console.log(`Database: ${kenxFile[process.env.NODE_ENV].connection.database} created successfully.`)
}).catch((error) => {
    console.log(error.toString());
    process.exit(-1);
});