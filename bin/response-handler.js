const colors = require('colors');
const generateResponseHandler = require('./lib/generate-response-handler');

const createFile = require('./lib/create-file');
const camelCaseToDash = require('./lib/camel-case-to-dash');

console.log('Input the ResponseHandler name: (Foo/FooResponseHandler) '.green);
process.stdin.on('data', function(input){
    let name = input.toString();
    name = name[name.length - 1] === '\n' ? name.substr(0, name.length - 1) : name;
    let responseHandlerNameRegExp = /^[a-zA-Z]*ResponseHandler$/;
    let responseHandlerName = '';
    if(name.match(responseHandlerNameRegExp)) {
        let chunk = name.split('ResponseHandler');
        if(chunk[0].length === 0) {
            console.log('Invalid ResponseHandler name.'.red);
            process.exit();
        }
        responseHandlerName = chunk[0][0].toUpperCase() + chunk[0].substr(1, chunk[0].length - 1);
    } else {
        responseHandlerName = name[0].toUpperCase() + name.substr(1, name.length - 1);
    }

    createFile(
        `src/response-handler/${camelCaseToDash(responseHandlerName)}.js`,
        generateResponseHandler(responseHandlerName)
    ).then(() => process.exit());
});