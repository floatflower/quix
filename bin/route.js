const createFile = require('./lib/create-file');
const createDirectory = require('./lib/create-directory');
const generateRoute = require('./lib/generate-route');
const generateSubAppIndex = require('./lib/generate-sub-app-index');
const generateRouteTest = require('./lib/generate-route-test');

let method = 'get';
let url = '/';
let filename = '';

let currentStep = 'method';

console.log('Input the http method: (default to get',' supported all/get/post...',' reference: https://expressjs.com/zh-tw/guide/routing.html)'.green);
process.stdin.on('data', function(input){

    if(currentStep === 'method') {
        methodInputter(input);
    } else if(currentStep === 'url') {
        urlInputter(input);
    } else if(currentStep === 'filename') {
        filenameInputter(input);
    }

});

function methodInputter(input) {
    let _method = input.toString();

    _method = _method[_method.length - 1] === '\n' ?
        _method.substr(0, _method.length - 1) : _method;

    let support = ['get','post','put','head','delete','options',' trace','copy','lock','mkcol','move','purge','propfind','proppatch','unlock','report','mkactivity','checkout','merge','m-search','notify','subscribe','unsubscribe','patch','search','connect'];
    if(support.includes(_method)) {
        method = _method;
    }

    currentStep = 'url';
    console.log('Input url of the route: (default to: /)'.green);
}

function urlInputter(input) {
    let _url = input.toString();

    _url = _url[_url.length - 1] === '\n' ?
        _url.substr(0, _url.length - 1) : _url;

    url = _url;

    currentStep = 'filename';
    console.log('Input the route filename: (path/to/route-file.js)'.green);
}

function filenameInputter(input) {
    let _filename = input.toString();

    _filename = _filename[_filename.length - 1] === '\n' ?
        _filename.substr(0, _filename.length - 1) : _filename;

    _filename = _filename[0] === '/' ?
        _filename.substr(1, _filename.length - 1) : _filename;

    let filenameRegExp = /([a-z\-]+[\/]?)+[a-z\-]+.js/;

    if(_filename.length === 0 || !_filename.match(filenameRegExp)) {
        console.log('You should input a valid route filename: '.red);
        console.log('Input the route filename: (path/to/route-file.js)'.green);
    } else {
        filename = _filename;
        let filenameToken = filename.split('/');
        let dirname = filenameToken.slice(0, filenameToken.length - 1).join('/');
        let fileRealName = filenameToken[filenameToken.length - 1];

        createDirectory(`src/routes/${dirname}`)
            .then(() => createFile(`src/routes/${dirname}/index.js`, generateSubAppIndex(), false))
            .then(() => createFile(`src/routes/${filename}`, generateRoute(method, url)))
            .then(() => createDirectory(`src/tests/routes/${(dirname).split('/').join('-')}`))
            .then(() => createFile(`src/tests/routes/${(dirname).split('/').join('-')}/${fileRealName}`, generateRouteTest(url), false))
            .then(() => process.exit());
    }
}