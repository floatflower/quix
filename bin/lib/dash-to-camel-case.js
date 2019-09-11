module.exports = (data) => {
    let converted = data.replace(/(-[a-z])/g, function (g) { return g[1].toUpperCase(); });
    converted = converted[0].toUpperCase();

    return converted;
};