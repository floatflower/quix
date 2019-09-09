module.exports = (name) => {
    return (
        `const ResponseHandler = require('quix/response-handler');\n` +
        `\n` +
        `class ${name}ResponseHandler extends ResponseHandler.Base\n` +
        `{\n` +
        `    constructor() {\n` +
        `        super();\n` +
        `        // this.registerHandler(this.customizeHandler);\n` +
        `    }\n` +
        `\n` +
        `    // change handler name to what you want and register it.\n` +
        `    // customizeHandler(entity) {\n` +
        `        // return {}\n` +
        `    // }\n` +
        `\n` +
        `    // override defaultHandler\n` +
        `    // defaultHandler(entity) {}\n` +
        `}\n` +
        `\n` +
        `module.exports = ${name}ResponseHandler;`);
};