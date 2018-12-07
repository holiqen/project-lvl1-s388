import startGame from '../index';
import getRandomNumber from '../utils';

const description = 'What number is missing in the progression?';
const progression = () => {
  const a = getRandomNumber(0, 100);
  let startProg = a;
  let str = '';
  let answer = 0;
  const LENGTH_PROG = 10;
  const position = getRandomNumber(1, LENGTH_PROG);
  const step = getRandomNumber(2, 5);
  for (let i = 0; i < LENGTH_PROG; i += 1) {
    if (i === position) {
      str = `${str} ..`;
      answer = startProg;
    } else {
      str = `${str} ${startProg}`;
    }
    startProg += step;
  }
  const question = str.trim();
  const correctAnswer = String(answer);
  return { question, correctAnswer };
};

export default () => startGame(description, progression);
