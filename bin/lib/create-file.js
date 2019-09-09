const fs = require('fs');
const colors = require('colors');

module.exports = (file, content = '', forceCover = true) => {
    return new Promise((resolve) => {
        if(!fs.existsSync(`${__dirname}/../../../../${file}`) || forceCover) {
            fs.writeFile(`${__dirname}/../../../../${file}`, content, 'utf8', (error) => {
                if (error) {
                    console.error(error);
                    resolve();
                }
                else console.log(`File ${__dirname}/../../../../${file} has been created`);
                resolve();
            });
        } else {
            resolve();
        }
    })

}