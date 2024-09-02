//This file has some general functions used in the project

const currency_format = (valor) => {
    //This function format the value in the USD currency string

const formatter = new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD'
});

return formatter.format(valor);

}


const calc_interest = (cantidad, plazo) => {
    //This function return the interest based on the quantity borrowed
    //and the term selected by client

    let amount = cantidad;

    //add interes based on the quantity
    if(amount < 5000)
        amount *= 1.2
    else if(amount >= 5000 && amount < 10000)
        amount *= 1.4
    else if(amount >= 10000 && amount < 15000)
        amount *= 1.6
    else
        amount *= 2.0

    //add interes based on the term
    if(plazo === 6)
        amount *= 1.2
    else if(plazo === 12)
        amount *= 1.3
    else if(plazo === 24)
        amount *= 1.4

    return amount;

}


export {
    currency_format,
    calc_interest
}
