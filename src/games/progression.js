import runGame from '../index.js'

const gameRule = 'What number is missing in the progression?'

// Функция для генерации арифметической прогрессии
const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i)
  }
  return progression
}

// Функция для преобразования прогрессии в строку со скрытым элементом
const formatProgression = (progression, hiddenIndex) => {
  const formatted = [...progression]
  formatted[hiddenIndex] = '..'
  return formatted.join(' ')
}

// Генерация одного раунда
const generateRound = () => {
  // Параметры прогрессии
  const length = 10 // длина прогрессии
  const start = Math.floor(Math.random() * 10) + 1 // начальное число от 1 до 10
  const step = Math.floor(Math.random() * 5) + 1 // шаг от 1 до 5
  const hiddenIndex = Math.floor(Math.random() * length) // индекс скрытого элемента (0-9)

  // Генерируем прогрессию
  const progression = generateProgression(start, step, length)
  
  // Правильный ответ - элемент по скрытому индексу
  const correctAnswer = progression[hiddenIndex].toString()
  
  // Форматируем вопрос
  const question = formatProgression(progression, hiddenIndex)
  
  return { question, correctAnswer }
}

const runProgressionGame = () => {
  runGame(gameRule, generateRound)
}

export default runProgressionGame