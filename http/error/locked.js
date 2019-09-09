const HTTPError = require('./http-error');

class LockedError extends HTTPError
{
    constructor(code, message = '') {
        super(423, code, message);
    }
}

module.exports = LockedError;