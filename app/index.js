require('dotenv').config({ path: `${process.cwd()}/.env` });

const fs = require('fs');
const path = require('path');

const colors = require('colors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(`${process.cwd()}/var/log`, 'access.log'), { flags: 'a' })

let app = express();
// view engine setup
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'twig');
app.use(logger(process.env.NODE_ENV || 'dev', {stream: accessLogStream}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(process.cwd(), 'public')));

app.use(cookieParser());

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

module.exports = app;
