const type = require('./type');

module.exports = (alias) => {
    let _alias = alias.toUpperCase();

    return type[_alias];
};