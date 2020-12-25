// function


// function declaration
/*
Можем обращаться когда захотим, например можно перенести её вниз
при этом всё будет работать
 */
function greet(name){
    console.log('Привет '+ name)
}
//function expression
/*
Невозможно перенести ниже вызова. Ошибка инициализаци
 */
const greet2 =function (name){
    console.log('Привет2 '+ name)
}

// greet('Лена')
// greet2('Лёня')

//console.log(typeof greet2)

console.dir(greet)








