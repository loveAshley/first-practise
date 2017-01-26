"use strict";

let myArr =[]

const myVal = process.argv

console.log(myVal)

let totalName =Number(myVal[2]) +Number(myVal[3])

console.log(totalName)

if (10 < totalName < 100) {
    console.log('lower Condition')
} else if (100 < totalName < 1000)  {
    console.log('higher Condition')
}