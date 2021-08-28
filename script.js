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
    this.currentoperand = this.currentoperand.toString().slice(0,-1)

}

appendNumber(number){
    if(number=== '.' && this.currentoperand.includes('.'))  return
    this.currentoperand = this.currentoperand.toString() + number.toString()

}

chooseOperation(){
    if(this.currentoperand === '') return
    if(this.previousoperand !== '') {
        this.compute()
    }
    this.operation = operation
    this.previousoperand = this.currentoperand
    this.currentoperand = ''
    

}

compute(){
    let computation
    const prev = parseFloat(this.previousoperand)
    const current = parseFloat(this.currentoperand)
    if(isNaN(prev) || isNaN(current)) return
    switch(this.operation)
    {
        case '+':
            computation = prev + current
            break
        case '-':
            computation = prev - current
            break
        case '*':
            computation = prev * current
            break
        case '÷':
            computation = prev / current
            break
        default:
            return
    }
    this.currentoperand = computation
    this.operation = undefined
    this.previousoperand = ''

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

equalsButton.addEventListener('click',button => {
    calculator.compute()
    calculator.updtaDisplay()
})

allclearButton.addEventListener('click',button => {
    calculator.clear()
    calculator.updtaDisplay()
})

deletesButton.addEventListener('click',button => {
    calculator.delete()
    calculator.updtaDisplay()
})

