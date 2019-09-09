const colors = require('colors');
const generateEventHandler = require('./lib/generate-event-handler');

const createFile = require('./lib/create-file');
const camelCaseToDash = require('./lib/camel-case-to-dash');

let eventHandlerName = '';
let event = '';
let namespace = '/';

let currentStep = 'name';

console.log('Input the EventHandler name: (Foo/FooEventHandler) '.green);
process.stdin.on('data', function(input){

    if(currentStep === 'name') {
        eventHandlerNameInputter(input);
    } else if (currentStep === 'event') {
        eventInputter(input);
    }
});

function eventHandlerNameInputter(input) {

    let name = input.toString();
    name = name[name.length - 1] === '\n' ? name.substr(0, name.length - 1) : name;
    let eventHandlerNameRegExp = /^[a-zA-Z]*EventHandler$/;
    if(name.match(eventHandlerNameRegExp)) {
        let chunk = name.split('EventHandler');
        if(chunk[0].length === 0) {
            console.log('Invalid EventHandler name.'.red);
            process.exit();
        }
        eventHandlerName = chunk[0][0].toUpperCase() + chunk[0].substr(1, chunk[0].length - 1);
    } else {
        eventHandlerName= name[0].toUpperCase() + name.substr(1, name.length - 1);
    }

    currentStep = 'event';
    console.log('Input the event you want to listen to.'.green);
}

function eventInputter(input) {
    event = input.toString();
    event = event[event.length - 1] === '\n' ?
        event.substr(0, event.length - 1) : event;
    createFile(
        `src/event/handler/${camelCaseToDash(eventHandlerName)}.js`,
        generateEventHandler(eventHandlerName, event, namespace)
    ).then(() => process.exit());
}