const fs = require('fs');

const createFile = require('./lib/create-file');

if(fs.existsSync(__dirname + '/../../../.env')) {
    require('dotenv').config({path: `${__dirname}/../../../.env`});

    switch (process.env.DB_TYPE) {
        case 'mysql':
            createFile('knexfile.js', fs.readFileSync(`${__dirname}/../static/knexfile/mysql.js`, 'utf8'))
            break;
        case 'pg':
            createFile('knexfile.js', fs.readFileSync(`${__dirname}/../static/knexfile/pg.js`, 'utf8'))
            break;
        case 'sqlite':
            createFile('knexfile.js', fs.readFileSync(`${__dirname}/../static/knexfile/sqlite.js`, 'utf8'))
            break;
        default:
            console.log('DB_TYPE is not supported.'.red);

    }
}