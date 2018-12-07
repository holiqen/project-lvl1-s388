import startGame from '../index';
import getRandomNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const getNod = (x, y) => {
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
  const correctAnswer = String(getNod(a, b));
  return { question, correctAnswer };
};

export default () => startGame(description, gcd);

// const getNod = (x, y) => {
//   if (x === 0) {
//     return y;
//   } while (y !== 0) {
//     if (x > y) {
//       x -= y;
//     } else {
//       y -= x;
//     }
//   } return x;
// };
