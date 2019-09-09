class RuleHandler {

    constructor(ruleName) {
        this.ruleName = ruleName;
    }

    /**
     * @abstract
     * @param data
     * @return {*}
     */
    handle(data) {}
}

module.exports = RuleHandler;