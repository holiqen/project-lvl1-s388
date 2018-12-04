import startGame from '../index'
import { getRandomNumber } from '../help'

const description = 'Answer "yes" if number even otherwise answer "no".';
const makeGame = () => {
  const question = getRandomNumber(0, 1000);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => startGame({description, makeGame});
