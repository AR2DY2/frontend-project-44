import runGame from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Функция для получения случайного числа от 1 до 100
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

// Функция проверки числа на простоту (предикат)
const isPrime = (num) => {
  // Числа меньше 2 не являются простыми
  if (num < 2) {
    return false;
  }
  
  // Проверяем делители от 2 до квадратного корня из числа
  // Если число делится нацело на какой-то делитель — оно составное
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
};

// Генерация одного раунда
const generateRound = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  
  return { question, correctAnswer };
};

const runPrimeGame = () => {
  runGame(gameRule, generateRound);
};

export default runPrimeGame;