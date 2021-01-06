Vue.component('test',{
    props: {
        title: String,
        subtitle: String,
        text: String,
        isClick: Boolean,
    },
    template: '<div class="card" style="width: 18rem; background-color: ">\n' +
        '  <div class="card-body">\n' +
        '    <h5 class="card-title">{{title}}</h5>\n' +
        '    <h6 class="card-subtitle mb-2 text-muted">{{subtitle}}</h6>\n' +
        '    <p class="card-text">{{text}}</p>\n' +
        '  </div>\n' +
        '</div>',
})

class Post{
    constructor(title, subtitle, text) {
        this.title = title
        this.subtitle = subtitle
        this.text = text
    }
}

let app = new Vue({
    el: '#thisApp',
    data: {
        list:[
            new Post(
                'this',
                'is',
                'teeesst'
            ),
            new Post(
                'other',
                'text',
                'her'
            ),
            new Post(
                '1',
                '2',
                '3'
            )
        ]
    },
    methods: {

    }
})