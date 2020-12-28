Vue.component('card-item',{
    props: {
        name: Object,

    },
    computed: {
        foundItemInList(){
            for(let i=0; i<6; i++)
            {
                if(!name.text)
                    return {
                        display: 'block'
                    }

            }
            return {
                display: 'none'
            }
        }
    },
    template: '<div class="col mb-4 mt-4">\n' +
        '            <div class="card">\n' +
        '                <div class="card-body">\n' +
        '                    <h5 class="card-title">{{name.text}}</h5>\n' +
        '                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in ' +
        'to additional content. This content is a little bit longer.</p>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>'
})

var app = new Vue({
    el: '#app',
    data: {
        foundItem: '',
        productsList:[
            {text: 'Картошка'},
            {text: 'Творог'},
            {text: 'Томаты'},
            {text: 'Торты'},
            {text: 'Морковь'},
            {text: 'Макароны'},
        ],
        descriptionList: [
            {text: 'Это Картошка возрадуйся! Она может стать твоей!'},
            {text: 'Это Творог возрадуйся! Он может стать твоим!'},
            {text: 'Это Томаты возрадуйся! Они могут стать твоими!'},
            {text: 'Это Торт возрадуйся! Он могжет стать твоим!'},
            {text: 'Это Морковь возрадуйся! Она может стать твоей!'},
            {text: 'Это Макароны возрадуйся! Они могут стать твоими!'},

        ]
    },
    methods:{

    }
})


