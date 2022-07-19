const data = { screen: '', expression: '', theEqualButtonWasPressed: false }
let { screen, expression, theEqualButtonWasPressed } = data

// -------------------------------------------------------------------------------------------------

const button = (symbol, value) => {
  const thereIsAnOperator = ['+', '-', '*', '/'].includes(expression.at(-1))

  if (theEqualButtonWasPressed && !thereIsAnOperator) {
    screen = symbol
    expression = value
    theEqualButtonWasPressed = false
    return
  }

  screen += symbol
  expression += value
}

// -------------------------------------------------------------------------------------------------

const operatorButton = (symbol, value) => {
  const thereIsAnOperator = ['+', '-', '*', '/'].includes(expression.at(-1))

  if (thereIsAnOperator) {
    screen = screen.slice(0, -1) + symbol
    expression = expression.slice(0, -1) + value
    return
  }

  if (theEqualButtonWasPressed && !thereIsAnOperator) {
    screen += symbol
    expression += value
    theEqualButtonWasPressed = false
    return
  }

  screen += symbol
  expression += value
}

// -------------------------------------------------------------------------------------------------

const clearButton = () => ({ screen, expression, theEqualButtonWasPressed } = data)

// -------------------------------------------------------------------------------------------------

const deleteButton = () => {
  if (expression === 'invalid expression') {
    screen = ''
    expression = ''
    return
  }

  screen = screen.slice(0, -1)
  expression = expression.slice(0, -1)
}

// -------------------------------------------------------------------------------------------------

const equalButton = () => {
  if (!expression) return

  try {
    screen = String(eval(expression))
    expression = screen
  } catch (err) {
    screen = 'invalid expression'
    expression = 'invalid expression'
  }

  theEqualButtonWasPressed = true
}

// -------------------------------------------------------------------------------------------------

const resolve = (symbol, value) => {
  const isAnOperator = ['+', '-', '*', '/'].includes(value)

  if (isAnOperator) return operatorButton(symbol, value)
  if (value === 'AC') return clearButton()
  if (value === 'DEL') return deleteButton()
  if (value === '=') return equalButton()

  // '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '(', ')'
  button(symbol, value)
}

// -------------------------------------------------------------------------------------------------

export { resolve, screen }
