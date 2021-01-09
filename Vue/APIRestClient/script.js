import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js'

new Vue({
    el:'#app',
    data(){
        return {        //возвращаем объект который является моделями для нашего приложения
            form:{      //Создаю объект форм, у него 2 контрола
                name: '',
                value: '',
            }
        }
    },
    methods:{

    },
})
