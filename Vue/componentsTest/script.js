// идея такая - при нажатии на пост подсвечивать его тем или иным цветом, работая только с компонентами


Vue.component('test',{
    props: {
        title: String,
        subtitle: String,
        text: String,
        isClick: Boolean,
    },
    template: '<div class="card" style="width: 18rem;">\n' +
        '  <div class="card-body">\n' +
        '    <h5 class="card-title">{{title}}</h5>\n' +
        '    <h6 class="card-subtitle mb-2 text-muted">{{subtitle}}</h6>\n' +
        '    <p class="card-text">{{text}}</p>\n' +
        '  </div>\n' +
        '</div>',
    methods: {
        changeThisColor(){
            if(this.isClick === true){
                this.isClick = false
            }
            else{
                this.isClick = true
            }
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
                '1',
                '2',
                '3',
                true
            )
        ]
    },
    methods: {

    }
})