


let app = new Vue({
    el:'#app',
    data(){
        return {        //возвращаем объект который является моделями для нашего приложения
            form: {      //Создаю объект форм, у него 2 контрола
                name: '',
                value: '',
            },
            contacts: []
        }
    },
    computed:{
      canCreate(){
          return this.form.value.trim() && this.form.name.trim()
      }
    },
    methods:{
        createContact(){
            const {...contact} = this.form
            this.contacts.push({...contact, id: Date.now(), marked: false })
            console.log(this.contacts)
            this.form.name = this.form.value = ''
        },
        markedContact(id){
            const contact = this.contacts.find(c => c.id === id)
            contact.marked = true
        },
        deleteContact(id){
            this.contacts = this.contacts.filter(c => c.id !== id)
        }
    },
})
