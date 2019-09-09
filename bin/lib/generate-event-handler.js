module.exports = (name, event) => {
    return `const EventHandler = require(\`quix/event/handler\`);\n` +
        `\n` +
        `class ${name}EventHandler extends EventHandler\n` +
        `{\n` +
        `\n` +
        `    constructor() {\n` +
        `        super('${event}');\n` +
        `    }\n` +
        `\n` +
        `    // override this function\n` +
        `    handle(payload, event) {\n` +
        `\n` +
        `    }\n` +
        `}\n` +
        `\n` +
        `module.exports = ${name}EventHandler;`
}