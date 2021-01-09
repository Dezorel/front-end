
new Vue({
    el:'#app',
    data(){
        return {        //возвращаем объект который является моделями для нашего приложения
            form: {      //Создаю объект форм, у него 2 контрола
                name: '',
                value: ''
            },
            contacts: []
        }
    },
    methods:{
        createContact(){
            const {...contact} = this.form
            this.contacts.push({...contact, id: Date.now() })
            console.log(this.contacts)
            this.form.name = this.form.value = ''
        }
    },
})
