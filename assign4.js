"use strict";
const x = process.argv


let mealCost = [ ]
let tipPercent = [ ]


mealCost.push(Number(x[2]))
tipPercent.push(Number(x[3]))

console.log(mealCost)
console.log(tipPercent)

const tipAmount = (tipPercent / 100) * mealCost
console.log(tipAmount)
const totalOwing = tipAmount + Number(mealCost)
console.log(totalOwing)
const outPut = `your meal was $${mealCost} + a ${tipPercent}% tip = ${totalOwing}`

console.log(outPut)
