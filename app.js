import qoa from "qoa"
import { multipication, addition, subtruction, division } from "./calculator.js"
import { isAdditon, isDivision, isMultiplication, isSubtruction } from "./validated.js"

const confirm = await qoa.confirm({
    query: 'Vous voulez faire du calcule ?',
    handle: 'confirm',
    accept: 'o',
    deni: 'n'
})


const isConfirm = (confirm) => {
    //run commande exit
    if (!confirm.confirm) {
        process.exit(2)
    }
}

const isResult = (result) => {
    return isNaN(result) ? "Vous étes un idiot(e) !" : result
}

isConfirm(confirm);

const myQoa = async () => {

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

const data = await myQoa()



if (isAdditon(data.operator)) {
    console.log("La somme est egale à:", isResult(addition(data)));
}

if (isMultiplication(data.operator)) {
    console.log("La multiplication est egale à:", isResult(multipication(data)));
}

if (isSubtruction(data.operator)) {
    console.log("La reste est egale à:", isResult(subtruction(data)));
}

if (isDivision(data.operator)) {
    console.log("La division est egale à:", isResult(division(data)));
}