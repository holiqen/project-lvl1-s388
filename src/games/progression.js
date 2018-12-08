import startGame from '..';
import getRandomNumber from '../utils';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;
const progression = () => {
  const a = getRandomNumber(0, 100);
  let startProg = a;
  let finishedProgression = '';
  let answer = 0;
  const position = getRandomNumber(0, lengthProgression);
  const step = getRandomNumber(2, 5);
  for (let i = 0; i < lengthProgression; i += 1) {
    if (i === position) {
      finishedProgression = `${finishedProgression} ..`;
      answer = a + (step * i);
    } else {
      finishedProgression = `${finishedProgression} ${startProg}`;
    }
    startProg += step;
  }
  const question = finishedProgression.trim();
  const correctAnswer = String(answer);
  return { question, correctAnswer };
};

export default () => startGame(description, progression);
