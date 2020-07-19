class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clean()
    }

    clean() {
        this.currentOperandTextElement = ''
        this.previousOperandTextElement = ''
        this.operation = undefined
    }
    
    delete() {
    
    }
    
    appendNumber(number) {
        this.currentOperand = number
        // this.currentOperand = this.currentOperand.toString() + number.toString()
        console.log(this.currentOperand)
    }
    
    chooseOperation(operation) {
    
    }
    
    compute() {
    
    }
    
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}

const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const cleanButton = document.querySelector('[data-clean]')
const deleteButton = document.querySelector('[data-delete]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

cleanButton.addEventListener('click', button => {
    calculator.clean()
    calculator.updateDisplay()
})

