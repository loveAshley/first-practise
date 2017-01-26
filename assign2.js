"use strict";
let myAry =[ ]

const myVal = process.argv

console.log(myVal[2])

// Number(myVal[2])
// Number(myVal[3])

myAry.push(Number(myVal[2]))
myAry.push(Number(myVal[3]))

console.log(myAry)

// console.log(myVal)

console.log(myAry[0] + myAry[1])