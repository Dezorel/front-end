//DOM
const heading = document.getElementById('hello')
//const heading2 = document.getElementsByTagName('h2')        //множество элементов
const heading2 = document.querySelector('h2')   //соверменный метод похож на гет элемент бай ид
// Selector возвращает 1-й попавшийся элемент

const heading3 = heading2.nextElementSibling    //получение другого h2 элемента
const h2List = document.querySelectorAll('h2')


setTimeout(()=>{
    addStylesTo(heading, 'JavaScript')
},1500)

setTimeout(()=>{
    addStylesTo(heading2, 'Практикуйся', 'yellow', '2rem')
},3000)

const link = heading3.querySelector('a')
link.addEventListener('click', (event)=>{
    event.preventDefault()      //можно отменять поведение по умолчанию!!!
})
setTimeout(()=>{
    addStylesTo(link, 'и всё получится!' , 'blue')
    //addStylesTo(heading3.children[0], 'и всё получится!' , 'blue')
    //addStylesTo(heading3.querySelector('a'), 'и всё получится!' , 'blue')
},4500)

function addStylesTo(node, text, color = 'red', fontSize){
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.display ='block'
    node.style.width = '100%'
    if(fontSize){
        node.style.fontSize = fontSize
    }
}

heading.onclick = () =>{
    if(heading.style.color === 'red'){
        heading.style.color = 'black'
        heading.style.backgroundColor = 'white'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = 'black'
    }
}

heading2.addEventListener('dblclick' , ()=>{
    if(heading2.style.color === 'yellow'){
        heading2.style.color = 'black'
        heading2.style.backgroundColor = 'white'
    } else {
        heading2.style.color = 'yellow'
        heading2.style.backgroundColor = 'black'
    }
})



