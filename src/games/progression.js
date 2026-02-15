import runGame from '../index.js'

const gameRule = 'What number is missing in the progression?'

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i)
  }
  return progression
}

const formatProgression = (progression, hiddenIndex) => {
  const formatted = [...progression]
  formatted[hiddenIndex] = '..'
  return formatted.join(' ')
}

const generateRound = () => {

  const length = 10
  const start = Math.floor(Math.random() * 10) + 1
  const step = Math.floor(Math.random() * 5) + 1
  const hiddenIndex = Math.floor(Math.random() * length)


  const progression = generateProgression(start, step, length)
  
  const correctAnswer = progression[hiddenIndex].toString()
  
  const question = formatProgression(progression, hiddenIndex)
  
  return { question, correctAnswer }
}

const runProgressionGame = () => {
  runGame(gameRule, generateRound)
}

export default runProgressionGame