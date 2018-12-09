import startGame from '..';
import getRandomNumber from '../utils';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;
const progression = () => {
  const a = getRandomNumber(0, 100);
  let finishedProgression = '';
  const hiddenElementPosition = getRandomNumber(0, lengthProgression);
  const step = getRandomNumber(2, 5);
  const answer = a + (step * hiddenElementPosition);
  for ( let i = 0; i < lengthProgression; i += 1) {
    if (i === hiddenElementPosition) {
      finishedProgression += ` ..`;
    } else {
      const startProg = a + (step * i);
      finishedProgression += ` ${startProg}`;
    }
  }
  const question = finishedProgression.trim();
  const correctAnswer = String(answer);
  return { question, correctAnswer };
};

export default () => startGame(description, progression);
