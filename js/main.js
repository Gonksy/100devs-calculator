//Calculator Object > Methods Object > Buttons object, Display object
//Buttons object: 10 number inputs, 4 binary operators, equal
//Display object: When user hits button: Wipes display, shows user input.
//                When user hits equal: Wipes display, shows ouput of equation.


function Calculator(str) {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
    '/': (a, b) => a + b,
    '+': (a, b) => a + b,
  }

  this.calculate = (str) => {
    let tempArray = str.split(' ')
    let a = tempArray[0]
    let op = tempArray[1]
    let b = tempArray[2]
    return this.methods[op](a, b)
  }

}

