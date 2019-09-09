const ruleHandlerManager = require('../rule-handler/manager');

/**

 rule = [
    { handler: 'float', params: [1.0] },
    'integer'
 ]

 */
module.exports =(rules, data) => {

    rules = rules || [];

    let result = data;

    rules.forEach((rule) => {
        if(typeof rule === 'string') {
            let handler = new (ruleHandlerManager.getHandler(rule));
            result = handler.handle(result);
        }
        else if(typeof rule === 'object') {
            let handler = new (ruleHandlerManager.getHandler(rule.handler))(...rule.params);
            result = handler.handle(result);
        }
    });

    return result;

};