import startGame from '..';
import getRandomNumber from '../utils';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;
const progression = () => {
  const a = getRandomNumber(0, 100);
  // let startProg = a;
  let finishedProgression = '';
  const hiddenElementPosition = getRandomNumber(0, lengthProgression);
  const step = getRandomNumber(2, 5);
  const answer = a + (step * hiddenElementPosition);
  for ( let i = 0; i < lengthProgression; i += 1) {
    if (i === hiddenElementPosition) {
      const startProg = a + (step * i);
      finishedProgression = `${finishedProgression} ..`;
    } else {
      finishedProgression = `${finishedProgression} ${startProg}`;
    }
    // const startProg = a + (step * i);
  }
  const question = finishedProgression.trim();
  const correctAnswer = String(answer);
  return { question, correctAnswer };
};

export default () => startGame(description, progression);
