import startGame from '../index';
import { getRandomNumber } from '../utils';

const description = 'What is the result of the expression?';
const calc = () => {
  const x = getRandomNumber(0, 100);
  const y = getRandomNumber(0, 100);
  const randomSigns = getRandomNumber(0, 2);
  const getSigns = {
    0: {
      getString: (x, y) => `${x} + ${y}`,
      getAnswer: (x, y) => x + y
    },
    1: {
      getString: (x, y) => `${x} - ${y}`,
      getAnswer: (x, y) => x - y
    },
    2: {
      getString: (x, y) => `${x} * ${y}`,
      getAnswer: (x, y) => x * y
    }
  };
  const question = getSigns[randomSigns].getString(x, y);
  const correctAnswer = String(getSigns[randomSigns].getAnswer(x, y));
  return { question, correctAnswer };
};

export default () => startGame(description, calc);
