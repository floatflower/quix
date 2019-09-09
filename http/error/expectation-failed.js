const HTTPError = require('./http-error');

class ExpectationFailedError extends HTTPError
{
    constructor(code, message = '') {
        super(417, code, message);
    }
}

module.exports = ExpectationFailedError;