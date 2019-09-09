module.exports = (str) => {
    return (str
        .replace(/(^[A-Z])/, ([first]) => first.toLowerCase()))
        .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);
};