module.exports = (handlerName, handlerSymbol) => {
    return `const RuleHandler = require('quix/preprocessor/rule/rule');\n` +
        `\n` +
        `class ${handlerName}Handler extends RuleHandler\n` +
        `{\n` +
        `    constructor() {\n` +
        `        super('${handlerSymbol}');\n` +
        `    }\n` +
        `\n` +
        `    handle(data) {\n` +
        `        // do something to handle data, don't forget return.\n` +
        `    }\n` +
        `\n` +
        `}\n` +
        `\n` +
        `module.exports = ${handlerName}Handler;`
};