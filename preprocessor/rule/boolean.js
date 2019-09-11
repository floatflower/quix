const RuleHandler = require('./rule');

const dh = require('../../data-handler');

class BooleanHandler extends RuleHandler
{
    constructor() {
        super('boolean');
    }

    handle(data) {
        return dh.boolean(data);
    }

}

module.exports = BooleanHandler;