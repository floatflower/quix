require('dotenv').config({ path: `${process.cwd()}/.env` });
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const fileLoader = require('../file-loader');

let app = express();
app.use(logger(process.env.NODE_ENV || "dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cookieParser());

// Auto Loading all .js file from ./src/routes
fileLoader(`${process.cwd()}/src/routes`).map((route) => {
    if(path.basename(route).match(/^[a-zA-Z0-9\-]+.js$/)) {
        app.use('/', require(route));
    }
});

const colors = require('colors');

console.log(
    ('  _____ _                 _           __            \n' +
        ' |_   _| |__   __ _ _ __ | | _____   / _| ___  _ __ \n' +
        '   | | | \'_ \\ / _` | \'_ \\| |/ / __| | |_ / _ \\| \'__|\n' +
        '   | | | | | | (_| | | | |   <\\__ \\ |  _| (_) | |   \n' +
        '   |_| |_| |_|\\__,_|_| |_|_|\\_\\___/ |_|  \\___/|_|   \n' +
        '  _   _     _                ___        _           \n' +
        ' | | | |___(_)_ __   __ _   / _ \\ _   _(_)_  __     \n' +
        ' | | | / __| | \'_ \\ / _` | | | | | | | | \\ \\/ /     \n' +
        ' | |_| \\__ \\ | | | | (_| | | |_| | |_| | |>  <      \n' +
        '  \\___/|___/_|_| |_|\\__, |  \\__\\_\\\\__,_|_/_/\\_\\     \n' +
        '                    |___/                           \n').blue
);

console.log('For more information, please visit: http://docs.quix.site\n\n'.blue);

console.log('Loading Configuration...'.green);
const configurationLoader = require('../configuration-loader');
configurationLoader.load();

console.log('Loading Repository...'.green);
const repositoryLoader = require('../repository-loader');
repositoryLoader.load();

console.log('Loading event handler...'.green);
const bus = require('../bus');

const eventHandlerLoader = require('../event-handler-loader');
eventHandlerLoader.load();

console.log('Loading pre-processor...'.green);
const preProcessor = require('../preprocessor');
preProcessor.load();

console.log('Configure database...'.green);
const knexConfig = require(`${process.cwd()}/knexfile.js`);
const knex = require('knex')(knexConfig[process.env.NODE_ENV || 'dev']);

console.log('Configure service manager...'.green);
const serviceManager = require('../service-manager');
serviceManager.set('quix.configuration', configurationLoader);
serviceManager.set('quix.repository', repositoryLoader);
serviceManager.set('quix.bus', bus);
serviceManager.set('quix.event-handler', eventHandlerLoader);
serviceManager.set('quix.pre-processor', preProcessor);
serviceManager.set('quix.knex', knex);

app.locals.serviceManager = serviceManager;

module.exports = app;