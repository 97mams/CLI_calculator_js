import qoa from "qoa"
import { multipication, addition, subtruction, division } from "./calculator.js"
import { isAdditon, isDivision, isMultiplication, isSubtruction } from "./validated.js"

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

const data = await input()

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
