import startGame from '../index';
import getRandomNumber from '../utils';

const description = 'What number is missing in the progression?';
const progression = () => {
  const a = getRandomNumber(0, 100);
  let str = '';
  let startProg = a;
  let answer = 0;
  const getPosition = getRandomNumber(1, 10);
  const step = getRandomNumber(2, 5);
  for (let i = 0; i < 10; i += 1) {
    if (i === getPosition) {
      str = `${str} ..`;
      answer = startProg;
    } else {
      str = `${str} ${startProg}`;
    }
    startProg += step;
  }
  const question = str;
  const correctAnswer = String(answer);
  return { question, correctAnswer };
};

export default () => startGame(description, progression);
