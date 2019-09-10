const fs = require('fs');

function findFile(path, files) {

    let filesList = fs.readdirSync(path);
    filesList.forEach(file => {
        if(fs.statSync(`${path}/${file}`).isFile()) {
            files.push(`${path}/${file}`);
        } else if(fs.statSync(`${path}/${file}`).isDirectory()) {
            findFile(`${path}/${file}`, files);
        }
    })

}
module.exports = (path) => {
    let files = [];
    findFile(path, files);
    return files;
};