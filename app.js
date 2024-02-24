import qoa from "qoa"
import { multipication, addition, subtraction, division } from "./calculator.js"
import { isAdditon, isDivision, isMultiplication, isSubtraction } from "./validated.js"

const confirm = await qoa.confirm({
    query: 'Vous voulez faire un calcul ?',
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
    return isNaN(result) ? "Vous étes idiot(e) !" : result
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
    console.log("La somme est égale à:", isResult(addition(data)));
}

if (isMultiplication(data.operator)) {
    console.log("La multiplication est égale à:", isResult(multipication(data)));
}

if (isSubtraction(data.operator)) {
    console.log("La reste est égale à:", isResult(subtraction(data)));
}

if (isDivision(data.operator)) {
    console.log("La division est égale à:", isResult(division(data)));
}