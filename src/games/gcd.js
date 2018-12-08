import startGame from '..';
import getRandomNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (x, y) => {
  let q = x;
  let w = y;
  if (q === 0) {
    return w;
  } while (w !== 0) {
    if (q > w) {
      q -= w;
    } else {
      w -= q;
    }
  } return q;
};
const gcd = () => {
  const a = getRandomNumber(0, 100);
  const b = getRandomNumber(0, 100);
  const question = `${a} ${b}`;
  const correctAnswer = String(getGcd(a, b));
  return { question, correctAnswer };
};

export default () => startGame(description, gcd);
