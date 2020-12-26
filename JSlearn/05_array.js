// Array

const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']
const fib = [1,1,2,3,5,8,13]
//const fib = [1,1,2,3,5,8,13,'21', true]       //такое возможно
/*
cars.push('Reno')     //метод для создания последнего элемента
cars.unshift('Volga')   //метод для создания первого элменета
const firstCar = cars.shift()    //удаляет первый элемент
const lastCar = cars.pop()      //удаляет последний элемент
console.log(firstCar)
console.log(lastCar)
console.log(cars)


console.log(cars.reverse())
console.log(cars)
*/

//Задача 1
/*
//переворот строки в обратном порядке
const text = 'Привет я изучаю JS'
const reversText = text.split('').reverse().join('')       //split - разделяет по опр.символу   join - соединяет по символу
console.log(reversText)
*/
/*
const index = cars.indexOf('BMW')      //возвращает индекс искомого элемента
console.log(cars[index])
cars[index] = 'Porsche'
console.log(cars)
*/
/*
const people = [
    {name: 'Vlad', buget:4200},
    {name: 'Vika', buget:6800},
    {name: 'Elena', buget:3500}
]
const index2 = people.findIndex(function (person){
    return   person.buget === 3500
})
console.log(people[index2])
const person = people.find(function (person){
    return   person.buget === 3500
})
console.log(person)
*/
//const person = people.find(person=> person.buget === 3500)




