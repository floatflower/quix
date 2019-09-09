const HTTPError = require('./http-error');

class UnprocessableEntityError extends HTTPError
{
    constructor(code, message = '') {
        super(422, code, message);
    }
}

module.exports = UnprocessableEntityError;