// идея такая - при нажатии на пост подсвечивать его тем или иным цветом, работая только с компонентами


Vue.component('test',{
    props: {
        title: String,
        subtitle: String,
        text: String,
    },
    data(){
        return{
            isClick: false
        }
    },
    template: '<div :class="isClick ? \'text-success\' : \'text-danger\'" class="card mt-3" style="width: 18rem;" >\n' +
        '  <div class="card-body">\n' +
        '    <h5 class="card-title" >{{title}}</h5>\n' +
        '    <h6 class="card-subtitle mb-2 text-muted">{{subtitle}}</h6>\n' +
        '    <p class="card-text">{{text}}</p>\n ' +
        '       <a href="#" class="btn btn-primary" @click="clicked">Изменить</a>' +
        '  </div>\n' +
        '</div>',
    methods: {
        changeColor() {
            console.log(1)
            if(this.isClick){
                return{
                    backgroundColor: 'red'
                }
            }
            else{
                return{
                    backgroundColor: 'white'
                }
            }
        },
        clicked(){
            this.isClick = !this.isClick
            console.log(this.isClick)
        }
    }
})

class Post{
    constructor(title, subtitle, text, isClick) {
        this.title = title
        this.subtitle = subtitle
        this.text = text
        this.isClick = isClick
    }

}

let app = new Vue({
    el: '#thisApp',
    data: {
        list:[
            new Post(
                'this',
                'is',
                'teeesst',
                false
            ),
            new Post(
                'other',
                'text',
                'her',
                false
            ),
            new Post(
                'this true',
                'is true',
                'true app',
                true,
            ),
        ]
    },
    methods: {

    }
})