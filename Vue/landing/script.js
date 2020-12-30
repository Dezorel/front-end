class ButtonCheckBox {
    constructor(title) {
        this.title = title
        this.isClick = false
    }
    changeStyle(){
        this.isClick = !this.isClick
    }
}

let app = new Vue({
    el: '#up',
    data: {
       //isClick: false
        buttonList:[
            new ButtonCheckBox(
                'Лэндинг',
            ),
            new ButtonCheckBox(
                'Сайт под ключ',
            ),
            new ButtonCheckBox(
                'Мобильное приложение',
            ),
            new ButtonCheckBox(
                'Проконсультироваться',
            ),
        ]
    },
    methods:{
        clickForm(){
            console.log(this.isClick)
            return  (this.isClick = !this.isClick)
        },
    }
})