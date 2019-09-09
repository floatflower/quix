const HTTPError = require('./http-error');

class ProxyAuthenticationRequired extends HTTPError
{
    constructor(code, message = '') {
        super(407, code, message);
    }
}

module.exports = ProxyAuthenticationRequired;