let app = new Vue({
    el:'#app',
    data:{
        currentNumber: '',
        operator: null,
        previous: null,
        operatorClicked: false,
    },
    methods:{
        setPrevious(){
            this.previous = this.currentNumber
            this.operatorClicked = true
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
        },
        multiplication(){
          this.operator = (a,b) => a * b;
            this.setPrevious()
        },
        plus(){
          this.operator = (a,b) => a + b;
            this.setPrevious()
        },
        minus(){
          this.operator = (a,b) => a - b;
            this.setPrevious()
        },
        equal() {
            this.currentNumber = `${this.operator(
                parseFloat(this.currentNumber),
                parseFloat(this.previous)
            )}`
            this.previous = null
        },
        dot(){
            if(this.currentNumber.indexOf('.') == '-1'){
                this.append('.')
            }
        }
    },
})