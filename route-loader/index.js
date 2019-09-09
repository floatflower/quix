const fs = require('fs');

module.exports = (path) => {
    let routes = [];
    let filesList = fs.readdirSync(path);
    filesList.forEach((file) => {
        if(fs.statSync(`${path}/${file}`).isFile()
            && file.match(/^[a-zA-Z\-]*.js$/)  && file !== 'index.js') {
            routes.push(`./${file}`);
        }
    });
    return routes;
};