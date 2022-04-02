//Calculator Object > Methods Object > Buttons object, Display object
//Buttons object: 10 number inputs, 4 binary operators, equal
//Display object: When user hits button: Wipes display, shows user input.
//                When user hits equal: Wipes display, shows ouput of equation.
document.querySelector('#button0').addEventListener('click', ()=>{numberInput(0)})
document.querySelector('#button1').addEventListener('click', ()=>{numberInput(1)})
document.querySelector('#button2').addEventListener('click', ()=>{numberInput(2)})
document.querySelector('#button3').addEventListener('click', ()=>{numberInput(3)})
document.querySelector('#button4').addEventListener('click', ()=>{numberInput(4)})

document.querySelector('#button5').addEventListener('click', ()=>{numberInput(5)})
document.querySelector('#button6').addEventListener('click', ()=>{numberInput(6)})
document.querySelector('#button7').addEventListener('click', ()=>{numberInput(7)})
document.querySelector('#button8').addEventListener('click', ()=>{numberInput(8)})
document.querySelector('#button9').addEventListener('click', ()=>{numberInput(9)})

document.querySelector('#buttonMinus').addEventListener('click', ()=>{operatorInput('-')})
document.querySelector('#buttonMultiply').addEventListener('click', ()=>{operatorInput('*')})
document.querySelector('#buttonDivide').addEventListener('click', ()=>{operatorInput('/')})
document.querySelector('#buttonPlus').addEventListener('click', ()=>{operatorInput('+')})

document.querySelector('#buttonDecimal').addEventListener('click', ()=>{decimalInput()})

document.querySelector('#buttonEqual').addEventListener('click', ()=>{Calculate(`${num1} ${op} ${num2}`)})
// document.querySelector('#button0').valueNumber = 0

let num1 = ''
let num2 = ''
let op = ''
let result = ''

function numberInput(numInput){
  if (result) result = ''
  if (!op) num1 += numInput
  else num2 += numInput
  display()
}

function decimalInput(){
  if (!num1.includes('.') && !op) num1 += '.'
  else if (!num2.includes('.') && op) num2 += '.'
  display()
}


function operatorInput(opp){
  if (!op) op = opp
  display()
}

function operatorCalculate(calc){
  console.log(calc)
}




function Calculate(str) {
  const methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
  }

  let tempArray = str.split(' ')
  let a = +tempArray[0]
  let tempOp = tempArray[1]
  let b = +tempArray[2]
  console.log(a, tempOp, b)
  console.log(methods[tempOp](a, b))
  num1 = ''
  num2 = ''
  op = ''
  result =  methods[tempOp](a, b)
  display()
}

function display(){
  if (!result) document.querySelector('#displaySpan').innerHTML = `${num1} ${op} ${num2}`
  else document.querySelector('#displaySpan').innerHTML = `${result}`
}
