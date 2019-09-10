const fs = require('fs');

const colors = require('colors');

const dataHandler = require('../data-handler');

const createDirectory = require('./lib/create-directory');
const createFile = require('./lib/create-file');
const generateDockerfile = require('./lib/generate-dockerfile');
const generatePackageJson = require('./lib/generate-package-json');

if(fs.existsSync(`${__dirname}/../../../.env`)) {
    require('dotenv').config({path: `${__dirname}/../../../.env`});

    createDirectory('bin')
        .then(() => createDirectory('src/config'))
        .then(() => createDirectory('src/amqp'))
        .then(() => createDirectory('src/amqp/consumer'))
        .then(() => createDirectory('src/amqp/producer'))
        .then(() => createDirectory('src/repository'))
        .then(() => createDirectory('src/enum'))
        .then(() => createDirectory('src/error'))
        .then(() => createDirectory('src/event/handler'))
        .then(() => createDirectory('src/migrations'))
        .then(() => createDirectory('src/response-handler'))
        .then(() => createDirectory('src/routes'))
        .then(() => createDirectory('src/view'))
        .then(() => createDirectory('src/seeds/dev'))
        .then(() => createDirectory('src/seeds/prod'))
        .then(() => createDirectory('src/socket.io'))
        .then(() => createDirectory('src/socket.io/authenticator'))
        .then(() => createDirectory('src/socket.io/handler'))
        .then(() => createDirectory('src/tests/routes'))
        .then(() => createDirectory('src/tests/helper'))
        .then(() => createDirectory('storage'))
        .then(() => createFile('Dockerfile', generateDockerfile(dataHandler.integer(process.env.APP_PORT, 3000)), false))
        .then(() => createFile('src/app.js', fs.readFileSync(`${__dirname}/../static/app.js`, 'utf8'), false))
        .then(() => {
            let packageJson = JSON.parse(fs.readFileSync(`${__dirname}/../../../package.json`, 'utf8'));
            return createFile('package.json', JSON.stringify(generatePackageJson(packageJson), null, 4), false);
        })
        .then(() => createFile('bin/www.js', fs.readFileSync(`${__dirname}/../static/bin/www.js`, 'utf8'), false))
        .then(() => createFile('bin/db-drop.js', fs.readFileSync(`${__dirname}/../static/bin/db-drop.js`, 'utf8'), false))
        .then(() => createFile('bin/db-create.js', fs.readFileSync(`${__dirname}/../static/bin/db-create.js`, 'utf8'), false))
        .then(() => createFile('.gitignore', fs.readFileSync(`${__dirname}/../static/gitignore`, 'utf8'), false))

}
else {
    console.log("File '.env' not existed, Quix has created a .env file for you.".red);
    createFile('.env', fs.readFileSync(`${__dirname}/../static/.env`, 'utf8'), false)
        .then(() => {
            let packageJson = JSON.parse(fs.readFileSync(`${__dirname}/../../../package.json`, 'utf8'));
            return createFile('package.json', JSON.stringify(generatePackageJson(packageJson), null, 4), false);
        });
}