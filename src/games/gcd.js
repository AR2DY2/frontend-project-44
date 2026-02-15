import runGame from '../index.js'

const gameRule = 'Find the greatest common divisor of given numbers.'

const getRandomNumber = () => Math.floor(Math.random() * 50) + 1

const gcd = (a, b) => {

  let num1 = a
  let num2 = b
  
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2
    } else {
      num2 -= num1
    }
  }
  return num1
}

const generateRound = () => {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()
  
  const question = `${num1} ${num2}`
  const correctAnswer = gcd(num1, num2).toString()
  
  return { question, correctAnswer }
}

const runGcdGame = () => {
  runGame(gameRule, generateRound)
}

export default runGcdGame