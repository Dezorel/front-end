class ButtonCheckBox {
    constructor(title, type) {
        this.title = title
        this.type = type
        this.isClick = false
    }
    changeStyle(){
        this.isClick = !this.isClick
        this.write()
    }
    write(){
        if(this.isClick){
            app.message += ' '+this.type +':'+ this.title
        }
        else {
            if(app.message.indexOf(this.title)){
                app.message = app.message.replace(this.type +':'+ this.title, '');
            }
        }
    }
}
let app = new Vue({
    el: '#up',
    data: {
        message: '',
        todoButtonList:[
            new ButtonCheckBox(
                'Лэндинг',
                'Работа'
            ),
            new ButtonCheckBox(
                'Сайт под ключ',
                'Работа'
            ),
            new ButtonCheckBox(
                'Мобильное приложение',
                'Работа'
            ),
            new ButtonCheckBox(
                'Проконсультироваться',
                'Работа'
            ),
        ],
        priceList:[
            new ButtonCheckBox(
                'Минимальный',
                'Бюджет'
            ),
            new ButtonCheckBox(
                '50$',
                'Бюджет'
            ),
            new ButtonCheckBox(
                '80$',
                'Бюджет'
            ),
            new ButtonCheckBox(
                '100$',
                'Бюджет'
            ),
            new ButtonCheckBox(
                'Неограниченный',
                'Бюджет'
            ),
        ],
    },
    methods:{

    }
})