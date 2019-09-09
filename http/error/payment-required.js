const HTTPError = require('./http-error');

class PaymentRequiredError extends HTTPError
{
    constructor(code, message = '') {
        super(402, code, message);
    }
}

module.exports = PaymentRequiredError;