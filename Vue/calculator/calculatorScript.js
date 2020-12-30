Vue.component('history',{
    props: ['text'],
    template: '<p>{{text}}</p>'
})
let app = new Vue({
    el:'#app',
    data:{
        currentNumber: '',
        operator: null,
        previous: null,
        operatorClicked: false,
        historyList: [],
        curOperator: '',
    },
    methods:{
        setPrevious(){
            this.previous = this.currentNumber
            this.operatorClicked = true
        },
        setOperator(oper){
            this.curOperator = oper
        },
        append(num){
            if(this.operatorClicked){
                this.currentNumber =''
                this.operatorClicked = false
            }
            this.currentNumber = `${this.currentNumber}${num}`
        },
        clear(){
          this.currentNumber = ''
        },
        percent(){
          this.currentNumber /=100
        },
        division(){
          this.operator = (a,b) => a / b;
            this.setPrevious()
            this.setOperator('/')
        },
        multiplication(){
          this.operator = (a,b) => a * b;
            this.setPrevious()
            this.setOperator('X')
        },
        plus(){
          this.operator = (a,b) => a + b;
            this.setPrevious()
            this.setOperator('+')
        },
        minus(){
          this.operator = (b,a) =>{
              return a - b;
          }
            this.setOperator('-')
            this.setPrevious()
        },
        equal() {
            this.historyList.push(this.currentNumber + ' ' + this.curOperator + ' ' +this.previous)
            this.currentNumber = `${this.operator(
                parseFloat(this.currentNumber),
                parseFloat(this.previous)
            )}`
            this.historyList.push(' = ' + this.currentNumber)
            this.historyList.push('----------')
            this.previous = null

        },
        dot(){
            if(this.currentNumber.indexOf('.') == '-1'){
                this.append('.')
            }
        }
    },
})