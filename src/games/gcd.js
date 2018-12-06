import startGame from '../index';
import getRandomNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const gcd = () => {
  const a = getRandomNumber(0, 100);
  const b = getRandomNumber(0, 100);
  const question = `${a} ${b}`;
  const getNod = (x, y) => {
    if (x === 0) {
      return y;
    } while (y !== 0) {
      if (x > y) {
        x -= y; // eslint-disable-line no-param-reassign
      } else {
        y -= x; // eslint-disable-line no-param-reassign
      }
    } return x;
  };
  const correctAnswer = String(getNod(a, b));
  return { question, correctAnswer };
};

export default () => startGame(description, gcd);
