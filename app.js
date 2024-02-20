const qoa = require('qoa')

const isAdditon = (operator) => {
    return operator === 'addition' ? true : false
}

const isMultiplication = (operator) => {
    return operator === 'multiplicaton' ? true : false
}

const isSubtruction = (operator) => {
    return operator === 'soustraction' ? true : false
}

const isDivision = (operator) => {
    return operator === 'division' ? true : false
}

const multipication = (number) => {
    const { firstValue, secondValue } = number
    return parseFloat(firstValue) * parseFloat(secondValue)
}

const addition = (number) => {
    const { firstValue, secondValue } = number
    return parseFloat(firstValue) + parseFloat(secondValue)
}

const subtruction = (number) => {
    const { firstValue, secondValue } = number
    return parseFloat(firstValue) - parseFloat(secondValue)
}

const division = (number) => {
    const { firstValue, secondValue } = number
    return parseFloat(firstValue) / parseFloat(secondValue)
}

const input = async () => {
    const secure = await qoa.secure({
        query: 'Saisir un mot de passe: ',
        handle: 'secure'
    })

    const value = await qoa.input({
        query: 'Saisir un nombre: ',
        handle: 'firstValue'
    })

    const operator = await qoa.interactive({
        query: 'Choisir un operateur: ',
        handle: 'operator',
        symbol: '--',
        menu: [
            'addition',
            'multiplication',
            'division',
            'soustraction'
        ]
    })

    const value2 = await qoa.input({
        query: 'Saisir un nombre 2: ',
        handle: 'secondValue'
    })

    return Object.assign({}, value, value2, operator)
}

input()
    .then(data => {
        if (isAdditon(data.operator)) {
            console.log("La somme est egale à: ", addition(data));
        }

        if (isMultiplication(data.operator)) {
            console.log("La multiplication est egale à: ", multipication(data));
        }

        if (isSubtruction(data.operator)) {
            console.log("La reste est egale à: ", subtruction(data));
        }

        if (isDivision(data.operator)) {
            console.log("La division est egale à: ", division(data));
        }
    })