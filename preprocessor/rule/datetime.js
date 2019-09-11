const RuleHandler = require('./rule');

const moment = require('moment');

class DatetimeHandler extends RuleHandler
{
    constructor() {
        super('datetime');
    }

    handle(data) {
        if(moment.isMoment(data)) {
            return data.format('YYYY-MM-DD HH:mm:ss');
        } else {
            return moment(data, 'YYYY-MM-DD HH:mm:ss', true).isValid() ?
                moment(data).format('YYYY-MM-DD HH:mm:ss') : "";
        }
    }

}

module.exports = DatetimeHandler;