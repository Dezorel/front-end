//1 - Переменные
// var не использовать - плохой тон
/*
const firstName = 'Leonid'
let myAge = 20
//console.log(myAge)
*/

//2 - мутирование
/*
console.log('имя человека '+ firstName + ', а возвраст '+myAge)

myAge = prompt('Введите число')

console.log('имя человека '+ firstName + ', а возвраст '+myAge)
*/


//3 - Операторы всё по стандартам обычных языков
/*
const currentYear = 2020;
const bearthYear = 2000;
const age = currentYear - bearthYear

console.log( age )
*/


// 4 - Типы данных(примитивные)
/*
const isProgrammer = true
const name = 'Leonid'
const age = 20
let x

console.log(typeof isProgrammer)
console.log(typeof name)
console.log(typeof age)
console.log(typeof x)
console.log(null)
*/

//5 - Приоритеты операторов
/*
const fullAge = 20
const birthYear = 2000
const currentYear = 2020

const isFullAge = (currentYear - birthYear) >= fullAge
console.log(isFullAge)
*/

//6 Условные операторы
/*
//тернарное выражение
const isReady = false
isReady ? console.log('Всё готово!') : console.log('Ничего не готово!')
*/


// 8 - Функции
/*
function calculateAge(year){
    return 2020-year
}
console.log(calculateAge(2000))

function logInfoAbout(name, year){
    const age = calculateAge(year)
    console.log('Человек по имени ' +name + ' сейчас имеет возвраст ' + age)
}
logInfoAbout('Leonid', 2000)
*/

// 9 - Массивы
/*
const cars = ['mazda' , 'mercedes', 'ford']
//const cars = new Array(['mazda' , 'mercedes', 'ford'])    // такое не используется
console.log(cars)
console.log(cars[1])
console.log(cars.length)

cars[0] = 'Porsche'
console.log(cars)
cars[cars.length] = 'Mazda'     //скалыдвает в последний элемент - элемент
console.log(cars)
*/

// 10 - циклы
/*
const cars = ['mazda' , 'mercedes', 'ford']
// for (let i = 0; i<cars.length; i++){
//     console.log(cars[i])
// }

for(let car of cars){
    console.log(car)
}
*/


//11 - Объекты










