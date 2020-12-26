// function


// function declaration
/*
Можем обращаться когда захотим, например можно перенести её вниз
при этом всё будет работать
 */
/*
function greet(name){
    console.log('Привет '+ name)
}
 */
//function expression
/*
Невозможно перенести ниже вызова. Ошибка инициализаци
 */
/*
const greet2 =function (name){
    console.log('Привет2 '+ name)
}
*/
// greet('Лена')
// greet2('Лёня')

//console.log(typeof greet2)

//console.dir(greet)

//2 - Анонимные функции
/*
let counter = 0
setInterval(function (){
    console.log(++counter)
}, 1000)
*/


// 3 - Стрелочные функции
/*
function greet(name){
    console.log('Привет '+ name)
}

const arrow = (name , age) =>{
    console.log('Привет '+ name +' и возвраст' + age)
}

const arrow2 = name => console.log('Привет '+ name)

const pow2 = num =>{
    return num ** 2
}
const newpow2 = num => num ** 2


arrow('Leonid')
arrow2('Leonid')
console.log(pow2(5))
console.log(newpow2(5))
*/


// 4 - Параметры по умолчанию
/*
const sum = (a = 41,b=1) => a + b
console.log(sum())

function sumAll(...all){        //принимает неогранниченное количество параметров
    let result =0
    for(let num of all){
        result += num
    }
    return result
}
console.log(sumAll(1,2,3))
*/


//5 Замыкания           полезны при создании приватных переменных
function createMember(name){
    return function (lastName){
        console.log(name+lastName)
    }
}
const logWithLastName = createMember('Leonid')
console.log(logWithLastName('BEST'))
console.log(logWithLastName('Super'))

