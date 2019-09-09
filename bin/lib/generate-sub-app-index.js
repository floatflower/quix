module.exports = () => {
    return 'const express = require(\'express\');\n' +
        'const app = express();\n' +
        '\n' +
        'const routeLoader = require(\'quix/route-loader\');\n' +
        '\n' +
        'routeLoader(__dirname).map((route) => {\n' +
        '    app.use(\'/\', require(route));\n' +
        '});\n' +
        '\n' +
        'module.exports = app;';
}