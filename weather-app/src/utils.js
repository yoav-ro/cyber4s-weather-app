function kelvinToC(degInK) {
    return (degInK - 273.15);
}

function kelvinToF(degInK) {
    return (1.8 * (degInK - 273.15) + 32)
}

module.exports = {
    kelvinToC,
    kelvinToF
}