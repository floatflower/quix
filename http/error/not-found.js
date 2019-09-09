const HTTPError = require('./http-error');

class NotFoundError extends HTTPError
{
    constructor(code, message = '') {
        super(404, code, message);
    }
}

module.exports = NotFoundError;