const qoa = require('qoa')

const isAdditon = (operator) => {
    return operator === 'addition' ? true : false
}

const isAdditon = (operator) => {
    return operator === 'addition' ? true : false
}

const isAdditon = (operator) => {
    return operator === 'addition' ? true : false
}



const mulipication = (number) => {
    const { firstValue, secondValue, operator } = number
    console.log(operator);
    return parseInt(firstValue) + parseInt(secondValue)
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
    .then(a => {
        if (isAdditon(a.operator)) {
            console.log("La somme est egale à: ", mulipication(a));
        }
    })


