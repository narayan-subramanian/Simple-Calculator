class Calculator{
    constructor(previousoperandTextElement,currentoperandTextElement){
    this.previousoperandTextElement = previousoperandTextElement
    this.currentoperandTextElement = currentoperandTextElement
    this.clear()
    }


clear(){
    this.previousoperand = ''
    this.currentoperand = ''
    this.operation = undefined
}

delete(){

}

appendNumber(number){
    if(number=== '.' && this.currentoperand.includes('.'))  return
    this.currentoperand = this.currentoperand.toString() + number.toString()

}

chooseOperation(){
    if(this.currentoperand === '') return
    this.operation = operation
    this.previousoperand = this.currentoperand
    this.currentoperand = ''

}

compute(){

}
updtaDisplay(){
    this.currentoperandTextElement.innerText = this.currentoperand
    this.previousoperandTextElement.innerText = this.previousoperand

 }
}
const numberButtons = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operand]')
const equalsButton = document.querySelector('[data-equals]')
const deletesButton = document.querySelector('[data-delete]')
const allclearButton = document.querySelector('[data-all-clear]')
const previousoperandTextElement = document.querySelector('[data-previous-operand]')
const currentoperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousoperandTextElement,currentoperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click',() =>{
        calculator.appendNumber(button.innerText)
        calculator.updtaDisplay()
    })
})

operationButton.forEach(button => {
    button.addEventListener('click',() =>{
        calculator.chooseOperation(button.innerText)
        calculator.updtaDisplay()
    })
})
