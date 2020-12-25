// 1- number
/*
const num = 42  //int
const float = 42.42     //float
const pow = 10e3    //число со степенью

console.log(Number.MAX_SAFE_INTEGER)
console.log(Math.pow(2,53)-1)

console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NaN) //not a number
console.log(Number.isNaN(42))

const stringInt = '40'
console.log(Number.parseInt(stringInt) + 2)
*/
/*
console.log(0.4+0.2)        //проблема
console.log((0.4+0.2).toFixed(1))      //решение - получаем знаки после запятой
console.log(parseFloat((0.4+0.2).toFixed(1)))
*/

//2 - BIGInt
/*
console.log(typeof 9007199254740991999999n)
//console.log(typeof 9007199254740991999999.123n)     //err
console.log(9007199254740991999999n - 90071992547409919999n)
*/
//console.log(10n - 4)  //err
/*
console.log(parseInt(10n) - 4)
console.log(10n - BigInt(4))
console.log(5n/2n)      //result 2

*/

//3 - Math
/*
console.log(Math.PI)
console.log('Округление в меньшую сторону ',Math.floor(4.9))
console.log('Округление в большую сторону ',Math.ceil(4.9))
console.log('Обычное округление сторону ',Math.round(4.2))
console.log(Math.trunc(4.9))
console.log(Math.random())
*/

// 4 - Example
/*
function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)        //прибавляем единицу что бы не потерять макс значение при округлении
}

console.log(getRandom(10, 42))
*/


