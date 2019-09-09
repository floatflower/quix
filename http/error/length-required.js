const HTTPError = require('./http-error');

class LengthRequiredError extends HTTPError
{
    constructor(code, message = '') {
        super(411, code, message);
    }
}

module.exports = LengthRequiredError;