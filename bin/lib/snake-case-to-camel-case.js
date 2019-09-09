module.exports = (str) => {
    return (str
        .replace(/(^[a-z])/, ([first]) => first.toUpperCase()))
        .replace(/(_[a-z])/g, (letter) => `${letter[1].toUpperCase()}`);
};