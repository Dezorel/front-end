let app = new Vue({
    el: '.app',
    data: {
        message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString(),
        text: 'In this area can be your text'
    },
    methods: {
        reverseMessage: function () {
            this.text = this.text.split('').reverse().join('')
        }
    }
})