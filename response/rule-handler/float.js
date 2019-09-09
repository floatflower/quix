const RuleHandler = require('./rule');

const dh = require('../../data-handler');

class FloatHandler extends RuleHandler
{
    constructor(defaultValue) {
        super('float');
        this.defaultValue = defaultValue;
    }

    handle(data) {
        return dh.float(data, this.defaultValue);
    }
}

module.exports = FloatHandler;