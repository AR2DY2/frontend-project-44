import runGame from '../index.js';

const gameRule = 'What is the result of the expression?';

// Возможные операции
const operations = ['+', '-', '*'];

// Функция для получения случайного числа от 1 до 20
const getRandomNumber = () => Math.floor(Math.random() * 20) + 1;

// Функция для получения случайной операции
const getRandomOperation = () => {
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
};

// Функция для вычисления результата
const calculate = (num1, num2, operator) => {
  switch (operator) {
  case '+':
    return num1 + num2;
  case '-':
    return num1 - num2;
  case '*':
    return num1 * num2;
  default:
    throw new Error(`Unknown operator: ${operator}`);
  }
};

// Генерация одного раунда
const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperation();

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator).toString();

  return { question, correctAnswer };
};

const runCalcGame = () => {
  runGame(gameRule, generateRound);
};

export default runCalcGame;