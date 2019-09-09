const fs = require('fs');

const createFile = require('./lib/create-file');
const generatePackageJson = require('./lib/generate-package-json');

if(fs.existsSync(__dirname + '/../../../.env')) {
    let packageJson = JSON.parse(fs.readFileSync(__dirname + '/../../../package.json', 'utf8'));
    return createFile('package.json', JSON.stringify(generatePackageJson(packageJson), null, 4));
}