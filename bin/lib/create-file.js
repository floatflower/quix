const fs = require('fs');
const path = require('path');

const projectDir = process.env.INIT_CWD || path.resolve("../../../../", __dirname);

module.exports = (file, content = '', forceCover = true) => {
    return new Promise((resolve) => {
        if(!fs.existsSync(`${projectDir}/${file}`) || forceCover) {
            fs.writeFile(`${projectDir}/${file}`, content, 'utf8', (error) => {
                if (error) {
                    console.error(error);
                    resolve();
                }
                else console.log(`File ${projectDir}/${file} has been created`);
                resolve();
            });
        } else {
            resolve();
        }
    })

}