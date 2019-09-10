const mkdirp = require('mkdirp');
const path = require('path');

const createFile = require('./create-file');

const projectDir = process.env.INIT_CWD || path.resolve("../../../../", __dirname);

module.exports = (directory) => {
    return new Promise((resolve) => {
        mkdirp(`${projectDir}/${directory}`, (error) => {
            if(error) console.error(error);
            else console.log(`Directory ${projectDir}/${directory} has been created`);
            createFile(`${directory}/.keep`);
            resolve();
        })
    })

};