require('dotenv').config();
const app = require('../src/app');
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
const configurationLoader = require('quix/configuration-loader');
configurationLoader.load();

console.log('Loading Repository...'.green);
const repositoryLoader = require('quix/repository-loader');
repositoryLoader.load();

console.log('Loading event handler...'.green);
const bus = require('quix/bus');

const eventHandlerLoader = require('quix/event-handler-loader');
eventHandlerLoader.load();

console.log('Loading pre-processor...'.green);
const preProcessor = require('quix/preprocessor');
preProcessor.load();

console.log('Configure service manager...'.green);
const serviceManager = require('quix/service-manager');
serviceManager.set('quix.configuration', configurationLoader);
serviceManager.set('quix.repository', repositoryLoader);
serviceManager.set('quix.bus', bus);
serviceManager.set('quix.event-handler', eventHandlerLoader);
serviceManager.set('quix.pre-processor', preProcessor);

let port = parseInt(process.env.APP_PORT) || 3000;
app.listen(port);

console.log(`Quix Application has started at port `.green + (port+"").red + `, enjoy!`.green);