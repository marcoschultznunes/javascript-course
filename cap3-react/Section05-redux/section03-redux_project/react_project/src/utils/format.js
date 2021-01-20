export const formatMoney = (value) => {
    value = value.toFixed(2)
    return String(value).replace('.', ',')
}
