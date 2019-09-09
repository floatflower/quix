const HTTPError = require('./http-error');

class MisdirectedRequest extends HTTPError
{
    constructor(code, message = '') {
        super(421, code, message);
    }
}

module.exports = MisdirectedRequest;