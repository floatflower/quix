const path = require('path');

const fileLoader = require('../file-loader');

class Preprocessor
{
    constructor() {

        this.handlers = new Map();

    }

    load() {

        let projectDir = process.cwd();

        console.log(`[Info] Default rule 'float' loaded`.yellow);
        this.handlers.set('float', require('./rule/float'));
        console.log(`[Info] Default rule 'integer' loaded`.yellow);
        this.handlers.set('integer', require('./rule/integer'));
        console.log(`[Info] Default rule 'string' loaded`.yellow);
        this.handlers.set('string', require('./rule/string'));
        console.log(`[Info] Default rule 'boolean' loaded`.yellow);
        this.handlers.set('boolean', require('./rule/boolean'));
        console.log(`[Info] Default rule 'datetime' loaded`.yellow);
        this.handlers.set('datetime', require('./rule/datetime'));

        fileLoader(`${projectDir}/src/preprocessor-rule`).map((file) => {
            if (path.basename(file).match(/^[a-zA-Z0-9\-]+.js$/)) {
                let handlerConstructor = require(file);
                let handler = new handlerConstructor();
                if(['float', 'integer', 'string', 'boolean', 'datetime'].includes(handler.ruleName)) {
                    console.log(`[Info] Overwrite default rule '${handler.ruleName}'`.yellow);
                } else {
                    console.log(`[Info] Rule '${handler.ruleName}' loaded`.yellow);
                }
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
                    if(Array.isArray(data)) {
                        let handledData = [];
                        data.forEach(d => {
                            handledData.push(handler.handle(d))
                        })
                        result = handledData;
                    } else {
                        result = handler.handle(result);
                    }
                }
            }
            else if(typeof rule === 'object') {
                let handler = new (this.handlers.get(rule.handler))(...rule.params);
                if(Array.isArray(data)) {
                    let handledData = [];
                    data.forEach(d => {
                        handledData.push(handler.handle(d));
                    })
                    result = handledData;
                } else {
                    result = handler.handle(result);
                }
            }
        });

        return result;
    }
}

const preProcessor = new Preprocessor();

module.exports = preProcessor;
