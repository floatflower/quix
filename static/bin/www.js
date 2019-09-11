require('dotenv').config();
const app = require('../src/app');

const configurationLoader = require('quix/configuration-loader');
configurationLoader.load();

const repositoryLoader = require('quix/repository-loader');
repositoryLoader.load();

const bus = require('quix/bus');

const eventHandlerLoader = require('quix/event-handler-loader');
eventHandlerLoader.load();

const serviceManager = require('quix/service-manager');
serviceManager.set('quix.configuration', configurationLoader);
serviceManager.set('quix.repository', repositoryLoader);
serviceManager.set('quix.bus', bus);
serviceManager.set('quix.event-handler', eventHandlerLoader);

app.listen(parseInt(process.env.APP_PORT) || 3000);