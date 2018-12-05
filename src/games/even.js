import startGame from '..';
import { getRandomNumber, isEven } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';
const makeGame = () => {
  const question = getRandomNumber(0, 1000);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => startGame(description, makeGame);
