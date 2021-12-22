export function kelvinToC(degInK) {
    return (degInK - 273.15);
}

export function kelvinToF(degInK) {
    return (1.8 * (degInK - 273.15) + 32)
}