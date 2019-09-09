const HTTPError = require('./http-error');

class RequestedRangeNotSatisfiable extends HTTPError
{
    constructor(code, message = '') {
        super(416, code, message);
    }
}

module.exports = RequestedRangeNotSatisfiable;