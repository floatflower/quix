const HTTPError = require('./http-error');

class PayloadTooLargeError extends HTTPError
{
    constructor(code, message = '') {
        super(413, code, message);
    }
}

module.exports = PayloadTooLargeError;