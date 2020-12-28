Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>  {{ todo.text }}   </li>'
})

Vue.component('my-todo',{
    props: ['myTodo'],
    template: '<li> {{ myTodo.todoText }} </li>'
})

let app = new Vue({
    el: '.app',
    data: {
        message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString(),
        text: 'In this area can be your text',
        newTextTodo: '',
        groceryList: [
            {id:0 , text:'Купить овощи'},
            {id:1 , text:'Помыть посуду'},
            {id:2 , text:'Выучить VUE'},
            {id:3 , text:'Выспаться'}
        ],
        todoList:[],
        selected: '',
    },
    methods: {
        reverseMessage: function () {
            this.text = this.text.split('').reverse().join('')
        },
        createTodo: function (){
            this.todoList.push({ todoText: this.newTextTodo })
            this.newTextTodo =''
        }
    }
})