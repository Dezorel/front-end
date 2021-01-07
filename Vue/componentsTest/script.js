// идея такая - при нажатии на пост подсвечивать его тем или иным цветом, работая только с компонентами


Vue.component('test',{
    props: {
        title: String,
        subtitle: String,
        text: String,
        isClick: Number,
    },
    template: '<div class="card" style="width: 18rem;">\n' +
        '  <div class="card-body">\n' +
        '    <h5 class="card-title">{{title}}</h5>\n' +
        '    <h6 class="card-subtitle mb-2 text-muted">{{subtitle}}</h6>\n' +
        '    <p class="card-text">{{text}}</p>\n' +
        '  </div>\n' +
        '</div>',
    methods: {

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
                2
            ),
            new Post(
                'other',
                'text',
                'her',
                2
            ),
            new Post(
                '1',
                '2',
                '3',
                1
            )
        ]
    },
    methods: {

    }
})