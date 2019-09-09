const fs = require('fs');

const moment = require('moment');
const createDirectory = require('./lib/create-directory');
const createFile = require('./lib/create-file');
const generateRepository = require('./lib/generate-repository');

if(fs.existsSync(`${__dirname}/../../../.env`)) {
    require('dotenv').config({path: `${__dirname}/../../../.env`});

    createDirectory('src/routes/auth')
        .then(() => createFile(
            'src/routes/auth/login.js',
            fs.readFileSync(
                `${__dirname}/../static/routes/auth/login.js`,
                'utf8'
            ), false)
        )
        .then(() => createFile(
            'src/routes/auth/logout.js',
            fs.readFileSync(
                `${__dirname}/../static/routes/auth/logout.js`,
                'utf8'
            ), false)
        )
        .then(() => createFile(
            'src/routes/auth/forget-password.js',
            fs.readFileSync(
                `${__dirname}/../static/routes/auth/forget-password.js`,
                'utf8'
            ), false)
        )
        .then(() => createFile(
            'src/routes/auth/reset-password.js',
            fs.readFileSync(
                `${__dirname}/../static/routes/auth/reset-password.js`,
                'utf8'
            ), false))
        .then(() => createFile('src/routes/auth/register.js',
            fs.readFileSync(
                `${__dirname}/../static/routes/auth/register.js`,
                'utf8'
            ), false)
        )
        .then(() => createFile('src/routes/auth/index.js',
            fs.readFileSync(
                `${__dirname}/../static/routes/auth/index.js`,
                'utf8'
            ), false)
        )
        .then(() => createFile(
            `src/migrations/${moment().format('YYYYMMDDHHmmss')}-create-user-table.js`,
            fs.readFileSync(`${__dirname}/../static/migrations/user.js`))
        )
        .then(() => createFile(
            `src/migrations/${moment().format('YYYYMMDDHHmmss')}-create-user-auth-token-table.js`,
            fs.readFileSync(`${__dirname}/../static/migrations/user-auth-token.js`))
        )
        .then(() => createFile(
            `src/seeds/dev/${moment().format('YYYYMMDDHHmmss')}-seed-users.js`,
            fs.readFileSync(`${__dirname}/../static/seeds/user.js`))
        )
        .then(() => createFile(
            `src/seeds/prod/${moment().add(1, 's').format('YYYYMMDDHHmmss')}-seed-users.js`,
            fs.readFileSync(`${__dirname}/../static/seeds/user.js`))
        )
        .then(() => createFile(
            `src/repository/user.js`,
            generateRepository('User', 'user', 'User')
        ))
        .then(() => createFile(
            `src/repository/user-auth-token.js`,
            generateRepository('UserAuthToken', 'user_auth_token')
        ))
        .then(() => console.log('Add this line to src/app.js: app.use(\'/\', require(\'./routes/auth\'))'.green))
        .then(() => process.exit());
}