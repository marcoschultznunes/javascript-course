export const ucFirst = (string) => {
    return string[0].toUpperCase() + string.slice(1)
}

export const ucFirstDeleteLast = (string) => {
    return string[0].toUpperCase() + string.slice(1, string.length - 1)
}