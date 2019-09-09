const fs = require('fs');

const createFile = require('./lib/create-file');

if(fs.existsSync(__dirname + '/../../../.env')) {
    require('dotenv').config({path: `${__dirname}/../../../.env`});

    if(process.env.DB_TYPE === 'mysql') {

        createFile('knexfile.js', fs.readFileSync(`${__dirname}/../static/knexfile/mysql.js`, 'utf8'))

    } else if(process.env.DB_TYPE === 'pg') {

        createFile('knexfile.js', fs.readFileSync(`${__dirname}/../static/knexfile/pg.js`, 'utf8'))

    } else if(process.env.DB_TYPE === 'sqlite') {

        createFile('knexfile.js', fs.readFileSync(`${__dirname}/../static/knexfile/sqlite.js`, 'utf8'))

    } else {

        console.log('DB_TYPE is not supported.'.red);

    }
}