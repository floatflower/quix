const path = require('path');

const fileLoader = require('../file-loader');

class Preprocessor
{
    constructor() {

        this.handlers = new Map();

    }

    load() {

        let projectDir = process.cwd();

        this.handlers.set('float', require('./rule/float'));
        this.handlers.set('integer', require('./rule/integer'));
        this.handlers.set('string', require('./rule/string'));
        this.handlers.set('boolean', require('./rule/boolean'));
        this.handlers.set('datetime', require('./rule/datetime'));

        fileLoader(`${projectDir}/src/preprocessor-rule`).map((file) => {
            if (path.basename(file).match(/^[a-zA-Z0-9\-]+.js$/)) {
                let handlerConstructor = require(file);
                let handler = new handlerConstructor();
                this.handlers.set(handler.ruleName, handlerConstructor);
            }
        })
    }

    handle(rules, data) {
        rules = rules || [];

        let result = data;

        rules.forEach((rule) => {
            if(typeof rule === 'string') {
                if(this.handlers.has(rule)) {
                    let handler = new (this.handlers.get(rule));
                    result = handler.handle(result);
                }
            }
            else if(typeof rule === 'object') {
                let handler = new (this.handlers.get(rule.handler))(...rule.params);
                result = handler.handle(result);
            }
        });

        return result;
    }
}

const preProcessor = new Preprocessor();

module.exports = preProcessor;