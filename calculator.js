

export const multipication = (number) => {
    const { firstValue, secondValue } = number
    return parseFloat(firstValue) * parseFloat(secondValue)
}

export const addition = (number) => {
    const { firstValue, secondValue } = number
    return parseFloat(firstValue) + parseFloat(secondValue)
}

export const subtraction = (number) => {
    const { firstValue, secondValue } = number
    return parseFloat(firstValue) - parseFloat(secondValue)
}

export const division = (number) => {
    const { firstValue, secondValue } = number
    return parseFloat(firstValue) / parseFloat(secondValue)
}
