import runGame from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const runEvenGame = () => {
  runGame(gameRule, generateRound);
};

export default runEvenGame;