const RuleHandler = require('./rule');

class StringHandler extends RuleHandler
{
    constructor(defaultValue = "") {
        super("string");
        this.defaultValue = defaultValue;
    }

    handle(data) {
        return typeof data === 'string' ? data : this.defaultValue;
    }
}

module.exports = StringHandler;