const Inputter = require('inputter');

const createFile = require('../lib/create-file');
const createDirectory = require('../lib/create-directory');
const generateRoute = require('../lib/template/route');
const generateSubAppIndex = require('../lib/template/sub-app-index');
const generateRouteTest = require('../lib/template/route-test');

let httpMethodValidator = {
    validate: (data) => {
        let support = ['get','post','put','head','delete','options',' trace','copy','lock','mkcol','move','purge','propfind','proppatch','unlock','report','mkactivity','checkout','merge','m-search','notify','subscribe','unsubscribe','patch','search','connect'];
        return support.includes(data);
    },
    message: 'The HTTP Method you input is not supported.'
};

let filenameValidator = {
    validate: (data) => {
        let filenameRegExp = /([a-z\-]+[\/]?)+[a-z\-]+.js/;
        return data.match(filenameRegExp);
    },
    message: 'The valid filename format is path/to/file.js'
};

let inputter = new Inputter();

inputter
    .hint('Input the http method: (default to get), supported all/get/post..., reference: https://expressjs.com/zh-tw/guide/routing.html)')
    .input([httpMethodValidator])
    .hint('Input url of the route: (default to: /)')
    .input()
    .hint('Input the route filename: (path/to/route-file.js)')
    .input([filenameValidator])
    .end()
    .then((data) => {
        let method = data[0];

        let url = data[1].length === 0 ? '/' : data[1];
        url = url[0] === '/' ? url[0].substr(1, url.length - 1) : url[0];

        let filename = data[2];
        let filenameToken = filename.split('/');
        let dirname = filenameToken.slice(0, filenameToken.length - 1).join('/');
        let fileRealName = filenameToken[filenameToken.length - 1];

        createDirectory(`src/routes/${dirname}`)
            .then(() => createFile(`src/routes/${dirname}/index.js`, generateSubAppIndex(), false))
            .then(() => createFile(`src/routes/${filename}`, generateRoute(method, url)))
            .then(() => createDirectory(`src/tests/routes/${(dirname).split('/').join('-')}`))
            .then(() => createFile(`src/tests/routes/${(dirname).split('/').join('-')}/${fileRealName}`, generateRouteTest(url), false))
    });