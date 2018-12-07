import startGame from '..';
import getRandomNumber from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = n => n % 2 === 0;
const makeGame = () => {
  const question = getRandomNumber(0, 1000);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => startGame(description, makeGame);
