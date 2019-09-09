const HTTPError = require('./http-error');

class NotAccptableError extends HTTPError
{
    constructor(code, message = '') {
        super(406, code, message);
    }
}

module.exports = NotAccptableError;