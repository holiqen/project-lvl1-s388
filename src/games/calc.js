import startGame from '..';
import getRandomNumber from '../utils';

const description = 'What is the result of the expression?';
const calc = () => {
  const x = getRandomNumber(0, 100);
  const y = getRandomNumber(0, 100);
  const randomSigns = getRandomNumber(0, 2);
  const getSigns = {
    0: {
      getString: (a, b) => `${a} + ${b}`,
      getAnswer: (a, b) => a + b,
    },
    1: {
      getString: (a, b) => `${a} - ${b}`,
      getAnswer: (a, b) => a - b,
    },
    2: {
      getString: (a, b) => `${a} * ${b}`,
      getAnswer: (a, b) => a * b,
    },
  };
  const question = getSigns[randomSigns].getString(x, y);
  const correctAnswer = String(getSigns[randomSigns].getAnswer(x, y));
  return { question, correctAnswer };
};

export default () => startGame(description, calc);
