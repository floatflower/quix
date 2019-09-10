const fs = require('fs');

const dataHandler = require('../data-handler');
const createFile = require('./lib/create-file');
const generateDockerfile = require('./lib/generate-dockerfile');

if(fs.existsSync(`${__dirname}/../../../.env`)) {
    require('dotenv').config({path: `${__dirname}/../../../.env`});
    createFile('Dockerfile', generateDockerfile(dataHandler.integer(process.env.APP_PORT, 3000)), true)
}