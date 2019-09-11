const RuleHandler = require('./rule');

const dh = require('../../data-handler');

class IntegerHandler extends RuleHandler
{
    constructor(defaultValue = 0, base = 10) {
        super('integer');

        this.defaultValue = defaultValue;
        this.base = base;
    }

    handle(data) {
        return dh.integer(data, this.defaultValue, this.base);
    }

}

module.exports = IntegerHandler;