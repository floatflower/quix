const colors = require('colors');
const { exec } = require('child_process');

module.exports = (command) => {
    return new Promise((resolve) => {

        console.log('Installing dependencies, wait a minute...'.green);

        exec(command, (error, stdout, stderr) => {
            if(error) {
                console.error(error);
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);

            resolve();
        })
    })
}