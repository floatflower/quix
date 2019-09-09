const fs = require('fs');

function getSubApp(dir, directoryList) {
    directoryList = directoryList || [];
    if(fs.existsSync(`${dir}/index.js`)) {
        directoryList.push(dir);
    }
    return find(dir, directoryList);
}

function find(dir, directoryList) {
    let files = fs.readdirSync(dir);
    files.forEach((file) => {
        if(fs.statSync(`${dir}/${file}`).isDirectory()) {
            directoryList = find(`${dir}/${file}`, directoryList);
            directoryList.push(`${dir}/${file}`);
        }
    });
    return directoryList;
}

module.exports = getSubApp;