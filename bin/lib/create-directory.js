const mkdirp = require('mkdirp');
const colors = require('colors');
const createFile = require('./create-file');

module.exports = (directory) => {
    return new Promise((resolve) => {
        mkdirp(`${__dirname}/../../../../${directory}`, (error) => {
            if(error) console.error(error);
            else console.log(`Directory ${__dirname}/../../../../${directory} has been created`);
            createFile(`${directory}/.keep`);
            resolve();
        })
    })

};