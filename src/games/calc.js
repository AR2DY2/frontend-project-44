import runGame from '../index.js'

const gameRule = 'What is the result of the expression?'

const operations = ['+', '-', '*']

const getRandomNumber = () => Math.floor(Math.random() * 20) + 1

const getRandomOperation = () => {
  const randomIndex = Math.floor(Math.random() * operations.length)
  return operations[randomIndex]
}

const calculate = (num1, num2, operator) => {
  switch (operator) {
  case '+':
    return num1 + num2
  case '-':
    return num1 - num2
  case '*':
    return num1 * num2
  default:
    throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateRound = () => {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()
  const operator = getRandomOperation()

  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = calculate(num1, num2, operator).toString()

  return { question, correctAnswer }
}

const runCalcGame = () => {
  runGame(gameRule, generateRound)
}

export default runCalcGame